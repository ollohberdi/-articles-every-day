/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, Bookmark, BookmarkCheck, X, Sparkles } from 'lucide-react';
import { VocabularyItem } from '../types';
import { speakWord } from '../utils/speech';

interface WordPopupProps {
  word: VocabularyItem;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (word: VocabularyItem) => void;
}

export const WordPopup: React.FC<WordPopupProps> = ({
  word,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const handlePlayAudio = async () => {
    setIsPlayingAudio(true);
    await speakWord(word.word);
    setIsPlayingAudio(false);
  };

  const levelColorMap = {
    B1: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    B2: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    C1: 'bg-purple-50 text-purple-800 border-purple-200',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`word-title-${word.id}`}
    >
      <div
        className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-3">
              <h3 id={`word-title-${word.id}`} className="font-serif text-2xl font-bold text-stone-900">
                {word.word}
              </h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${levelColorMap[word.cefrLevel]}`}>
                {word.cefrLevel}
              </span>
              <span className="text-xs italic text-stone-500 font-medium">
                ({word.partOfSpeech})
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-mono text-stone-600 tracking-wide">{word.phonetic}</span>
              <button
                onClick={handlePlayAudio}
                aria-label={`Listen to pronunciation of ${word.word}`}
                className={`p-1 text-stone-500 hover:text-stone-900 rounded transition-colors ${isPlayingAudio ? 'text-amber-600 scale-110' : ''}`}
                title="Listen to audio pronunciation"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleSave(word)}
              aria-label={isSaved ? 'Remove from Vocabulary Notebook' : 'Save to Vocabulary Notebook'}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isSaved
                  ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-700" /> : <Bookmark className="w-4 h-4" />}
              <span className="text-xs">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close word details"
              className="p-2 text-stone-400 hover:text-stone-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
              Definition
            </span>
            <p className="text-stone-900 text-sm leading-relaxed font-normal">
              {word.definition}
            </p>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
              Example in Context
            </span>
            <p className="text-stone-700 text-sm italic font-serif leading-relaxed">
              &ldquo;{word.exampleSentence}&rdquo;
            </p>
          </div>

          {word.collocations && word.collocations.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1.5">
                Key Collocations
              </span>
              <div className="flex flex-wrap gap-2">
                {word.collocations.map((col, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          )}

          {word.synonyms && word.synonyms.length > 0 && (
            <div className="pt-2 border-t border-stone-100 flex items-baseline gap-2 text-xs text-stone-600">
              <span className="font-semibold text-stone-700">Synonyms:</span>
              <span>{word.synonyms.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
          <span>Click anywhere in text to lookup more words</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-stone-900 text-white rounded-md text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
