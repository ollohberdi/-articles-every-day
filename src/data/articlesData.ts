/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article } from '../types';
import { B1_ARTICLES } from './articlesB1';
import { B2_ARTICLES } from './articlesB2';
import { C1_ARTICLES } from './articlesC1';

export const ARTICLES_DATA: Article[] = [
  ...B1_ARTICLES,
  ...B2_ARTICLES,
  ...C1_ARTICLES,
];

export const ALL_TARGET_VOCABULARY = ARTICLES_DATA.flatMap((a) => a.targetVocabulary);
