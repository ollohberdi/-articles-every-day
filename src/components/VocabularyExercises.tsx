/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  BookOpen,
  Volume2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { Article, VocabularyItem } from '../types';
import { calculateQuizScore, verifyClozeAnswer, verifyMatchingPairs } from '../utils/quizLogic';
import { speakWord } from '../utils/speech';

interface VocabularyExercisesProps {
  article: Article;
  onClose: () => void;
  onSaveWord: (word: VocabularyItem) => void;
  savedWordIds: Set<string>;
}

type TabType = 'mc' | 'cloze' | 'matching' | 'wordFormation';

export const VocabularyExercises: React.FC<VocabularyExercisesProps> = ({
  article,
  onClose,
  onSaveWord,
  savedWordIds,
}) => {
  const exercises = article.exercises;
  const availableTabs: TabType[] = ['mc', 'cloze', 'matching'];
  if (exercises.wordFormation && exercises.wordFormation.length > 0) {
    availableTabs.push('wordFormation');
  }

  const [activeTab, setActiveTab] = useState<TabType>('mc');

  // Multiple Choice State
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  const [mcSubmitted, setMcSubmitted] = useState<Record<string, boolean>>({});

  // Cloze State
  const [clozeAnswers, setClozeAnswers] = useState<Record<string, string>>({});
  const [clozeSubmitted, setClozeSubmitted] = useState(false);

  // Matching State
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [userPairs, setUserPairs] = useState<Record<string, string>>({});
  const [matchingSubmitted, setMatchingSubmitted] = useState(false);

  // Word Formation State
  const [wfAnswers, setWfAnswers] = useState<Record<string, string>>({});
  const [wfSubmitted, setWfSubmitted] = useState(false);

  // Summary State
  const [showSummary, setShowSummary] = useState(false);

  // Handlers for Multiple Choice
  const handleSelectMCOption = (questionId: string, optionIdx: number) => {
    if (mcSubmitted[questionId]) return; // locked after submission
    setMcAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
    setMcSubmitted((prev) => ({ ...prev, [questionId]: true }));
  };

  // Handlers for Cloze
  const handleClozeOptionClick = (exerciseId: string, word: string) => {
    if (clozeSubmitted) return;
    setClozeAnswers((prev) => ({ ...prev, [exerciseId]: word }));
  };

  // Handlers for Matching
  const solutionPairsMap: Record<string, string> = {};
  exercises.matching.pairs.forEach((p) => {
    solutionPairsMap[p.term] = p.match;
  });

  const handleMatchTermClick = (term: string) => {
    if (matchingSubmitted) return;
    setSelectedTerm((curr) => (curr === term ? null : term));
  };

  const handleMatchTargetClick = (matchText: string) => {
    if (matchingSubmitted || !selectedTerm) return;
    setUserPairs((prev) => ({ ...prev, [selectedTerm]: matchText }));
    setSelectedTerm(null);
  };

  const handleResetMatching = () => {
    setUserPairs({});
    setSelectedTerm(null);
    setMatchingSubmitted(false);
  };

  // Calculate Overall Score across all exercise sections
  const calculateTotalResults = () => {
    let totalQuestions = 0;
    let totalCorrect = 0;

    // MC
    exercises.multipleChoice.forEach((q) => {
      totalQuestions++;
      if (mcAnswers[q.id] === q.correctIndex) totalCorrect++;
    });

    // Cloze
    exercises.cloze.forEach((q) => {
      totalQuestions++;
      if (clozeAnswers[q.id] && verifyClozeAnswer(clozeAnswers[q.id], q.targetWord)) {
        totalCorrect++;
      }
    });

    // Matching
    const matchEval = verifyMatchingPairs(userPairs, solutionPairsMap);
    totalQuestions += matchEval.totalPairs;
    totalCorrect += matchEval.correctCount;

    // Word Formation
    if (exercises.wordFormation) {
      exercises.wordFormation.forEach((q) => {
        totalQuestions++;
        if (wfAnswers[q.id] && verifyClozeAnswer(wfAnswers[q.id], q.correctAnswer)) {
          totalCorrect++;
        }
      });
    }

    return calculateQuizScore(totalCorrect, totalQuestions);
  };

  const results = calculateTotalResults();

  const handleResetAll = () => {
    setMcAnswers({});
    setMcSubmitted({});
    setClozeAnswers({});
    setClozeSubmitted(false);
    setUserPairs({});
    setSelectedTerm(null);
    setMatchingSubmitted(false);
    setWfAnswers({});
    setWfSubmitted(false);
    setShowSummary(false);
    setActiveTab('mc');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exercise-modal-title"
    >
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                {article.level}
              </span>
              <h2 id="exercise-modal-title" className="font-serif text-lg font-bold text-stone-900 truncate">
                Interactive Vocabulary Exercises
              </h2>
            </div>
            <p className="text-xs text-stone-500 truncate mt-0.5">
              Article: &ldquo;{article.title}&rdquo;
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close exercises modal"
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        {!showSummary && (
          <div className="flex border-b border-stone-200 bg-white px-6 overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('mc')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'mc'
                  ? 'border-amber-600 text-amber-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              1. Context & Meaning ({exercises.multipleChoice.length})
            </button>
            <button
              onClick={() => setActiveTab('cloze')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'cloze'
                  ? 'border-amber-600 text-amber-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              2. Sentence Cloze ({exercises.cloze.length})
            </button>
            <button
              onClick={() => setActiveTab('matching')}
              className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'matching'
                  ? 'border-amber-600 text-amber-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              3. Collocation Match ({exercises.matching.pairs.length})
            </button>
            {exercises.wordFormation && (
              <button
                onClick={() => setActiveTab('wordFormation')}
                className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'wordFormation'
                    ? 'border-amber-600 text-amber-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                4. Word Formation ({exercises.wordFormation.length})
              </button>
            )}
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {showSummary ? (
            /* ================= Summary Screen ================= */
            <div className="text-center py-6 space-y-6">
              <div className="inline-flex p-4 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                <Award className="w-12 h-12" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  {article.level} Vocabulary Evaluation
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900 mt-1">
                  Performance: {results.performanceBand}
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  You scored <span className="font-bold font-mono tabular-nums text-stone-900">{results.score}</span> out of{' '}
                  <span className="font-bold font-mono tabular-nums text-stone-900">{results.total}</span> points ({results.percentage}%)
                </p>
              </div>

              {/* Performance Indicator Bar */}
              <div className="max-w-md mx-auto bg-stone-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    results.passed ? 'bg-emerald-600' : 'bg-amber-500'
                  }`}
                  style={{ width: `${results.percentage}%` }}
                />
              </div>

              {/* Target Words Review with Add to Notebook buttons */}
              <div className="text-left bg-stone-50 rounded-xl p-5 border border-stone-200 max-w-lg mx-auto">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Article Target Vocabulary Bank
                </h4>
                <div className="space-y-2">
                  {article.targetVocabulary.map((vocab) => {
                    const isSaved = savedWordIds.has(vocab.id);
                    return (
                      <div
                        key={vocab.id}
                        className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-stone-100 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => speakWord(vocab.word)}
                            className="p-1 text-stone-400 hover:text-stone-800 rounded"
                            title="Pronounce"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <div>
                            <span className="font-bold text-stone-900">{vocab.word}</span>
                            <span className="text-xs text-stone-400 ml-1.5 font-mono">
                              {vocab.phonetic}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onSaveWord(vocab)}
                          className={`text-xs px-2.5 py-1 rounded font-medium transition-colors ${
                            isSaved
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {isSaved ? 'In Notebook' : '+ Save Word'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleResetAll}
                  className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Return to Reader
                </button>
              </div>
            </div>
          ) : activeTab === 'mc' ? (
            /* ================= Tab 1: Multiple Choice ================= */
            <div className="space-y-6">
              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/50 text-xs text-amber-900">
                <strong>Instructions:</strong> Select the most precise meaning or contextual synonym for each target word as used in the article.
              </div>

              {exercises.multipleChoice.map((q, idx) => {
                const userChoice = mcAnswers[q.id];
                const isSubmitted = mcSubmitted[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-stone-200 bg-white space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-stone-900">
                        {idx + 1}. {q.question}
                      </h4>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold whitespace-nowrap">
                        Word: &ldquo;{q.targetWord}&rdquo;
                      </span>
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'border-stone-200 hover:border-stone-400 bg-white text-stone-800';

                        if (isSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-medium';
                          } else if (optIdx === userChoice) {
                            btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                          } else {
                            btnStyle = 'border-stone-100 bg-stone-50 text-stone-400';
                          }
                        } else if (userChoice === optIdx) {
                          btnStyle = 'border-amber-600 bg-amber-50 text-amber-950 font-medium';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectMCOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-colors ${btnStyle}`}
                          >
                            <span className="font-mono text-xs font-bold text-stone-500 shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {isSubmitted && optIdx === userChoice && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <div
                        className={`p-3 rounded-lg text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                            : 'bg-rose-50 border border-rose-200 text-rose-900'
                        }`}
                      >
                        <span className="font-bold block mb-0.5">
                          {isCorrect ? 'Correct!' : 'Incorrect'}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : activeTab === 'cloze' ? (
            /* ================= Tab 2: Cloze / Fill-in-Blank ================= */
            <div className="space-y-6">
              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/50 text-xs text-amber-900">
                <strong>Instructions:</strong> Complete each sentence with the correct target vocabulary word from this article.
              </div>

              {exercises.cloze.map((cl, idx) => {
                const currentAnswer = clozeAnswers[cl.id] || '';
                const isCorrect = verifyClozeAnswer(currentAnswer, cl.targetWord);

                return (
                  <div
                    key={cl.id}
                    className="p-5 rounded-xl border border-stone-200 bg-white space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-semibold text-stone-500">Sentence {idx + 1}</span>
                      <span className="text-xs italic text-stone-500 font-mono">Hint: {cl.hint}</span>
                    </div>

                    <p className="font-serif text-sm sm:text-base text-stone-800 leading-relaxed">
                      {cl.sentenceWithBlank.split('_____').map((segment, segIdx, arr) => (
                        <React.Fragment key={segIdx}>
                          {segment}
                          {segIdx < arr.length - 1 && (
                            <span
                              className={`inline-block mx-1 px-3 py-0.5 font-sans font-bold border-b-2 rounded ${
                                clozeSubmitted
                                  ? isCorrect
                                    ? 'bg-emerald-100 text-emerald-900 border-emerald-500'
                                    : 'bg-rose-100 text-rose-900 border-rose-500 line-through'
                                  : currentAnswer
                                  ? 'bg-amber-100 text-amber-900 border-amber-500'
                                  : 'bg-stone-100 text-stone-400 border-stone-300'
                              }`}
                            >
                              {currentAnswer || '_____'}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Word Bank Buttons */}
                    {cl.options && (
                      <div className="pt-2">
                        <span className="text-xs text-stone-400 block mb-1.5 font-medium">
                          Select candidate:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cl.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              disabled={clozeSubmitted}
                              onClick={() => handleClozeOptionClick(cl.id, opt)}
                              className={`px-3 py-1 text-xs rounded-md font-medium border transition-colors ${
                                currentAnswer === opt
                                  ? 'bg-stone-900 text-white border-stone-900'
                                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {clozeSubmitted && !isCorrect && (
                      <p className="text-xs text-stone-600 bg-stone-50 p-2 rounded">
                        Correct answer: <strong className="text-stone-900">{cl.targetWord}</strong>
                      </p>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-end pt-2">
                {!clozeSubmitted ? (
                  <button
                    onClick={() => setClozeSubmitted(true)}
                    className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Check Cloze Answers
                  </button>
                ) : (
                  <button
                    onClick={() => setClozeSubmitted(false)}
                    className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    Edit Answers
                  </button>
                )}
              </div>
            </div>
          ) : activeTab === 'matching' ? (
            /* ================= Tab 3: Matching Pairs ================= */
            <div className="space-y-6">
              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/50 text-xs text-amber-900">
                <strong>Instructions:</strong> Click a target vocabulary term on the left, then click its corresponding definition or natural collocation on the right to link them.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left: Terms */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Target Terms
                  </h4>
                  {exercises.matching.pairs.map((p) => {
                    const isSelected = selectedTerm === p.term;
                    const isPaired = !!userPairs[p.term];
                    const isCorrect = userPairs[p.term] === solutionPairsMap[p.term];

                    let termStyle = 'border-stone-200 bg-white hover:border-amber-300 text-stone-800';
                    if (matchingSubmitted) {
                      termStyle = isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                        : 'border-rose-400 bg-rose-50 text-rose-950';
                    } else if (isSelected) {
                      termStyle = 'border-amber-600 bg-amber-100 text-amber-950 ring-2 ring-amber-400';
                    } else if (isPaired) {
                      termStyle = 'border-amber-400 bg-amber-50/70 text-stone-900';
                    }

                    return (
                      <button
                        key={p.id}
                        disabled={matchingSubmitted}
                        onClick={() => handleMatchTermClick(p.term)}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm font-semibold transition-all ${termStyle}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{p.term}</span>
                          {isPaired && (
                            <span className="text-xs font-normal text-stone-400 font-mono">Linked</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Matches (Randomized or displayed) */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Definitions & Collocations
                  </h4>
                  {exercises.matching.pairs.map((p) => {
                    // Check if this match text is currently paired with any term
                    const pairedTerm = Object.keys(userPairs).find(
                      (k) => userPairs[k] === p.match
                    );

                    return (
                      <button
                        key={p.id}
                        disabled={matchingSubmitted}
                        onClick={() => handleMatchTargetClick(p.match)}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all ${
                          pairedTerm
                            ? 'border-amber-500 bg-amber-50 text-stone-900 font-medium'
                            : 'border-stone-200 bg-white hover:border-amber-300 text-stone-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span>{p.match}</span>
                          {pairedTerm && (
                            <span className="text-xs font-bold font-mono px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 shrink-0">
                              [{pairedTerm}]
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Matching Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleResetMatching}
                  className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-800 font-medium"
                >
                  Clear Links
                </button>
                {!matchingSubmitted ? (
                  <button
                    onClick={() => setMatchingSubmitted(true)}
                    className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Check Matchings
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-emerald-700">
                    Matches Evaluated
                  </span>
                )}
              </div>
            </div>
          ) : (
            /* ================= Tab 4: Word Formation ================= */
            <div className="space-y-6">
              <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/50 text-xs text-amber-900">
                <strong>Instructions:</strong> Use the root word given in CAPITALS to form the correct grammatical derivative for the blank.
              </div>

              {exercises.wordFormation?.map((wf, idx) => {
                const answer = wfAnswers[wf.id] || '';
                const isCorrect = verifyClozeAnswer(answer, wf.correctAnswer);

                return (
                  <div
                    key={wf.id}
                    className="p-5 rounded-xl border border-stone-200 bg-white space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-500">Item {idx + 1}</span>
                      <span className="text-xs font-mono font-bold text-amber-800 px-2 py-0.5 rounded bg-amber-100">
                        ROOT: {wf.rootWord.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-stone-800 font-serif leading-relaxed">
                      {wf.promptSentence}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        value={answer}
                        disabled={wfSubmitted}
                        placeholder="Type derivative here..."
                        onChange={(e) =>
                          setWfAnswers((prev) => ({ ...prev, [wf.id]: e.target.value }))
                        }
                        className={`px-3 py-1.5 border rounded-lg text-sm w-full max-w-xs focus:ring-1 focus:outline-hidden ${
                          wfSubmitted
                            ? isCorrect
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-rose-400 bg-rose-50 text-rose-900'
                            : 'border-stone-300 focus:border-amber-600 focus:ring-amber-600'
                        }`}
                      />
                      {wfSubmitted && (
                        <span>
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-600" />
                          )}
                        </span>
                      )}
                    </div>

                    {wfSubmitted && (
                      <div className="p-2.5 bg-stone-50 rounded text-xs text-stone-600">
                        Correct form: <strong className="text-stone-900">{wf.correctAnswer}</strong>. {wf.explanation}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-end pt-2">
                {!wfSubmitted ? (
                  <button
                    onClick={() => setWfSubmitted(true)}
                    className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Check Word Formations
                  </button>
                ) : (
                  <button
                    onClick={() => setWfSubmitted(false)}
                    className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-stone-500 hover:text-stone-800 font-semibold"
          >
            Exit Exercises
          </button>

          {!showSummary && (
            <button
              onClick={() => setShowSummary(true)}
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>View Score & Mastery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
