/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Volume2,
  Trash2,
  BookOpen,
  Search,
  RotateCcw,
  Sparkles,
  Download,
  Award,
} from 'lucide-react';
import { UserSavedWord } from '../types';
import { speakWord } from '../utils/speech';

interface VocabularyNotebookProps {
  savedWords: UserSavedWord[];
  onRemoveWord: (wordId: string) => void;
  onClearAll: () => void;
  onNavigateToGym: () => void;
}

export const VocabularyNotebook: React.FC<VocabularyNotebookProps> = ({
  savedWords,
  onRemoveWord,
  onClearAll,
  onNavigateToGym,
}) => {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<'ALL' | 'B1' | 'B2' | 'C1'>('ALL');

  const filteredWords = savedWords.filter((w) => {
    if (levelFilter !== 'ALL' && w.cefrLevel !== levelFilter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      w.word.toLowerCase().includes(q) ||
      w.definition.toLowerCase().includes(q) ||
      w.collocations?.some((c) => c.toLowerCase().includes(q))
    );
  });

  const exportAsCSV = () => {
    if (savedWords.length === 0) return;
    const headers = 'Word,Phonetic,Level,PartOfSpeech,Definition,Example\n';
    const rows = savedWords
      .map(
        (w) =>
          `"${w.word}","${w.phonetic}","${w.cefrLevel}","${w.partOfSpeech}","${w.definition.replace(/"/g, '""')}","${w.exampleSentence.replace(/"/g, '""')}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my_lexiread_vocabulary.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
            Personal Word Bank
          </span>
          <h1 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            My Vocabulary Notebook
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            {savedWords.length} terms saved from your reading sessions across B1, B2, and C1.
          </p>
        </div>

        {savedWords.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={exportAsCSV}
              className="px-3.5 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onNavigateToGym}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Drill in Gym
            </button>
          </div>
        )}
      </div>

      {savedWords.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 bg-white border border-stone-200 rounded-2xl p-8 max-w-lg mx-auto space-y-4">
          <div className="inline-flex p-3 rounded-full bg-amber-50 text-amber-700">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Your Notebook is empty
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            While reading any B1, B2, or C1 article, click on highlighted vocabulary words and tap &ldquo;Save to Notebook&rdquo; to build your personalized lexical study list.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Controls: Search and Level Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search saved vocabulary..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-stone-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs font-semibold">
              {(['ALL', 'B1', 'B2', 'C1'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    levelFilter === lvl
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lvl === 'ALL' ? 'All' : lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Words Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWords.map((word) => (
              <div
                key={word.id}
                className="bg-white rounded-xl border border-stone-200 p-5 space-y-3 shadow-xs hover:border-amber-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-bold text-stone-900">
                          {word.word}
                        </h4>
                        <span className="text-2xs font-bold px-1.5 py-0.5 rounded border bg-stone-50 text-stone-700">
                          {word.cefrLevel}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-stone-500">
                        {word.phonetic} · <span className="italic font-sans">{word.partOfSpeech}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => speakWord(word.word)}
                        aria-label={`Pronounce ${word.word}`}
                        className="p-1 text-stone-400 hover:text-stone-800 rounded transition-colors"
                        title="Pronounce"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRemoveWord(word.id)}
                        aria-label={`Remove ${word.word}`}
                        className="p-1 text-stone-400 hover:text-rose-600 rounded transition-colors"
                        title="Remove from notebook"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 mt-2 font-normal leading-relaxed">
                    {word.definition}
                  </p>

                  <div className="mt-2.5 p-2 bg-stone-50 rounded border border-stone-100 text-xs text-stone-600 italic font-serif">
                    &ldquo;{word.exampleSentence}&rdquo;
                  </div>
                </div>

                {word.collocations && word.collocations.length > 0 && (
                  <div className="pt-2 border-t border-stone-100">
                    <div className="flex flex-wrap gap-1">
                      {word.collocations.map((col, idx) => (
                        <span
                          key={idx}
                          className="text-2xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
