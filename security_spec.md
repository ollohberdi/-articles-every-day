# Firestore Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Strict Ownership & Verified Google Identity**: Every document under `/users/{userId}`, `/users/{userId}/notebook/{wordId}`, and `/users/{userId}/learned/{wordId}` is strictly private to the authenticated, email-verified user whose `request.auth.uid == userId`.
2. **Relational Sync (Master Gate)**: A `NotebookWord` or `LearnedWord` subcollection document can only be accessed or mutated if the parent `/users/{userId}` document exists and belongs to `request.auth.uid`.
3. **No PII Leakage**: `/users/{userId}` stores only non-PII display metadata (`userId`, `displayName`, `photoURL`, `createdAt`, `updatedAt`) and is readable only by the owner (`request.auth.uid == userId`).
4. **Immutable Ownership & Creation Timestamps**: `userId`, `wordId`, and `createdAt` can never be modified after creation; `createdAt` and `updatedAt` must equal `request.time`.

## 2. The "Dirty Dozen" Adversarial Payloads
1. **Unauthenticated Write**: `auth = null`, creating `/users/user_1` -> `PERMISSION_DENIED`.
2. **Unverified Email Spoof**: `auth = { uid: 'user_1', token: { email_verified: false } }`, creating `/users/user_1` -> `PERMISSION_DENIED`.
3. **Cross-User Profile Read (PII/Privacy Check)**: `auth = { uid: 'attacker' }`, reading `/users/victim` -> `PERMISSION_DENIED`.
4. **Identity Spoofing in Payload**: `auth = { uid: 'user_1' }`, creating `/users/user_1/notebook/v-b1-1` with `userId: 'user_2'` -> `PERMISSION_DENIED`.
5. **Shadow / Ghost Field Injection**: Creating `/users/user_1` with `{ userId: 'user_1', displayName: 'Ali', isAdmin: true, createdAt: request.time, updatedAt: request.time }` -> `PERMISSION_DENIED`.
6. **ID Poisoning Attack**: Creating `/users/user_1/notebook/invalid$id!@#` -> `PERMISSION_DENIED`.
7. **Orphaned Subcollection Write**: Creating `/users/user_1/notebook/v-b1-1` when `/users/user_1` does not exist -> `PERMISSION_DENIED`.
8. **Value Poisoning / Oversized String**: Updating `/users/user_1` with `displayName` of 5,000 characters -> `PERMISSION_DENIED`.
9. **Unbounded Array Injection**: Creating `/users/user_1/notebook/v-b1-1` with `collocations` array of 50 items -> `PERMISSION_DENIED`.
10. **Immutable Field Tampering**: Updating `/users/user_1/notebook/v-b1-1` with a modified `createdAt` or `userId` -> `PERMISSION_DENIED`.
11. **Forged Client Timestamp**: Creating `/users/user_1/learned/v-b1-1` with a past or future `createdAt != request.time` -> `PERMISSION_DENIED`.
12. **Unauthorized Cross-User List Query**: `auth = { uid: 'attacker' }`, listing `/users/victim/notebook` -> `PERMISSION_DENIED`.
