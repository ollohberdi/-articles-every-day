/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, X, Layers, Sparkles, SlidersHorizontal } from 'lucide-react';
import { CEFRLevel } from '../types';

interface HeroSectionProps {
  selectedLevel: CEFRLevel | 'ALL';
  onSelectLevel: (level: CEFRLevel | 'ALL') => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFilteredCount: number;
  totalTargetWordsCount: number;
  levelCounts: Record<'ALL' | 'B1' | 'B2' | 'C1', number>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedLevel,
  onSelectLevel,
  selectedCategory,
  onSelectCategory,
  categories,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
  totalTargetWordsCount,
  levelCounts,
}) => {
  const levelMetadata = {
    ALL: {
      badge: 'All Levels',
      title: 'Full Curriculum',
      desc: 'Browse articles across B1, B2, and C1 with interactive definitions and exercises.',
    },
    B1: {
      badge: 'Intermediate',
      title: 'Level B1',
      desc: 'Clear everyday language, core phrasal verbs, and connected sentences.',
    },
    B2: {
      badge: 'Upper-Intermediate',
      title: 'Level B2',
      desc: 'Complex arguments, analytical discussions, and academic collocations.',
    },
    C1: {
      badge: 'Advanced',
      title: 'Level C1',
      desc: 'Authentic long-form journalism, nuanced arguments, and high-utility advanced vocabulary.',
    },
  };

  return (
    <section className="bg-white border-b border-stone-200/80 pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 leading-tight">
              Read authentic articles at your exact English level.
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {levelMetadata[selectedLevel].desc}
            </p>
          </div>

          {/* Quick Stat Counter */}
          <div className="flex items-center gap-4 text-xs font-mono text-stone-500 shrink-0">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
              <span className="block text-lg font-bold text-stone-900 font-sans">
                {totalFilteredCount}
              </span>
              <span className="text-2xs uppercase tracking-wider text-stone-400">Articles</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
              <span className="block text-lg font-bold text-amber-700 font-sans">
                {totalTargetWordsCount}
              </span>
              <span className="text-2xs uppercase tracking-wider text-stone-400">Target Words</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
              <span className="block text-lg font-bold text-stone-900 font-sans">100%</span>
              <span className="text-2xs uppercase tracking-wider text-stone-400">Interactive</span>
            </div>
          </div>
        </div>

        {/* Modern Search Experience */}
        <div className="relative max-w-3xl">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by keywords, topics, or vocabulary (e.g. Roman concrete, CRISPR, sleep, memory)..."
              aria-label="Search articles"
              className="w-full pl-12 pr-12 py-3.5 bg-stone-50/90 border border-stone-200 rounded-2xl text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition-all shadow-2xs"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                aria-label="Clear search query"
                className="absolute right-3.5 p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Level Categorization Tabs */}
        <div className="space-y-3 pt-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {(['ALL', 'B1', 'B2', 'C1'] as const).map((lvl) => {
              const isActive = selectedLevel === lvl;
              const count = levelCounts[lvl];

              return (
                <button
                  key={lvl}
                  onClick={() => onSelectLevel(lvl)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-stone-900/10'
                      : 'bg-stone-50/70 hover:bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-2xs font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : lvl === 'B1'
                          ? 'bg-emerald-100 text-emerald-800'
                          : lvl === 'B2'
                          ? 'bg-indigo-100 text-indigo-800'
                          : lvl === 'C1'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {lvl}
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isActive ? 'text-amber-300' : 'text-stone-400'
                      }`}
                    >
                      {count} {count === 1 ? 'article' : 'articles'}
                    </span>
                  </div>

                  <span
                    className={`font-serif text-base font-bold ${
                      isActive ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {levelMetadata[lvl].title}
                  </span>
                  <span
                    className={`text-2xs truncate ${
                      isActive ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {levelMetadata[lvl].badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Topic Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 pb-1">
            <span className="text-xs text-stone-400 font-medium shrink-0 mr-1">Topics:</span>
            <button
              onClick={() => onSelectCategory('ALL')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'ALL'
                  ? 'bg-stone-800 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-stone-800 text-white font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}

            {(selectedLevel !== 'ALL' || selectedCategory !== 'ALL' || searchQuery.trim()) && (
              <button
                onClick={() => {
                  onSelectLevel('ALL');
                  onSelectCategory('ALL');
                  onSearchChange('');
                }}
                className="text-xs text-amber-800 hover:underline font-semibold ml-auto shrink-0 pl-2"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
