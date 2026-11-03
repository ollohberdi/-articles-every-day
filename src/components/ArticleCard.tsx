/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Trees, Brain, Cpu, Landmark, Scale, CheckCircle2, Download, FlaskConical, Share2 } from 'lucide-react';
import { Article } from '../types';
import { downloadArticleAsPDF } from '../utils/pdfExport';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  onOpenExercises: (article: Article) => void;
  onShareArticle: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  onOpenExercises,
  onShareArticle,
}) => {
  const getCategoryIcon = () => {
    switch (article.category) {
      case 'Environment':
        return <Trees className="w-4 h-4 text-emerald-300" />;
      case 'Science & Nature':
        return <FlaskConical className="w-4 h-4 text-cyan-300" />;
      case 'Psychology & Mind':
      case 'Neuroscience & Psychology':
      case 'Neuroscience & Politics':
        return <Brain className="w-4 h-4 text-indigo-300" />;
      case 'Technology & Innovation':
      case 'Technology & Society':
        return <Cpu className="w-4 h-4 text-purple-300" />;
      case 'History & Civilizations':
      case 'Culture & Language':
        return <Landmark className="w-4 h-4 text-amber-300" />;
      default:
        return <Scale className="w-4 h-4 text-rose-300" />;
    }
  };

  const totalExercises =
    (article.exercises.multipleChoice?.length || 0) +
    (article.exercises.cloze?.length || 0) +
    (article.exercises.matching?.pairs ? 1 : 0) +
    (article.exercises.wordFormation?.length || 0);

  return (
    <div
      onClick={() => onSelect(article)}
      className="group bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-stone-300 transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Modern Graphic Header Banner */}
        <div
          className={`h-36 bg-gradient-to-br ${article.gradientFrom} ${article.gradientTo} p-5 flex flex-col justify-between relative overflow-hidden`}
        >
          {/* Subtle noise/pattern overlay */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-stone-900 shadow-xs">
              {article.level}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onShareArticle(article);
                }}
                aria-label={`Share link for ${article.title}`}
                title="Share direct link to this article"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadArticleAsPDF(article);
                }}
                aria-label={`Download PDF for ${article.title}`}
                title="Download PDF with article & vocabulary"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-colors"
              >
                <Download className="w-4 h-4" />
              </button>
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                {getCategoryIcon()}
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <span className="text-2xs uppercase tracking-wider text-white/70 font-semibold block">
              {article.category}
            </span>
            <span className="text-xs text-white font-medium flex items-center gap-2 mt-0.5">
              <span>{article.wordCount} words</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 space-y-3">
          {/* Unboxed Metadata Line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="truncate max-w-[140px] font-medium">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="shrink-0">{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800 font-semibold shrink-0">
              {article.targetVocabulary.length} Target Words
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-stone-950 group-hover:text-amber-900 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          {/* Subtitle / Excerpt */}
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Target Vocabulary Preview */}
          <div className="pt-2 border-t border-stone-100">
            <span className="text-2xs font-semibold uppercase tracking-wider text-stone-400 block mb-1.5">
              Target Vocabulary:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {article.targetVocabulary.slice(0, 4).map((vocab) => (
                <span
                  key={vocab.id}
                  className="text-xs text-stone-700 bg-stone-100/80 px-2 py-0.5 rounded-md font-mono"
                >
                  {vocab.word}
                </span>
              ))}
              {article.targetVocabulary.length > 4 && (
                <span className="text-xs text-stone-400 px-1 py-0.5 font-mono">
                  +{article.targetVocabulary.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-stone-100 mt-4">
        <div className="flex items-center gap-2.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenExercises(article);
            }}
            className="text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors py-2 flex items-center gap-1"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Exercises ({totalExercises})</span>
          </button>
          <span className="text-stone-300" aria-hidden="true">·</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              downloadArticleAsPDF(article);
            }}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors py-2 flex items-center gap-1"
            title="Download PDF with article and target vocabulary"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
          <span className="text-stone-300" aria-hidden="true">·</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShareArticle(article);
            }}
            className="text-xs font-semibold text-stone-500 hover:text-amber-700 transition-colors py-2 flex items-center gap-1"
            title="Share direct link to this article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-stone-900 group-hover:text-amber-700 group-hover:translate-x-1 transition-all">
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
