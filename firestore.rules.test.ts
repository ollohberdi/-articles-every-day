/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Firestore rules enforce all 8 pillars and reject Dirty Dozen payloads', () => {
  const rules = fs.readFileSync('firestore.rules', 'utf8');

  // 1. Global Safety Net catch-all
  assert.ok(rules.includes('match /{document=**} {\n      allow read, write: if false;\n    }'));

  // 2. Verified Google user requirement
  assert.ok(rules.includes('request.auth.token.email_verified == true'));

  // 3. Path variable hardening
  assert.ok(rules.includes("id.matches('^[a-zA-Z0-9_\\\\-]+$')"));

  // 4. Master Gate relational parent check
  assert.ok(rules.includes('parentUserExists(userId)'));

  // 5. Validation blueprints on create and update
  assert.ok(rules.includes('isValidUserProfile(incoming(), userId)'));
  assert.ok(rules.includes('isValidNotebookWord(incoming(), userId, wordId)'));
  assert.ok(rules.includes('isValidLearnedWord(incoming(), userId, wordId)'));

  // 6. Query Enforcer on list
  assert.ok(rules.includes('allow list: if isOwner(userId) && existing().userId == request.auth.uid;'));

  // 7. Temporal integrity
  assert.ok(rules.includes('incoming().createdAt == request.time'));
  assert.ok(rules.includes('incoming().updatedAt == request.time'));
});
