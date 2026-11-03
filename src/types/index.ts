/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CEFRLevel = 'B1' | 'B2' | 'C1';

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';
  definition: string;
  cefrLevel: CEFRLevel;
  exampleSentence: string;
  collocations: string[];
  synonyms: string[];
  antonyms?: string[];
  notes?: string;
  saved?: boolean;
}

export interface MultipleChoiceExercise {
  id: string;
  targetWord: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ClozeExercise {
  id: string;
  sentenceWithBlank: string; // "The city implemented _____ policies to reduce emissions."
  targetWord: string;
  hint: string;
  options?: string[]; // Multiple choice options for lower levels or word bank
}

export interface MatchingPair {
  id: string;
  term: string;
  match: string; // definition or collocation
}

export interface MatchingExercise {
  id: string;
  instructions: string;
  pairs: MatchingPair[];
}

export interface WordFormationExercise {
  id: string;
  promptSentence: string; // "The new strategy significantly improved our _____ (PRODUCE)."
  rootWord: string;
  correctAnswer: string; // "productivity"
  hint: string;
  explanation: string;
}

export interface ArticleExercises {
  multipleChoice: MultipleChoiceExercise[];
  cloze: ClozeExercise[];
  matching: MatchingExercise;
  wordFormation?: WordFormationExercise[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  level: CEFRLevel;
  category:
    | 'History & Civilizations'
    | 'Science & Nature'
    | 'Psychology & Mind'
    | 'Technology & Innovation'
    | 'Environment'
    | 'Neuroscience & Politics'
    | 'Neuroscience & Psychology'
    | 'Technology & Society'
    | 'Culture & Language'
    | 'Modern Economics';
  readTime: string;
  wordCount: number;
  cefrSummary: string;
  themeColor: string; // Tailwind color token
  gradientFrom: string;
  gradientTo: string;
  paragraphs: string[];
  targetVocabulary: VocabularyItem[];
  exercises: ArticleExercises;
}

export interface UserSavedWord extends VocabularyItem {
  savedAt: number;
  reviewInterval: number; // in days
  repetitions: number;
  nextReviewDate: number;
}
