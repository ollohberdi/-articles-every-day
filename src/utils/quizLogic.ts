/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CEFRLevel = 'B1' | 'B2' | 'C1';

export interface ScoreResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  performanceBand: 'Mastery' | 'Proficient' | 'Developing' | 'Needs Review';
}

/**
 * Calculates user quiz score and categorizes mastery based on CEFR standards
 */
export function calculateQuizScore(correct: number, total: number): ScoreResult {
  if (total <= 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
      performanceBand: 'Needs Review',
    };
  }

  const clampedCorrect = Math.max(0, Math.min(correct, total));
  const percentage = Math.round((clampedCorrect / total) * 100);

  let performanceBand: ScoreResult['performanceBand'];
  if (percentage >= 85) {
    performanceBand = 'Mastery';
  } else if (percentage >= 70) {
    performanceBand = 'Proficient';
  } else if (percentage >= 50) {
    performanceBand = 'Developing';
  } else {
    performanceBand = 'Needs Review';
  }

  return {
    score: clampedCorrect,
    total,
    percentage,
    passed: percentage >= 70,
    performanceBand,
  };
}

/**
 * Calculates next Spaced Repetition (SRS) interval in days
 * grade: 0 (Again), 1 (Hard), 2 (Good), 3 (Easy)
 */
export function calculateNextSRSInterval(
  previousInterval: number,
  repetitions: number,
  grade: 0 | 1 | 2 | 3
): { intervalDays: number; newRepetitions: number } {
  if (grade === 0) {
    return { intervalDays: 1, newRepetitions: 0 };
  }

  if (repetitions === 0) {
    return { intervalDays: 1, newRepetitions: 1 };
  } else if (repetitions === 1) {
    return { intervalDays: grade === 3 ? 4 : 3, newRepetitions: 2 };
  } else {
    const multiplier = grade === 3 ? 2.5 : grade === 2 ? 1.8 : 1.2;
    const nextInterval = Math.round(previousInterval * multiplier);
    return {
      intervalDays: Math.max(1, nextInterval),
      newRepetitions: repetitions + 1,
    };
  }
}

/**
 * Normalizes and checks if a cloze/fill-in-the-blank answer matches expected
 */
export function verifyClozeAnswer(userInput: string, expectedWord: string): boolean {
  const cleanUser = userInput.trim().toLowerCase();
  const cleanExpected = expectedWord.trim().toLowerCase();
  return cleanUser === cleanExpected;
}

/**
 * Verifies matching definitions or collocations
 */
export function verifyMatchingPairs(
  userPairs: Record<string, string>,
  solutionMap: Record<string, string>
): { correctCount: number; totalPairs: number; matches: Record<string, boolean> } {
  const keys = Object.keys(solutionMap);
  let correctCount = 0;
  const matches: Record<string, boolean> = {};

  for (const key of keys) {
    const isCorrect = userPairs[key] === solutionMap[key];
    matches[key] = isCorrect;
    if (isCorrect) correctCount++;
  }

  return {
    correctCount,
    totalPairs: keys.length,
    matches,
  };
}

/**
 * Filters articles based on CEFR level, topic category, and search query
 */
export function filterArticles<
  T extends {
    id: string;
    level: CEFRLevel;
    category: string;
    title: string;
    subtitle?: string;
    targetVocabulary?: { word: string }[];
    paragraphs?: string[];
  }
