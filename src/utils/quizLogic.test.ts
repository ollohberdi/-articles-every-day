/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateQuizScore,
  calculateNextSRSInterval,
  verifyClozeAnswer,
  verifyMatchingPairs,
  filterArticles,
  slugifyArticleTitle,
  findArticleByParam,
  resolveArticleFromLocation,
  buildArticleShareUrl,
  CEFRLevel,
} from './quizLogic';

test('calculateQuizScore computes accurate percentage and bands', () => {
  const result1 = calculateQuizScore(5, 5);
  assert.equal(result1.percentage, 100);
  assert.equal(result1.passed, true);
  assert.equal(result1.performanceBand, 'Mastery');

  const result2 = calculateQuizScore(3, 4);
  assert.equal(result2.percentage, 75);
  assert.equal(result2.passed, true);
  assert.equal(result2.performanceBand, 'Proficient');

  const result3 = calculateQuizScore(3, 5);
  assert.equal(result3.percentage, 60);
  assert.equal(result3.passed, false);
  assert.equal(result3.performanceBand, 'Developing');

  const result4 = calculateQuizScore(1, 5);
  assert.equal(result4.percentage, 20);
  assert.equal(result4.passed, false);
  assert.equal(result4.performanceBand, 'Needs Review');

  const resultEmpty = calculateQuizScore(0, 0);
  assert.equal(resultEmpty.percentage, 0);
  assert.equal(resultEmpty.passed, false);
});

test('calculateNextSRSInterval behaves according to SM-2 memory curves', () => {
  // Again (grade 0) resets interval
  const again = calculateNextSRSInterval(10, 4, 0);
  assert.equal(again.intervalDays, 1);
  assert.equal(again.newRepetitions, 0);

  // First review
  const first = calculateNextSRSInterval(0, 0, 2);
  assert.equal(first.intervalDays, 1);
  assert.equal(first.newRepetitions, 1);

  // Second review with Good
  const second = calculateNextSRSInterval(1, 1, 2);
  assert.equal(second.intervalDays, 3);
  assert.equal(second.newRepetitions, 2);

  // Later review with Easy
  const later = calculateNextSRSInterval(4, 2, 3);
  assert.equal(later.intervalDays, 10);
  assert.equal(later.newRepetitions, 3);
});

test('verifyClozeAnswer handles case insensitivity and whitespace', () => {
  assert.equal(verifyClozeAnswer(' Sustainability ', 'sustainability'), true);
  assert.equal(verifyClozeAnswer('PERCEIVE', 'perceive'), true);
  assert.equal(verifyClozeAnswer('perceiving', 'perceive'), false);
});

test('verifyMatchingPairs correctly scores matched definitions', () => {
  const solution = {
    ubiquitous: 'present everywhere',
    lucid: 'clear and easy to understand',
    pragmatic: 'practical rather than idealistic',
  };

  const userAttempt = {
    ubiquitous: 'present everywhere',
    lucid: 'wrong meaning',
    pragmatic: 'practical rather than idealistic',
  };

  const evalResult = verifyMatchingPairs(userAttempt, solution);
  assert.equal(evalResult.correctCount, 2);
  assert.equal(evalResult.totalPairs, 3);
  assert.equal(evalResult.matches['ubiquitous'], true);
  assert.equal(evalResult.matches['lucid'], false);
  assert.equal(evalResult.matches['pragmatic'], true);
});

test('filterArticles filters properly by CEFR level and category', () => {
  const mockArticles = [
    { id: '1', level: 'B1' as CEFRLevel, category: 'Environment', title: 'Urban Gardens', subtitle: 'Growing vegetables in cities' },
    { id: '2', level: 'B2' as CEFRLevel, category: 'Technology', title: 'Renewable Power Grids', subtitle: 'Smart electricity distribution' },
    { id: '3', level: 'C1' as CEFRLevel, category: 'Environment', title: 'Ecological Restoration', subtitle: 'Biodiversity remediation' },
  ];

  const b1Only = filterArticles(mockArticles, { level: 'B1' });
  assert.equal(b1Only.length, 1);
  assert.equal(b1Only[0].id, '1');

  const envOnly = filterArticles(mockArticles, { category: 'Environment' });
  assert.equal(envOnly.length, 2);

  const searchGrids = filterArticles(mockArticles, { searchQuery: 'grids' });
  assert.equal(searchGrids.length, 1);
  assert.equal(searchGrids[0].id, '2');
});

