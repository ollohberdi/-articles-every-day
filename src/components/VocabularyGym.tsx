/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Volume2,
  Bookmark,
  BookmarkCheck,
  RotateCw,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  Zap,
  Layers,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { CEFRLevel, VocabularyItem } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { speakWord } from '../utils/speech';
import {
  calculateNextSRSInterval,
  getLearnedVocabularyItems,
  buildGymExercisesForLearnedWords,
} from '../utils/quizLogic';

interface VocabularyGymProps {
  initialLevel?: CEFRLevel | 'ALL';
  initialMode?: 'flashcards' | 'speedQuiz' | 'matrix';
  savedWordIds: Set<string>;
  onToggleSaveWord: (word: VocabularyItem) => void;
  learnedWordIds: Set<string>;
  onToggleLearnedWord: (wordId: string) => void;
  onOpenArticle: (articleId: string) => void;
  onBrowseLibrary: () => void;
}

export const VocabularyGym: React.FC<VocabularyGymProps> = ({
  initialLevel = 'ALL',
  initialMode = 'flashcards',
  savedWordIds,
  onToggleSaveWord,
  learnedWordIds,
  onToggleLearnedWord,
  onOpenArticle,
  onBrowseLibrary,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>(initialLevel);
  const [gymMode, setGymMode] = useState<'flashcards' | 'speedQuiz' | 'matrix'>(initialMode);

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Learned Words Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizAnswerSubmitted, setQuizAnswerSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Search and filter in matrix
  const [matrixSearch, setMatrixSearch] = useState('');
  const [matrixFilter, setMatrixFilter] = useState<'learned' | 'all'>('all');

  // Learned counts per level
  const learnedCountsByLevel = useMemo(() => {
    return {
      ALL: getLearnedVocabularyItems(ARTICLES_DATA, learnedWordIds, 'ALL').length,
      B1: getLearnedVocabularyItems(ARTICLES_DATA, learnedWordIds, 'B1').length,
      B2: getLearnedVocabularyItems(ARTICLES_DATA, learnedWordIds, 'B2').length,
      C1: getLearnedVocabularyItems(ARTICLES_DATA, learnedWordIds, 'C1').length,
    };
  }, [learnedWordIds]);

  // Strictly learned vocabulary words for Flashcards
  const learnedVocabList = useMemo(
    () => getLearnedVocabularyItems(ARTICLES_DATA, learnedWordIds, selectedLevel),
    [learnedWordIds, selectedLevel]
  );

  // Strictly learned vocabulary exercises for Quiz
  const learnedQuestions = useMemo(
    () => buildGymExercisesForLearnedWords(ARTICLES_DATA, learnedWordIds, selectedLevel),
    [learnedWordIds, selectedLevel]
  );

  // All vocabulary for selected level (for Word Matrix browsing / marking learned)
  const allLevelVocabList = useMemo(() => {
    const filteredArticles =
      selectedLevel === 'ALL'
        ? ARTICLES_DATA
        : ARTICLES_DATA.filter((a) => a.level === selectedLevel);

    const list: (VocabularyItem & { articleTitle: string; articleId: string })[] = [];
    filteredArticles.forEach((article) => {
      article.targetVocabulary.forEach((v) => {
        list.push({
          ...v,
          articleTitle: article.title,
          articleId: article.id,
        });
      });
    });
    return list;
  }, [selectedLevel]);

  const safeCardIndex =
    learnedVocabList.length > 0 ? currentCardIndex % learnedVocabList.length : 0;
  const currentVocab = learnedVocabList[safeCardIndex];

  // Next / Previous Flashcard
  const handleNextCard = () => {
    if (learnedVocabList.length === 0) return;
    setIsFlipped(false);
    setCurrentCardIndex((idx) => (idx + 1) % learnedVocabList.length);
  };

  const handlePrevCard = () => {
    if (learnedVocabList.length === 0) return;
    setIsFlipped(false);
    setCurrentCardIndex((idx) => (idx - 1 + learnedVocabList.length) % learnedVocabList.length);
  };

  const handleSRSGrade = (grade: 0 | 1 | 2 | 3) => {
    calculateNextSRSInterval(1, 1, grade);
    handleNextCard();
  };

  const currentQuestion = learnedQuestions[quizIndex];

  const handleSpeedQuizChoice = (optionIdx: number) => {
    if (quizAnswerSubmitted || !currentQuestion) return;
    setQuizSelectedOption(optionIdx);
    setQuizAnswerSubmitted(true);
    if (optionIdx === currentQuestion.correctIndex) {
      setQuizScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (quizIndex + 1 < learnedQuestions.length) {
      setQuizIndex((idx) => idx + 1);
      setQuizSelectedOption(null);
      setQuizAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setQuizAnswerSubmitted(false);
    setQuizFinished(false);
  };

  // Matrix Filter
  const filteredMatrix = allLevelVocabList.filter((item) => {
    if (matrixFilter === 'learned' && !learnedWordIds.has(item.id)) {
      return false;
    }
    if (!matrixSearch.trim()) return true;
    const q = matrixSearch.toLowerCase();
    return (
      item.word.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.collocations?.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header and Level Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-200 pb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block">
            Personalized Practice · Learned Vocabulary Only
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            Vocabulary Gym
          </h1>
          <p className="text-stone-600 text-sm mt-1 max-w-2xl">
            Flashcards and exercises in the Gym test <strong>only the words you have learned</strong> while reading articles or completing article exercises. B1 meanings are in <strong>Uzbek</strong>; B2 &amp; C1 meanings are in <strong>English</strong>.
          </p>
        </div>

        {/* Level Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl border border-stone-200 shrink-0">
          {(['ALL', 'B1', 'B2', 'C1'] as (CEFRLevel | 'ALL')[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevel(lvl);
                setCurrentCardIndex(0);
                setIsFlipped(false);
                handleRestartQuiz();
              }}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                selectedLevel === lvl
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>{lvl === 'ALL' ? 'All Levels' : lvl}</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[11px] font-mono ${
                  selectedLevel === lvl
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-stone-200/80 text-stone-600'
                }`}
              >
                {learnedCountsByLevel[lvl]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
        <button
          onClick={() => setGymMode('flashcards')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors ${
            gymMode === 'flashcards'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Learned Flashcards ({learnedVocabList.length} Words)</span>
        </button>
        <button
          onClick={() => setGymMode('speedQuiz')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors ${
            gymMode === 'speedQuiz'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Learned Words Exercises ({learnedQuestions.length} Items)</span>
        </button>
        <button
          onClick={() => setGymMode('matrix')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors ${
            gymMode === 'matrix'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Word Matrix &amp; Select Learned Words</span>
        </button>
      </div>

      {/* ================= MODE 1: Flashcards (Learned Words Only) ================= */}
      {gymMode === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {learnedVocabList.length === 0 ? (
            <div className="text-center py-14 px-6 bg-white rounded-2xl border border-stone-200 space-y-4 shadow-xs">
              <div className="inline-flex p-3.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                No learned words yet {selectedLevel !== 'ALL' ? `in ${selectedLevel}` : ''}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Vocabulary Gym flashcards and exercises only include words you have learned. Click on underlined target words while reading an article, complete an article&apos;s exercises, or mark words as learned in the Word Matrix.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={onBrowseLibrary}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Read Articles to Learn Words
                </button>
                <button
                  onClick={() => setGymMode('matrix')}
                  className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-xl text-xs font-semibold transition-colors"
                >
                  Select Words in Word Matrix
                </button>
              </div>
            </div>
          ) : (
            currentVocab && (
              <>
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>
                    Learned Card{' '}
                    <span className="font-mono font-bold text-stone-900">{safeCardIndex + 1}</span> of{' '}
                    <span className="font-mono font-bold text-stone-900">
                      {learnedVocabList.length}
                    </span>
                  </span>
                  <span>
                    Click card to reveal{' '}
                    {currentVocab.cefrLevel === 'B1' ? 'Uzbek meaning' : 'English definition'} &amp; collocations
                  </span>
                </div>

                {/* Interactive Flip Card */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-full min-h-[340px] bg-white rounded-2xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between select-none relative overflow-hidden group"
                >
                  {/* Top Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                        {currentVocab.cefrLevel}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Learned ✓
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakWord(currentVocab.word);
                        }}
                        aria-label={`Pronounce ${currentVocab.word}`}
                        className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
                        title="Pronounce"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSaveWord(currentVocab);
                        }}
                        aria-label={savedWordIds.has(currentVocab.id) ? 'Remove word' : 'Save word'}
                        className="p-1.5 text-stone-400 hover:text-amber-600 rounded-lg hover:bg-stone-100 transition-colors"
                        title="Bookmark word"
                      >
                        {savedWordIds.has(currentVocab.id) ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-600" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Face Content */}
                  {!isFlipped ? (
                    <div className="my-auto text-center space-y-3 py-6">
                      <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-950 tracking-tight">
                        {currentVocab.word}
                      </h2>
                      <div className="flex items-center justify-center gap-2 text-stone-500 text-sm font-mono">
                        <span>{currentVocab.phonetic}</span>
                        <span aria-hidden="true">·</span>
                        <span className="italic font-sans">{currentVocab.partOfSpeech}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-400 font-sans italic mt-4 max-w-md mx-auto">
                        &ldquo;{currentVocab.exampleSentence.replace(new RegExp(currentVocab.word, 'gi'), '_____')}&rdquo;
                      </p>
                      <div className="pt-4 text-xs font-medium text-amber-700 flex items-center justify-center gap-1">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>
                          Click anywhere to see{' '}
                          {currentVocab.cefrLevel === 'B1' ? 'O‘zbekcha ma’nosi' : 'English definition'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="my-auto space-y-4 py-4 animate-in fade-in duration-200">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                          {currentVocab.cefrLevel === 'B1'
                            ? 'Ma’nosi (O‘zbek tilida) · Uzbek Meaning'
                            : 'Definition (English)'}
                        </span>
                        <p className="text-stone-900 text-base leading-relaxed font-normal">
                          {currentVocab.definition}
                        </p>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                          Context Example
                        </span>
                        <p className="text-stone-700 text-xs sm:text-sm italic font-serif leading-relaxed">
                          &ldquo;{currentVocab.exampleSentence}&rdquo;
                        </p>
                      </div>

                      {currentVocab.collocations && currentVocab.collocations.length > 0 && (
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                            Collocations
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {currentVocab.collocations.map((col, idx) => (
                              <span
                                key={idx}
                                className="text-xs text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded-md"
                              >
                                {col}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Meta */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                    <span className="truncate max-w-[200px]">From: {currentVocab.articleTitle}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenArticle(currentVocab.articleId);
                      }}
                      className="text-amber-800 font-semibold hover:underline"
                    >
                      Read in Article &rarr;
                    </button>
                  </div>
                </div>

                {/* SRS Grading Buttons (When flipped) */}
                {isFlipped ? (
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <button
                      onClick={() => handleSRSGrade(0)}
                      className="py-2.5 px-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Again (1d)
                    </button>
                    <button
                      onClick={() => handleSRSGrade(1)}
                      className="py-2.5 px-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Hard
                    </button>
                    <button
                      onClick={() => handleSRSGrade(2)}
                      className="py-2.5 px-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Good
                    </button>
                    <button
                      onClick={() => handleSRSGrade(3)}
                      className="py-2.5 px-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 rounded-lg text-xs font-semibold text-center transition-colors"
                    >
                      Easy (4d)
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handlePrevCard}
                      className="px-4 py-2 border border-stone-200 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() => setIsFlipped(true)}
                      className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                    >
                      Show Meaning
                    </button>
                    <button
                      onClick={handleNextCard}
                      className="px-4 py-2 border border-stone-200 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )
          )}
        </div>
      )}

      {/* ================= MODE 2: Learned Words Exercises (Quiz) ================= */}
      {gymMode === 'speedQuiz' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {learnedQuestions.length === 0 ? (
            <div className="text-center py-14 px-6 bg-white rounded-2xl border border-stone-200 space-y-4 shadow-xs">
              <div className="inline-flex p-3.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                No learned words to quiz yet {selectedLevel !== 'ALL' ? `in ${selectedLevel}` : ''}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Exercises in the Vocabulary Gym are created strictly from words you have learned. Click on target words while reading an article or select words you have studied in the Word Matrix to unlock your personalized exercises.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={onBrowseLibrary}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Read Articles to Learn Words
                </button>
                <button
                  onClick={() => setGymMode('matrix')}
                  className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-xl text-xs font-semibold transition-colors"
                >
                  Select Words in Word Matrix
                </button>
              </div>
            </div>
          ) : quizFinished ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8 space-y-6 shadow-xs">
              <div className="inline-flex p-4 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <Award className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  Learned Words Exercise Completed!
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  You scored <span className="font-bold font-mono text-stone-900">{quizScore}</span> out of{' '}
                  <span className="font-bold font-mono text-stone-900">{learnedQuestions.length}</span> (
                  {Math.round((quizScore / learnedQuestions.length) * 100)}%) on your learned vocabulary.
                </p>
              </div>

              <button
                onClick={handleRestartQuiz}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Practice Learned Words Again
              </button>
            </div>
          ) : currentQuestion ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                <span>
                  Learned Word Exercise {quizIndex + 1} of {learnedQuestions.length}
                </span>
                <span className="font-mono font-bold text-amber-800">
                  Score: {quizScore}/{quizIndex + (quizAnswerSubmitted ? 1 : 0)}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-stone-500">
                    Learned Word: &ldquo;{currentQuestion.targetWord}&rdquo;
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    {currentQuestion.level}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {currentQuestion.question}
                </h3>
              </div>

              <div className="space-y-2.5">
                {currentQuestion.options.map((opt, optIdx) => {
                  let btnStyle = 'border-stone-200 hover:border-stone-400 bg-white text-stone-800';
                  if (quizAnswerSubmitted) {
                    if (optIdx === currentQuestion.correctIndex) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                    } else if (optIdx === quizSelectedOption) {
                      btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                    } else {
                      btnStyle = 'border-stone-100 bg-stone-50 text-stone-400';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={quizAnswerSubmitted}
                      onClick={() => handleSpeedQuizChoice(optIdx)}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-colors ${btnStyle}`}
                    >
                      <span className="font-mono text-xs font-bold text-stone-400 shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {quizAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                  <span className="font-bold block mb-1">
                    {quizSelectedOption === currentQuestion.correctIndex
                      ? 'Correct!'
                      : 'Incorrect!'}
                  </span>
                  {currentQuestion.explanation}
                </div>
              )}

              {quizAnswerSubmitted && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                  >
                    {quizIndex + 1 < learnedQuestions.length ? 'Next Learned Word' : 'View Results'}
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}

      {/* ================= MODE 3: Word Matrix ================= */}
      {gymMode === 'matrix' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search words or meanings..."
                  value={matrixSearch}
                  onChange={(e) => setMatrixSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-stone-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-600 focus:border-amber-600"
                />
              </div>
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs">
                <button
                  onClick={() => setMatrixFilter('all')}
                  className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                    matrixFilter === 'all' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600'
                  }`}
                >
                  All ({allLevelVocabList.length})
                </button>
                <button
                  onClick={() => setMatrixFilter('learned')}
                  className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                    matrixFilter === 'learned'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-stone-600'
                  }`}
                >
                  Learned ({learnedVocabList.length})
                </button>
              </div>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              Showing {filteredMatrix.length} words · Toggle &ldquo;Learned&rdquo; to include in Gym exercises
            </span>
          </div>

          <div className="border border-stone-200 rounded-xl bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Word &amp; Phonetic</th>
                    <th className="py-3 px-4">Level</th>
                    <th className="py-3 px-4">
                      {selectedLevel === 'B1'
                        ? 'Ma’nosi (O‘zbekcha)'
                        : selectedLevel === 'ALL'
                          ? 'Meaning (B1 O‘zbekcha / B2–C1 English)'
                          : 'Definition (English)'}
                    </th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredMatrix.map((item) => {
                    const isLearned = learnedWordIds.has(item.id);
                    return (
                      <tr key={item.id} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-baseline gap-2">
                            <span className="font-serif font-bold text-stone-900 text-sm">
                              {item.word}
                            </span>
                            <span className="text-xs font-mono text-stone-400">
                              {item.phonetic}
                            </span>
                            <span className="text-xs text-stone-400 italic">
                              ({item.partOfSpeech})
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                            {item.cefrLevel}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-stone-700 max-w-md">
                          {item.definition}
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => onToggleLearnedWord(item.id)}
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1 transition-colors border ${
                              isLearned
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{isLearned ? 'Learned ✓' : 'Mark Learned'}</span>
                          </button>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2 whitespace-nowrap">
                          <button
                            onClick={() => speakWord(item.word)}
                            aria-label={`Pronounce ${item.word}`}
                            className="p-1 text-stone-400 hover:text-stone-900 rounded inline-flex"
                            title="Pronounce"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onToggleSaveWord(item)}
                            aria-label={savedWordIds.has(item.id) ? 'Remove' : 'Save'}
                            className="p-1 text-stone-400 hover:text-amber-600 rounded inline-flex"
                            title="Bookmark"
                          >
                            {savedWordIds.has(item.id) ? (
                              <BookmarkCheck className="w-4 h-4 text-amber-600" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