>(
  articles: T[],
  filters: { level?: CEFRLevel | 'ALL'; category?: string; searchQuery?: string }
): T[] {
  return articles.filter((article) => {
    if (filters.level && filters.level !== 'ALL' && article.level !== filters.level) {
      return false;
    }
    if (filters.category && filters.category !== 'ALL' && article.category !== filters.category) {
      return false;
    }
    if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
      const q = filters.searchQuery.toLowerCase().trim();
      const inTitle = article.title.toLowerCase().includes(q);
      const inSubtitle = article.subtitle?.toLowerCase().includes(q) ?? false;
      const inVocabulary =
        article.targetVocabulary?.some((v) => v.word.toLowerCase().includes(q)) ?? false;
      const inParagraphs =
        article.paragraphs?.some((p) => p.toLowerCase().includes(q)) ?? false;
      const inCategory = article.category.toLowerCase().includes(q);

      if (!inTitle && !inSubtitle && !inVocabulary && !inParagraphs && !inCategory) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Converts an article title or string into a URL-safe slug
 */
export function slugifyArticleTitle(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Finds an article by its ID, URL slug, or title
 */
export function findArticleByParam<T extends { id: string; title: string }>(
  articles: T[],
  rawParam: string | null | undefined
): T | null {
  if (!rawParam) return null;
  let decoded = rawParam.trim();
  try {
    decoded = decodeURIComponent(decoded).trim();
  } catch {
    // Keep trimmed rawParam if malformed URI component
  }
  if (!decoded) return null;

  const lower = decoded.toLowerCase();

  // 1. Exact ID match
  const byId = articles.find((a) => a.id.toLowerCase() === lower);
  if (byId) return byId;

  // 2. Slugified title or ID match
  const paramSlug = slugifyArticleTitle(decoded);
  if (!paramSlug) return null;

  const bySlug = articles.find(
    (a) => slugifyArticleTitle(a.title) === paramSlug || slugifyArticleTitle(a.id) === paramSlug
  );
  if (bySlug) return bySlug;

  // 3. Partial slug prefix/inclusion match if unambiguous
  const partialMatches = articles.filter(
    (a) =>
      slugifyArticleTitle(a.title).includes(paramSlug) ||
      a.title.toLowerCase().includes(lower)
  );
  if (partialMatches.length === 1) {
    return partialMatches[0];
  }

  return null;
}

/**
 * Resolves an article from browser location (query string ?article=, hash #article=, or path /article/)
 */
export function resolveArticleFromLocation<T extends { id: string; title: string }>(
  articles: T[],
  location: { search?: string; pathname?: string; hash?: string }
): T | null {
  // 1. Check query parameters (?article=... or ?id=...)
  if (location.search) {
    const params = new URLSearchParams(location.search);
    const articleParam = params.get('article') || params.get('id') || params.get('read');
    const found = findArticleByParam(articles, articleParam);
    if (found) return found;
  }

  // 2. Check hash (#article=..., #/article/..., or #<id>)
  if (location.hash) {
    const cleanHash = location.hash.replace(/^#\/?/, '');
    if (cleanHash.startsWith('article=')) {
      const found = findArticleByParam(articles, cleanHash.slice('article='.length));
      if (found) return found;
    } else if (cleanHash.startsWith('article/')) {
      const found = findArticleByParam(articles, cleanHash.slice('article/'.length));
      if (found) return found;
    } else if (cleanHash.includes('=')) {
      const hashParams = new URLSearchParams(cleanHash);
      const found = findArticleByParam(articles, hashParams.get('article'));
      if (found) return found;
    } else {
      const found = findArticleByParam(articles, cleanHash);
      if (found) return found;
    }
  }

  // 3. Check pathname (/article/<id> or /articles/<id>)
  if (location.pathname) {
    const match = location.pathname.match(/\/articles?\/([^/?#]+)/i);
    if (match && match[1]) {
      const found = findArticleByParam(articles, match[1]);
      if (found) return found;
    }
  }

  return null;
}

/**
 * Builds a clean, shareable deep link URL that opens a specific article directly
 */
export function buildArticleShareUrl(
  baseHref: string,
  article: { id: string; title?: string }
): string {
  try {
    const url = new URL(baseHref);
    // Normalize /article/<id> pathname back to root path so static servers always serve index.html
    url.pathname = url.pathname.replace(/\/articles?\/[^/?#]+\/?$/i, '/') || '/';
    url.search = '';
    url.hash = '';
    url.searchParams.set('article', article.id);
    return url.toString();
  } catch {
    const cleanBase = baseHref.split('?')[0].split('#')[0];
    return `${cleanBase}?article=${encodeURIComponent(article.id)}`;
  }
}

export interface LearnedVocabWithMeta {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  cefrLevel: CEFRLevel;
  exampleSentence: string;
  collocations: string[];
  synonyms?: string[];
  antonyms?: string[];
  articleId: string;
  articleTitle: string;
}

export interface GymExerciseQuestion {
  id: string;
  wordId: string;
  targetWord: string;
  level: CEFRLevel;
  articleId: string;
  articleTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Extracts only the target vocabulary items that the user has learned,
 * optionally filtered by CEFR level.
 */
export function getLearnedVocabularyItems<
  TArticle extends {
    id: string;
    title: string;
    level: CEFRLevel;
    targetVocabulary: {
      id: string;
      word: string;
      phonetic: string;
      partOfSpeech: string;
      definition: string;
      cefrLevel: CEFRLevel;
      exampleSentence: string;
      collocations: string[];
      synonyms?: string[];
      antonyms?: string[];
    }[];
  }
>(
  articles: TArticle[],
  learnedWordIds: Set<string> | string[],
  levelFilter: CEFRLevel | 'ALL' = 'ALL'
): LearnedVocabWithMeta[] {
  const learnedSet =
    learnedWordIds instanceof Set ? learnedWordIds : new Set(learnedWordIds);

  const result: LearnedVocabWithMeta[] = [];

  for (const article of articles) {
    if (levelFilter !== 'ALL' && article.level !== levelFilter) {
      continue;
    }
    for (const vocab of article.targetVocabulary) {
      if (learnedSet.has(vocab.id)) {
        result.push({
          ...vocab,
          articleId: article.id,
          articleTitle: article.title,
        });
      }
    }
  }

  return result;
}

/**
 * Builds Vocabulary Gym exercise questions exclusively for words the user has learned.
 * Uses any curated multiple-choice questions for those learned words and generates
 * definition/context multiple-choice questions for learned words without a static MC item,
 * guaranteeing that 100% of exercises test only learned words and every learned word is practiced.
 */
export function buildGymExercisesForLearnedWords<
  TArticle extends {
    id: string;
    title: string;
    level: CEFRLevel;
    targetVocabulary: {
      id: string;
      word: string;
      phonetic: string;
      partOfSpeech: string;
      definition: string;
      cefrLevel: CEFRLevel;
      exampleSentence: string;
      collocations: string[];
    }[];
    exercises: {
      multipleChoice: {
        id: string;
        targetWord: string;
        question: string;
        options: string[];
        correctIndex: number;
        explanation: string;
      }[];
    };
  }
>(
  articles: TArticle[],
  learnedWordIds: Set<string> | string[],
  levelFilter: CEFRLevel | 'ALL' = 'ALL'
): GymExerciseQuestion[] {
  const learnedVocab = getLearnedVocabularyItems(articles, learnedWordIds, levelFilter);
  if (learnedVocab.length === 0) {
    return [];
  }

  // Pool of all vocabulary definitions per level for generating distractors
  const allVocabByLevel: Record<CEFRLevel, { id: string; word: string; definition: string }[]> = {
    B1: [],
    B2: [],
    C1: [],
  };
  for (const article of articles) {
    for (const v of article.targetVocabulary) {
      allVocabByLevel[v.cefrLevel].push({
        id: v.id,
        word: v.word,
        definition: v.definition,
      });
    }
  }

  const questions: GymExerciseQuestion[] = [];

  for (let i = 0; i < learnedVocab.length; i++) {
    const item = learnedVocab[i];
    const sourceArticle = articles.find((a) => a.id === item.articleId);

    // Check if the source article has a curated multiple-choice question for this exact learned word
    const matchingMC = sourceArticle?.exercises.multipleChoice.find(
      (mc) => mc.targetWord.trim().toLowerCase() === item.word.trim().toLowerCase()
    );

    if (matchingMC) {
      questions.push({
        id: `${matchingMC.id}-${item.id}`,
        wordId: item.id,
        targetWord: item.word,
        level: item.cefrLevel,
        articleId: item.articleId,
        articleTitle: item.articleTitle,
        question: matchingMC.question,
        options: matchingMC.options,
        correctIndex: matchingMC.correctIndex,
        explanation:
          item.cefrLevel === 'B1'
            ? `Ma’nosi: ${item.definition}`
            : matchingMC.explanation,
      });
    } else {
      // Generate a deterministic definition-matching question for this learned word
      const levelPool = allVocabByLevel[item.cefrLevel].filter((v) => v.id !== item.id);
      const distractors: string[] = [];
      const step = Math.max(1, Math.floor(levelPool.length / 5));
      for (let d = 0; d < levelPool.length && distractors.length < 3; d++) {
        const candidate = levelPool[(i * 7 + d * step) % levelPool.length];
        if (
          candidate &&
          candidate.definition !== item.definition &&
          !distractors.includes(candidate.definition)
        ) {
          distractors.push(candidate.definition);
        }
      }

      const correctIndex = i % 4;
      const options = [...distractors];
      options.splice(correctIndex, 0, item.definition);

      const promptText =
        item.cefrLevel === 'B1'
          ? `What is the correct Uzbek meaning of "${item.word}" (${item.partOfSpeech})?`
          : `Which definition best matches the ${item.cefrLevel} word "${item.word}" (${item.partOfSpeech})?`;

      questions.push({
        id: `gym-gen-${item.id}`,
        wordId: item.id,
        targetWord: item.word,
        level: item.cefrLevel,
        articleId: item.articleId,
        articleTitle: item.articleTitle,
        question: promptText,
        options,
        correctIndex,
        explanation:
          item.cefrLevel === 'B1'
            ? `"${item.word}" — ${item.definition} Example: "${item.exampleSentence}"`
            : `"${item.word}" means: ${item.definition}`,
      });
    }
  }

  return questions;
}


