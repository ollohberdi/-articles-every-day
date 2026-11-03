/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  deleteDoc,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { UserSavedWord, VocabularyItem } from './types';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

// Sanitize strings and IDs to strictly match firebase-blueprint.json constraints
function sanitizeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 128) || 'item';
}

function truncateString(val: string, maxLen: number, fallback = 'Student'): string {
  const trimmed = (val || '').trim();
  if (!trimmed) return fallback.slice(0, maxLen);
  return trimmed.slice(0, maxLen);
}

/**
 * Ensures the student's parent `/users/{userId}` document exists in Firestore.
 */
export async function ensureStudentProfileDoc(user: User): Promise<void> {
  const userId = sanitizeId(user.uid);
  const userRef = doc(db, 'users', userId);
  const path = `users/${userId}`;

  try {
    const existingSnap = await getDoc(userRef);
    const displayName = truncateString(
      user.displayName || user.email?.split('@')[0] || 'Student',
      120
    );
    const photoURL = (user.photoURL || '').slice(0, 500);

    if (!existingSnap.exists()) {
      await setDoc(userRef, {
        userId,
        displayName,
        photoURL,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Saves or updates a single word in `/users/{userId}/notebook/{wordId}`
 * and also records it in `/users/{userId}/learned/{wordId}`.
 */
export async function saveWordToCloudNotebook(
  user: User,
  vocab: VocabularyItem | UserSavedWord
): Promise<void> {
  const userId = sanitizeId(user.uid);
  const wordId = sanitizeId(vocab.id);
  const notebookRef = doc(db, 'users', userId, 'notebook', wordId);
  const learnedRef = doc(db, 'users', userId, 'learned', wordId);
  const path = `users/${userId}/notebook/${wordId}`;

  try {
    await ensureStudentProfileDoc(user);
    const existingNotebook = await getDoc(notebookRef);
    const existingLearned = await getDoc(learnedRef);
    const batch = writeBatch(db);

    if (!existingNotebook.exists()) {
      const now = Date.now();
      const savedWord = vocab as Partial<UserSavedWord>;
      batch.set(notebookRef, {
        wordId,
        userId,
        word: truncateString(vocab.word, 100),
        phonetic: truncateString(vocab.phonetic, 120, '/.../'),
        partOfSpeech: truncateString(vocab.partOfSpeech, 40, 'noun'),
        definition: truncateString(vocab.definition, 600),
        cefrLevel: vocab.cefrLevel,
        exampleSentence: truncateString(vocab.exampleSentence, 600),
        collocations: (vocab.collocations || [])
          .slice(0, 10)
          .map((c) => truncateString(c, 120)),
        savedAt: typeof savedWord.savedAt === 'number' ? savedWord.savedAt : now,
        reviewInterval:
          typeof savedWord.reviewInterval === 'number' ? savedWord.reviewInterval : 1,
        repetitions: typeof savedWord.repetitions === 'number' ? savedWord.repetitions : 0,
        nextReviewDate:
          typeof savedWord.nextReviewDate === 'number'
            ? savedWord.nextReviewDate
            : now + 86400000,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }

    if (!existingLearned.exists()) {
      batch.set(learnedRef, {
        wordId,
        userId,
        cefrLevel: vocab.cefrLevel,
        createdAt: serverTimestamp(),
      });
    }

    await batch.commit();
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Removes a word from `/users/{userId}/notebook/{wordId}`.
 */
export async function removeWordFromCloudNotebook(
  user: User,
  rawWordId: string
): Promise<void> {
  const userId = sanitizeId(user.uid);
  const wordId = sanitizeId(rawWordId);
  const notebookRef = doc(db, 'users', userId, 'notebook', wordId);
  const path = `users/${userId}/notebook/${wordId}`;

  try {
    await deleteDoc(notebookRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Marks a word as learned in `/users/{userId}/learned/{wordId}`.
 */
export async function markWordLearnedInCloud(
  user: User,
  vocab: VocabularyItem
): Promise<void> {
  const userId = sanitizeId(user.uid);
  const wordId = sanitizeId(vocab.id);
  const learnedRef = doc(db, 'users', userId, 'learned', wordId);
  const path = `users/${userId}/learned/${wordId}`;

  try {
    await ensureStudentProfileDoc(user);
    const snap = await getDoc(learnedRef);
    if (!snap.exists()) {
      await setDoc(learnedRef, {
        wordId,
        userId,
        cefrLevel: vocab.cefrLevel,
        createdAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

/**
 * Removes a word from `/users/{userId}/learned/{wordId}`.
 */
export async function unmarkWordLearnedInCloud(
  user: User,
  rawWordId: string
): Promise<void> {
  const userId = sanitizeId(user.uid);
  const wordId = sanitizeId(rawWordId);
  const learnedRef = doc(db, 'users', userId, 'learned', wordId);
  const path = `users/${userId}/learned/${wordId}`;

  try {
    await deleteDoc(learnedRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Signs the student in with Google Popup.
 */
export async function signInStudentWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  await ensureStudentProfileDoc(result.user);
  return result.user;
}

/**
 * Signs out the current student.
 */
export async function signOutStudent(): Promise<void> {
  await firebaseSignOut(auth);
}
