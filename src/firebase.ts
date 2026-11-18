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
  updateDoc,
  deleteDoc,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { SubscriptionSettings, UserSavedWord, VocabularyItem } from './types';
import { emailToSubscriptionKey } from './utils/quizLogic';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

export function extractUserEmail(user: User | null | undefined): string {
  if (!user) return '';
  if (user.email) return user.email.trim().toLowerCase();
  const providerEmail = user.providerData?.find((p) => p?.email)?.email;
  return (providerEmail || '').trim().toLowerCase();
}

export const DEFAULT_SUBSCRIPTION_SETTINGS: SubscriptionSettings = {
  settingId: 'subscription',
  monthlyPriceText: '39,000 UZS / month',
  telegramUsername: '@ollohberdi',
  paymentInstructions:
    'Sign in with your Google account, then message the admin on Telegram with your Gmail address to activate full Pro access to all 70+ graded articles, interactive exercises, and printable PDF study sheets.',
};

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
 * Ensures the student's parent `/users/{userId}` document exists in Firestore
 * and keeps their Google email synced so the Admin Panel can list all registered Google users.
 */
export async function ensureStudentProfileDoc(user: User): Promise<void> {
  const userId = sanitizeId(user.uid);
  const userRef = doc(db, 'users', userId);
  const path = `users/${userId}`;

  try {
    const existingSnap = await getDoc(userRef);
    const cleanEmail = extractUserEmail(user).slice(0, 160);
    const displayName = truncateString(
      user.displayName || cleanEmail.split('@')[0] || 'Student',
      120
    );
    const photoURL = (user.photoURL || '').slice(0, 500);

    if (!existingSnap.exists()) {
      const payload: Record<string, unknown> = {
        userId,
        displayName,
        photoURL,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      if (cleanEmail.length >= 3) {
        payload.email = cleanEmail;
      }
      await setDoc(userRef, payload);
    } else {
      const existingData = existingSnap.data();
      const needsEmailUpdate = cleanEmail.length >= 3 && existingData.email !== cleanEmail;
      const needsNameUpdate = displayName && existingData.displayName !== displayName;
      if (needsEmailUpdate || needsNameUpdate) {
        const updates: Record<string, unknown> = {
          displayName: displayName || existingData.displayName || 'Student',
          updatedAt: serverTimestamp(),
        };
        if (cleanEmail.length >= 3) {
          updates.email = cleanEmail;
        }
        await updateDoc(userRef, updates);
      }
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
 * Admin-only: Grants or extends Pro access for a student by their Gmail address or Google UID (uid:<userId>).
 */
export async function grantStudentProByEmail(
  adminUser: User,
  rawStudentIdentifier: string,
  rawStudentName: string,
  durationDays: number,
  planLabel: string
): Promise<void> {
  const trimmed = rawStudentIdentifier.trim();
  const isUid = trimmed.startsWith('uid:');
  const cleanIdentifier = isUid
    ? trimmed.slice(0, 160)
    : trimmed.toLowerCase().slice(0, 160);
  const emailKey = emailToSubscriptionKey(cleanIdentifier);
  const subRef = doc(db, 'subscriptions', emailKey);
  const path = `subscriptions/${emailKey}`;

  try {
    const existingSnap = await getDoc(subRef);
    const now = Date.now();
    const baseTime =
      existingSnap.exists() &&
      typeof existingSnap.data().proUntil === 'number' &&
      existingSnap.data().proUntil > now
        ? existingSnap.data().proUntil
        : now;
    const proUntil = baseTime + Math.max(1, durationDays) * 86400000;
    const studentName = truncateString(
      rawStudentName || (isUid ? 'Google Student' : cleanIdentifier.split('@')[0]) || 'Student',
      120
    );
    const updatedByEmail = extractUserEmail(adminUser).slice(0, 160);

    if (!existingSnap.exists()) {
      await setDoc(subRef, {
        emailKey,
        studentEmail: cleanIdentifier,
        studentName,
        proUntil,
        planLabel: truncateString(planLabel, 60, 'Monthly Pro'),
        updatedByEmail,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      const existingData = existingSnap.data();
      await setDoc(subRef, {
        emailKey: existingData.emailKey,
        studentEmail: existingData.studentEmail,
        studentName,
        proUntil,
        planLabel: truncateString(planLabel, 60, 'Monthly Pro'),
        updatedByEmail,
        createdAt: existingData.createdAt,
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Admin-only: Revokes Pro access for a student by their Gmail address or Google UID (uid:<userId>).
 */
export async function revokeStudentProByEmail(rawStudentIdentifier: string): Promise<void> {
  const trimmed = rawStudentIdentifier.trim();
  const cleanIdentifier = trimmed.startsWith('uid:') ? trimmed : trimmed.toLowerCase();
  const emailKey = emailToSubscriptionKey(cleanIdentifier);
  const subRef = doc(db, 'subscriptions', emailKey);
  const path = `subscriptions/${emailKey}`;

  try {
    await deleteDoc(subRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Admin-only: Updates the public subscription price & Telegram instructions in `/settings/subscription`.
 */
export async function saveSubscriptionSettingsToCloud(
  settings: Omit<SubscriptionSettings, 'settingId'>
): Promise<void> {
  const settingId = 'subscription';
  const settingRef = doc(db, 'settings', settingId);
  const path = `settings/${settingId}`;

  try {
    await setDoc(settingRef, {
      settingId,
      monthlyPriceText: truncateString(settings.monthlyPriceText, 80, '39,000 UZS / month'),
      telegramUsername: truncateString(settings.telegramUsername, 80, '@ollohberdi'),
      paymentInstructions: truncateString(
        settings.paymentInstructions,
        500,
        DEFAULT_SUBSCRIPTION_SETTINGS.paymentInstructions
      ),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
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

