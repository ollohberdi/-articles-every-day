/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Volume2,
  Pause,
  Play,
  CheckCircle,
  Bookmark,
  BookmarkCheck,
  Award,
  Download,
  Share2,
} from 'lucide-react';
import { Article, VocabularyItem } from '../types';
import { WordPopup } from './WordPopup';
import { speakWord, stopSpeech } from '../utils/speech';
import { downloadArticleAsPDF } from '../utils/pdfExport';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  onStartExercises: (article: Article) => void;
  onShareArticle: (article: Article) => void;
  savedWordIds: Set<string>;
  onToggleSaveWord: (word: VocabularyItem) => void;
  learnedWordIds: Set<string>;
  onMarkWordLearned: (wordId: string) => void;
  onToggleLearnedWord: (wordId: string) => void;
  onMarkArticleWordsLearned: (article: Article) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  onStartExercises,
  onShareArticle,
  savedWordIds,
  onToggleSaveWord,
  learnedWordIds,
  onMarkWordLearned,
  onToggleLearnedWord,
  onMarkArticleWordsLearned,
}) => {
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [readProgress, setReadProgress] = useState(0);

  const handleInspectWord = (vocabItem: VocabularyItem) => {
    setSelectedWord(vocabItem);
    onMarkWordLearned(vocabItem.id);
  };

  // Scroll to top when article opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      stopSpeech();
    };
  }, [article.id]);

  // Track reading progress on scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const fullText = `${article.title}. ${article.subtitle}. ${article.paragraphs.join(' ')}`;
      await speakWord(fullText, speechRate);
      setIsPlayingAudio(false);
    }
  };

  const levelColorMap = {
    B1: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    B2: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    C1: 'bg-purple-50 text-purple-800 border-purple-200',
  };

  // Helper to highlight target vocabulary words inside a paragraph
  const renderParagraphWithVocabulary = (text: string, pIdx: number) => {
    const vocabMap = new Map<string, VocabularyItem>();
    article.targetVocabulary.forEach((v) => {
      vocabMap.set(v.word.toLowerCase(), v);
    });

    const wordsPattern = article.targetVocabulary
      .map((v) => v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');

    if (!wordsPattern) return <p key={pIdx}>{text}</p>;

    const regex = new RegExp(`\\b(${wordsPattern})\\b`, 'gi');
    const parts = text.split(regex);

    return (
      <p key={pIdx} className="mb-6 leading-relaxed text-stone-800 tracking-normal">
        {parts.map((part, i) => {
          const lower = part.toLowerCase();
          const vocabItem = vocabMap.get(lower);

          if (vocabItem) {
            const isSaved = savedWordIds.has(vocabItem.id);
            const isLearned = learnedWordIds.has(vocabItem.id);
            return (
              <span
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => handleInspectWord(vocabItem)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleInspectWord(vocabItem);
                  }
                }}
                className={`cursor-pointer inline font-semibold px-0.5 py-0.2 rounded transition-all duration-150 decoration-amber-500 underline underline-offset-4 decoration-2 hover:bg-amber-100 ${
                  isSaved
                    ? 'bg-amber-50 text-amber-950 font-bold'
                    : isLearned
                      ? 'bg-emerald-50/70 text-stone-900'
                      : 'text-stone-900'
                }`}
                title={`Click for ${vocabItem.cefrLevel === 'B1' ? 'Uzbek meaning' : 'definition'} of "${vocabItem.word}" (${vocabItem.cefrLevel})`}
              >
                {part}
              </span>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    );
  };

  const fontSizeClasses = {
    normal: 'text-base sm:text-lg leading-relaxed',
    large: 'text-lg sm:text-xl leading-relaxed',
    xlarge: 'text-xl sm:text-2xl leading-loose',
  };

  const totalExercises =
    (article.exercises.multipleChoice?.length || 0) +
    (article.exercises.cloze?.length || 0) +
    (article.exercises.matching?.pairs ? 1 : 0) +
    (article.exercises.wordFormation?.length || 0);

  const learnedInArticleCount = article.targetVocabulary.filter((v) =>
    learnedWordIds.has(v.id)
  ).length;
  const allArticleWordsLearned =
    learnedInArticleCount === article.targetVocabulary.length;

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 z-40">
        <div
          className="h-full bg-amber-600 transition-all duration-100 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Reader Sub-Header Toolbar */}
      <div className="sticky top-16 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Library</span>
          </button>

          {/* Reading & PDF Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Share Article Link Button */}
            <button
              onClick={() => onShareArticle(article)}
              className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors whitespace-nowrap"
              title="Share direct link to this article"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Share Article</span>
            </button>

            {/* Download PDF Button */}
            <button
              onClick={() => downloadArticleAsPDF(article)}
              className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors whitespace-nowrap"
              title="Download printable PDF with article and target vocabulary"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            {/* Audio Reader Control */}
            <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-1">
              <button
                onClick={handleToggleAudio}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded text-stone-700 hover:bg-stone-100 transition-colors"
                aria-label={isPlayingAudio ? 'Pause reading audio' : 'Listen to article'}
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-600" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-stone-600" />
                    <span className="hidden sm:inline">Listen</span>
                  </>
                )}
              </button>
              <select
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                aria-label="Audio playback speed"
                className="text-xs bg-transparent border-0 text-stone-600 font-medium py-1 pr-1 focus:ring-0 cursor-pointer"
              >
                <option value="0.8">0.8x</option>
                <option value="1.0">1.0x</option>
                <option value="1.2">1.2x</option>
              </select>
            </div>

            {/* Typography adjustments */}
            <div className="hidden sm:flex items-center gap-1 bg-white border border-stone-200 rounded-lg p-1 text-xs text-stone-600">
              <button
                onClick={() => setFontFamily((f) => (f === 'serif' ? 'sans' : 'serif'))}
                className={`px-2 py-1 rounded transition-colors ${fontFamily === 'serif' ? 'bg-stone-100 font-bold text-stone-900' : 'hover:bg-stone-50'}`}
                title="Toggle Serif/Sans font"
              >
                {fontFamily === 'serif' ? 'Serif' : 'Sans'}
              </button>
              <div className="w-px h-3.5 bg-stone-200" />
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-1 rounded ${fontSize === 'normal' ? 'bg-stone-100 font-bold text-stone-900' : 'hover:bg-stone-50'}`}
                title="Default font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-1 rounded text-sm ${fontSize === 'large' ? 'bg-stone-100 font-bold text-stone-900' : 'hover:bg-stone-50'}`}
                title="Large font size"
              >
                A+
              </button>
            </div>

            {/* Exercises Button */}
            <button
              onClick={() => onStartExercises(article)}
              className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Exercises ({totalExercises})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        {/* Article Metadata Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-4">
          <span className={`font-semibold px-2 py-0.5 rounded border ${levelColorMap[article.level]}`}>
            {article.level}
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>{article.wordCount} words</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-800 font-medium">
            {article.targetVocabulary.length} Target Words ({learnedInArticleCount} learned)
          </span>
        </div>

        {/* Article Title & Subtitle */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4 leading-tight">
          {article.title}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 font-normal mb-8 leading-relaxed max-w-3xl">
          {article.subtitle}
        </p>

        {/* Pedagogical CEFR Summary Box */}
        <div className="p-4 mb-10 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900">
              <span className="font-semibold block mb-0.5">
                {article.level} Lexical Target {article.level === 'B1' ? '(O‘zbekcha ma’nolari bilan)' : '(English Definitions)'}:
              </span>
              <span>
                {article.cefrSummary}{' '}
                {article.level === 'B1'
                  ? 'Click any underlined word to see its Uzbek meaning, pronunciation, and add it to your Learned Words for the Vocabulary Gym.'
                  : 'Click any underlined word to inspect its English definition, phonetics, and add it to your Learned Words for the Vocabulary Gym.'}
              </span>
            </div>
          </div>
          <button
            onClick={() => downloadArticleAsPDF(article)}
            className="px-3.5 py-2 bg-white hover:bg-amber-100/60 text-amber-950 border border-amber-300/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-700" />
            <span>Study Sheet (PDF)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Text Content */}
          <article
            className={`lg:col-span-8 ${fontSizeClasses[fontSize]} ${
              fontFamily === 'serif' ? 'font-serif' : 'font-sans'
            }`}
          >
            {article.paragraphs.map((p, idx) => renderParagraphWithVocabulary(p, idx))}

            {/* Bottom Actions inside Article */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <div className="bg-stone-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Finished reading?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Test your mastery of the {article.targetVocabulary.length} target vocabulary items or mark them as learned for the Vocabulary Gym.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onShareArticle(article)}
                    className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <Share2 className="w-4 h-4 text-amber-700" />
                    <span>Share Article</span>
                  </button>
                  <button
                    onClick={() => downloadArticleAsPDF(article)}
                    className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-amber-700" />
                    <span>Download PDF</span>
                  </button>
                  <button
                    onClick={() => onStartExercises(article)}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>Start Exercises</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar: Target Vocabulary List */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="sticky top-32 bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-stone-600" />
                  <h2 className="text-sm font-bold text-stone-900">
                    Target Words ({learnedInArticleCount}/{article.targetVocabulary.length} Learned)
                  </h2>
                </div>
                <span className="text-xs text-stone-400 font-mono">{article.level}</span>
              </div>

              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-xs text-stone-500">
                  {article.level === 'B1' ? 'O‘zbekcha ma’nolari:' : 'English meanings:'}
                </span>
                {!allArticleWordsLearned && (
                  <button
                    onClick={() => onMarkArticleWordsLearned(article)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
                  >
                    + Mark all {article.targetVocabulary.length} learned
                  </button>
                )}
              </div>

              <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
                {article.targetVocabulary.map((item) => {
                  const isSaved = savedWordIds.has(item.id);
                  const isLearned = learnedWordIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleInspectWord(item)}
                      className={`group p-2.5 rounded-lg border transition-colors cursor-pointer ${
                        isLearned
                          ? 'border-emerald-200/80 bg-emerald-50/25 hover:bg-emerald-50/60'
                          : 'border-stone-100 hover:border-amber-200 hover:bg-amber-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif font-bold text-stone-900 text-sm group-hover:text-amber-900">
                            {item.word}
                          </span>
                          <span className="text-xs text-stone-400 italic">
                            ({item.partOfSpeech})
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleLearnedWord(item.id);
                            }}
                            aria-label={isLearned ? `Unmark ${item.word} as learned` : `Mark ${item.word} as learned`}
                            className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                              isLearned
                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800'
                            }`}
                            title={isLearned ? 'Learned (in Vocabulary Gym)' : 'Mark as learned for Vocabulary Gym'}
                          >
                            {isLearned ? 'Learned ✓' : '+ Learn'}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speakWord(item.word);
                            }}
                            aria-label={`Pronounce ${item.word}`}
                            className="p-1 text-stone-400 hover:text-stone-800 rounded"
                            title="Pronounce"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSaveWord(item);
                            }}
                            aria-label={isSaved ? `Remove ${item.word} from notebook` : `Save ${item.word} to notebook`}
                            className="p-1 text-stone-400 hover:text-amber-600 rounded"
                            title={isSaved ? 'Saved in notebook' : 'Save word'}
                          >
                            {isSaved ? (
                              <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                            ) : (
                              <Bookmark className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {item.definition}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Word Inspector Modal/Popup */}
      {selectedWord && (
        <WordPopup
          word={selectedWord}
          isOpen={!!selectedWord}
          onClose={() => setSelectedWord(null)}
          isSaved={savedWordIds.has(selectedWord.id)}
          onToggleSave={onToggleSaveWord}
          isLearned={learnedWordIds.has(selectedWord.id)}
          onToggleLearned={onToggleLearnedWord}
        />
      )}
    </div>
  );
};

