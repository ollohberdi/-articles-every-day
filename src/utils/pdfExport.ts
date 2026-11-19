/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';
import { Article, CEFRLevel } from '../types';

/**
 * Normalizes curly quotes, Uzbek o‘/g‘ apostrophes, and long dashes into
 * standard Latin-1 characters supported cleanly by jsPDF built-in fonts.
 */
export function sanitizePdfText(input: string): string {
  if (!input) return '';
  return input
    .replace(/[\u2018\u2019\u201B\u02BB\u02BC`]/g, "'")
    .replace(/[\u201C\u201D\u201F]/g, '"')
    .replace(/[\u2013\u2014]/g, ' - ')
    .replace(/\u2026/g, '...')
    .replace(/\u00A0/g, ' ');
}

/**
 * Renders a single article (header, title, subtitle, paragraphs, target vocabulary,
 * and optional speaking questions) onto the current page of a jsPDF document.
 */
function renderArticleContentIntoDoc(
  doc: jsPDF,
  article: Article,
  articleIndexLabel?: string
): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  // --- Header Band ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(120, 113, 108); // stone-500
  const prefix = articleIndexLabel ? `${articleIndexLabel.toUpperCase()}  ·  ` : '';
  doc.text(
    sanitizePdfText(
      `${prefix}ARTICLES ED (EVERY DAY)  ·  ${article.level}  ·  ${article.category.toUpperCase()}  ·  ${article.readTime.toUpperCase()}`
    ),
    margin,
    y
  );
  y += 6;

  // --- Title ---
  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(28, 25, 23); // stone-900
  const titleLines = doc.splitTextToSize(sanitizePdfText(article.title), contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 7.8 + 2;

  // --- Subtitle ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(87, 83, 78); // stone-600
  const subtitleLines = doc.splitTextToSize(sanitizePdfText(article.subtitle), contentWidth);
  doc.text(subtitleLines, margin, y);
  y += subtitleLines.length * 5.2 + 4;

  // --- Divider ---
  doc.setDrawColor(214, 211, 209); // stone-300
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  // --- Article Body Paragraphs ---
  doc.setFont('times', 'normal');
  doc.setFontSize(11.5);
  doc.setTextColor(41, 37, 36); // stone-800

  article.paragraphs.forEach((paragraph) => {
    const lines = doc.splitTextToSize(sanitizePdfText(paragraph), contentWidth);
    const blockHeight = lines.length * 5.6 + 4;
    checkPageBreak(blockHeight);
    doc.text(lines, margin, y);
    y += blockHeight;
  });

  y += 5;
  checkPageBreak(25);

  // --- Target Vocabulary Section Header ---
  doc.setDrawColor(214, 211, 209);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(28, 25, 23);
  doc.text(
    sanitizePdfText(
      `Target Vocabulary (${article.targetVocabulary.length} Core Words - ${article.level})`
    ),
    margin,
    y
  );
  y += 7.5;

  // --- Vocabulary Items ---
  article.targetVocabulary.forEach((item, index) => {
    const defLines = doc.splitTextToSize(
      sanitizePdfText(`Definition: ${item.definition}`),
      contentWidth - 6
    );
    const exLines = doc.splitTextToSize(
      sanitizePdfText(`Example: "${item.exampleSentence}"`),
      contentWidth - 6
    );
    const collocText =
      item.collocations && item.collocations.length > 0
        ? sanitizePdfText(`Collocations: ${item.collocations.join('  ·  ')}`)
        : '';
    const collocLines = collocText ? doc.splitTextToSize(collocText, contentWidth - 6) : [];

    const itemHeight =
      7 +
      defLines.length * 4.7 +
      exLines.length * 4.7 +
      (collocLines.length > 0 ? collocLines.length * 4.7 + 2 : 0) +
      5;

    checkPageBreak(itemHeight);

    // Word + POS
    doc.setFont('times', 'bold');
    doc.setFontSize(11.5);
    doc.setTextColor(28, 25, 23);
    const wordHeader = sanitizePdfText(`${index + 1}. ${item.word}`);
    doc.text(wordHeader, margin, y);

    const wordHeaderWidth = doc.getTextWidth(wordHeader);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(120, 113, 108);
    doc.text(
      sanitizePdfText(`  (${item.partOfSpeech})`),
      margin + wordHeaderWidth + 2,
      y
    );
    y += 5.2;

    // Definition
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(41, 37, 36);
    doc.text(defLines, margin + 4, y);
    y += defLines.length * 4.7 + 1;

    // Example
    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(87, 83, 78);
    doc.text(exLines, margin + 4, y);
    y += exLines.length * 4.7 + 1;

    // Collocations
    if (collocLines.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(180, 83, 9); // amber-700
      doc.text(collocLines, margin + 4, y);
      y += collocLines.length * 4.7 + 1;
    }

    y += 3.5;
  });

  // --- Speaking & Discussion Questions Section (when available) ---
  if (article.speakingQuestions && article.speakingQuestions.length > 0) {
    y += 4;
    checkPageBreak(30);

    doc.setDrawColor(214, 211, 209);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12.5);
    doc.setTextColor(28, 25, 23);
    doc.text(
      sanitizePdfText(
        `Speaking & Discussion (${article.speakingQuestions.length} Questions - ${article.level})`
      ),
      margin,
      y
    );
    y += 7;

    article.speakingQuestions.forEach((sq, index) => {
      const qLines = doc.splitTextToSize(
        sanitizePdfText(`${index + 1}. ${sq.question}`),
        contentWidth - 4
      );
      const targetLine = sanitizePdfText(`Try to use: ${sq.targetWords.join(', ')}`);
      const blockHeight = qLines.length * 5 + 10;

      checkPageBreak(blockHeight);

      doc.setFont('times', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(28, 25, 23);
      doc.text(qLines, margin, y);
      y += qLines.length * 5 + 1;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(180, 83, 9);
      doc.text(targetLine, margin + 4, y);
      y += 7;
    });
  }
}

/**
 * Generates and downloads a formatted study-sheet PDF containing a single article,
 * metadata, full text, and the complete target vocabulary table.
 */
export function downloadArticleAsPDF(article: Article): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;

  renderArticleContentIntoDoc(doc, article);

  // --- Footer on each page ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(168, 162, 158);
    doc.text(
      sanitizePdfText(`Articles ED (Every day) · ${article.level} · Page ${i} of ${totalPages}`),
      margin,
      pageHeight - 10
    );
  }

  // Safe filename
  const slug = article.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  doc.save(`articles-ed-${article.level.toLowerCase()}-${slug}.pdf`);
}

/**
 * Admin-only bulk exporter: Compiles all articles of a selected level (B1, B2, C1, or ALL)
 * into a single structured PDF book with a cover page, table of contents, every full article,
 * and every target vocabulary list.
 */
export function downloadLevelArticlesAsPDF(
  allArticles: Article[],
  level: CEFRLevel | 'ALL',
  tierFilter: 'ALL' | 'FREE' | 'PRO' = 'ALL'
): void {
  const levelArticles =
    level === 'ALL' ? allArticles : allArticles.filter((a) => a.level === level);

  // If filtering by FREE (first 10 per level) or PRO (remaining per level)
  let targetList: Article[] = levelArticles;
  if (tierFilter !== 'ALL') {
    const byLevelCounters: Record<CEFRLevel, number> = { B1: 0, B2: 0, C1: 0 };
    targetList = levelArticles.filter((art) => {
      byLevelCounters[art.level] += 1;
      const isFree = byLevelCounters[art.level] <= 10;
      return tierFilter === 'FREE' ? isFree : !isFree;
    });
  }

  if (targetList.length === 0) return;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 24;

  const totalWordsCount = targetList.reduce((acc, a) => acc + a.targetVocabulary.length, 0);
  const levelTitle =
    level === 'ALL'
      ? 'Complete B1, B2 & C1 Curriculum Anthology'
      : `Level ${level} Complete Graded Reader Anthology`;
  const tierLabel =
    tierFilter === 'ALL'
      ? 'All Free & Pro Articles'
      : tierFilter === 'FREE'
      ? 'Free Tier Collection (First 10 Articles)'
      : 'Pro Subscription Collection';

  // --- Cover & Table of Contents Header ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(180, 83, 9); // amber-700
  doc.text(
    sanitizePdfText(`ARTICLES ED (EVERY DAY)  ·  ADMIN MASTER EDITION  ·  ${tierLabel.toUpperCase()}`),
    margin,
    y
  );
  y += 8;

  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(28, 25, 23);
  const mainTitleLines = doc.splitTextToSize(sanitizePdfText(levelTitle), contentWidth);
  doc.text(mainTitleLines, margin, y);
  y += mainTitleLines.length * 8.5 + 2;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(87, 83, 78);
  doc.text(
    sanitizePdfText(
      `${targetList.length} Graded Articles  ·  ${totalWordsCount} Target Vocabulary Items with Context & Examples`
    ),
    margin,
    y
  );
  y += 7;

  doc.setDrawColor(214, 211, 209);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Table of Contents ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(28, 25, 23);
  doc.text('Table of Contents', margin, y);
  y += 7;

  targetList.forEach((art, idx) => {
    if (y > pageHeight - 22) {
      doc.addPage();
      y = 20;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(28, 25, 23);
    const entryTitle = sanitizePdfText(`${idx + 1}. [${art.level}] ${art.title}`);
    const lines = doc.splitTextToSize(entryTitle, contentWidth - 28);
    doc.text(lines, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(120, 113, 108);
    doc.text(
      sanitizePdfText(`${art.category}`),
      pageWidth - margin,
      y,
      { align: 'right' }
    );
    y += lines.length * 4.6 + 1.8;
  });

  // --- Render Every Article Starting on Its Own Page ---
  targetList.forEach((article, idx) => {
    doc.addPage();
    renderArticleContentIntoDoc(
      doc,
      article,
      `Article ${idx + 1} of ${targetList.length}`
    );
  });

  // --- Number All Pages ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(168, 162, 158);
    doc.text(
      sanitizePdfText(
        `Articles ED (Every day) · ${level === 'ALL' ? 'All Levels' : `Level ${level}`} (${targetList.length} Articles) · Page ${i} of ${totalPages}`
      ),
      margin,
      pageHeight - 10
    );
  }

  const tierSlug = tierFilter === 'ALL' ? 'complete' : tierFilter.toLowerCase();
  const levelSlug = level === 'ALL' ? 'all-levels' : level.toLowerCase();
  doc.save(`articles-ed-${levelSlug}-${tierSlug}-${targetList.length}-articles.pdf`);
}
