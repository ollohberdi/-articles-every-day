/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';
import { Article } from '../types';

/**
 * Generates and downloads a formatted study-sheet PDF containing the article,
 * metadata, full text, and the complete target vocabulary table.
 */
export function downloadArticleAsPDF(article: Article): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

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
  doc.text(
    `ARTICLES ED (EVERY DAY)  ·  ${article.level}  ·  ${article.category.toUpperCase()}  ·  ${article.readTime.toUpperCase()}`,
    margin,
    y
  );
  y += 6;

  // --- Title ---
  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(28, 25, 23); // stone-900
  const titleLines = doc.splitTextToSize(article.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 8 + 2;

  // --- Subtitle ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(87, 83, 78); // stone-600
  const subtitleLines = doc.splitTextToSize(article.subtitle, contentWidth);
  doc.text(subtitleLines, margin, y);
  y += subtitleLines.length * 5.5 + 4;

  // --- Divider ---
  doc.setDrawColor(214, 211, 209); // stone-300
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Article Body Paragraphs ---
  doc.setFont('times', 'normal');
  doc.setFontSize(11.5);
  doc.setTextColor(41, 37, 36); // stone-800

  article.paragraphs.forEach((paragraph) => {
    const lines = doc.splitTextToSize(paragraph, contentWidth);
    const blockHeight = lines.length * 5.8 + 4;
    checkPageBreak(blockHeight);
    doc.text(lines, margin, y);
    y += blockHeight;
  });

  y += 6;
  checkPageBreak(25);

  // --- Target Vocabulary Section Header ---
  doc.setDrawColor(214, 211, 209);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(28, 25, 23);
  doc.text(`Target Vocabulary (${article.targetVocabulary.length} Core Words - ${article.level})`, margin, y);
  y += 8;

  // --- Vocabulary Items ---
  article.targetVocabulary.forEach((item, index) => {
    const defLines = doc.splitTextToSize(`Definition: ${item.definition}`, contentWidth - 6);
    const exLines = doc.splitTextToSize(`Example: "${item.exampleSentence}"`, contentWidth - 6);
    const collocText =
      item.collocations && item.collocations.length > 0
        ? `Collocations: ${item.collocations.join('  ·  ')}`
        : '';
    const collocLines = collocText ? doc.splitTextToSize(collocText, contentWidth - 6) : [];

    const itemHeight =
      7 + defLines.length * 4.8 + exLines.length * 4.8 + (collocLines.length > 0 ? collocLines.length * 4.8 + 2 : 0) + 6;

    checkPageBreak(itemHeight);

    // Word + Phonetic + POS
    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(28, 25, 23);
    const wordHeader = `${index + 1}. ${item.word}`;
    doc.text(wordHeader, margin, y);

    const wordHeaderWidth = doc.getTextWidth(wordHeader);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(120, 113, 108);
    doc.text(`  ${item.phonetic}   (${item.partOfSpeech})`, margin + wordHeaderWidth + 2, y);
    y += 5.5;

    // Definition
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(41, 37, 36);
    doc.text(defLines, margin + 4, y);
    y += defLines.length * 4.8 + 1;

    // Example
    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(87, 83, 78);
    doc.text(exLines, margin + 4, y);
    y += exLines.length * 4.8 + 1;

    // Collocations
    if (collocLines.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(180, 83, 9); // amber-700
      doc.text(collocLines, margin + 4, y);
      y += collocLines.length * 4.8 + 1;
    }

    y += 4;
  });

  // --- Footer on each page ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(168, 162, 158);
    doc.text(
      `Articles ED (Every day) · ${article.level} · Page ${i} of ${totalPages}`,
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