test('ARTICLES_DATA contains 48 graded articles across B1 (20), B2 (20), and C1 (8) with target vocabulary', async () => {
  const { ARTICLES_DATA } = await import('../data/articlesData');
  assert.equal(ARTICLES_DATA.length, 48);

  const b1 = ARTICLES_DATA.filter((a) => a.level === 'B1');
  const b2 = ARTICLES_DATA.filter((a) => a.level === 'B2');
  const c1 = ARTICLES_DATA.filter((a) => a.level === 'C1');

  assert.equal(b1.length, 20);
  assert.equal(b2.length, 20);
  assert.equal(c1.length, 8);

  for (const article of ARTICLES_DATA) {
    assert.ok(article.paragraphs.length >= 4, `Article ${article.id} should have at least 4 paragraphs`);
    assert.ok(article.targetVocabulary.length >= 5, `Article ${article.id} should have at least 5 target words`);
  }

  const coreCategories = new Set([
    'History & Civilizations',
    'Science & Nature',
    'Psychology & Mind',
    'Technology & Innovation',
    'Environment',
  ]);
  const coreArticles = ARTICLES_DATA.filter((a) => coreCategories.has(a.category));
  const complexArticles = ARTICLES_DATA.filter((a) => !coreCategories.has(a.category));

  assert.equal(coreArticles.length, 36); // 75% (~70%)
  assert.equal(complexArticles.length, 12); // 25% (~30%)
});

test('resolveArticleFromLocation and buildArticleShareUrl resolve exact articles by ID, slug, or title', async () => {
  const { ARTICLES_DATA } = await import('../data/articlesData');

  // 1. Direct query string by ID
  const byQueryId = resolveArticleFromLocation(ARTICLES_DATA, {
    search: '?article=b1-sleep-habits',
  });
  assert.ok(byQueryId);
  assert.equal(byQueryId.id, 'b1-sleep-habits');
  assert.equal(byQueryId.title, 'The Science of Rest: Why Consistent Sleep Routines Matter');

  // 2. Direct query string by title slug
  const byTitleSlug = resolveArticleFromLocation(ARTICLES_DATA, {
    search: '?article=the-science-of-rest-why-consistent-sleep-routines-matter',
  });
  assert.ok(byTitleSlug);
  assert.equal(byTitleSlug.id, 'b1-sleep-habits');

  // 3. Direct query string by encoded full title
  const byFullTitle = resolveArticleFromLocation(ARTICLES_DATA, {
    search: `?article=${encodeURIComponent('The Science of Rest: Why Consistent Sleep Routines Matter')}`,
  });
  assert.ok(byFullTitle);
  assert.equal(byFullTitle.id, 'b1-sleep-habits');

  // 4. Hash and pathname formats
  const byHash = resolveArticleFromLocation(ARTICLES_DATA, {
    hash: '#article=b1-sleep-habits',
  });
  assert.ok(byHash);
  assert.equal(byHash.id, 'b1-sleep-habits');

  const byPathname = resolveArticleFromLocation(ARTICLES_DATA, {
    pathname: '/article/b1-sleep-habits',
  });
  assert.ok(byPathname);
  assert.equal(byPathname.id, 'b1-sleep-habits');

  // 5. Share URL construction and round-trip resolution
  const shareUrl = buildArticleShareUrl('https://example.com/?view=library', byQueryId);
  assert.equal(shareUrl, 'https://example.com/?article=b1-sleep-habits');

  const parsedShareUrl = new URL(shareUrl);
  const roundTrip = resolveArticleFromLocation(ARTICLES_DATA, {
    search: parsedShareUrl.search,
    pathname: parsedShareUrl.pathname,
    hash: parsedShareUrl.hash,
  });
  assert.ok(roundTrip);
  assert.equal(roundTrip.id, 'b1-sleep-habits');
});

