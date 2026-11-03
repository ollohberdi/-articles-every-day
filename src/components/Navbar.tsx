/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Dumbbell, Bookmark, LogIn, LogOut, CloudCheck } from 'lucide-react';
import { User } from 'firebase/auth';

export type ActiveView = 'library' | 'gym' | 'notebook';

interface NavbarProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  savedWordsCount: number;
  onStartLevelQuiz: () => void;
  currentUser: User | null;
  isAuthLoading?: boolean;
  onSignInWithGoogle: () => void;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  savedWordsCount,
  onStartLevelQuiz,
  currentUser,
  isAuthLoading = false,
  onSignInWithGoogle,
  onSignOut,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 h-16">
        {/* Zone 1: Modern Brand Wordmark */}
        <button
          onClick={() => onNavigate('library')}
          className="text-lg font-serif font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xl tracking-tight">
            Articles ED <span className="text-sm font-sans font-medium text-stone-500 hidden sm:inline">(Every day)</span>
          </span>
        </button>

        {/* Zone 2: Streamlined, Modern Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-600 bg-stone-100/70 p-1 rounded-xl border border-stone-200/50">
          <button
            onClick={() => onNavigate('library')}
            className={`px-4 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
              activeView === 'library'
                ? 'bg-white text-stone-950 font-semibold shadow-xs'
                : 'hover:text-stone-900 hover:bg-stone-200/40'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => onNavigate('gym')}
            className={`px-4 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
              activeView === 'gym'
                ? 'bg-white text-stone-950 font-semibold shadow-xs'
                : 'hover:text-stone-900 hover:bg-stone-200/40'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5 text-amber-600" />
            <span>Vocabulary Gym</span>
          </button>
          <button
            onClick={() => onNavigate('notebook')}
            className={`px-4 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
              activeView === 'notebook'
                ? 'bg-white text-stone-950 font-semibold shadow-xs'
                : 'hover:text-stone-900 hover:bg-stone-200/40'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-stone-500" />
            <span>Notebook</span>
            {savedWordsCount > 0 && (
              <span className="text-2xs font-mono font-bold px-1.5 py-0.2 bg-amber-100 text-amber-900 rounded-full">
                {savedWordsCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Google Account & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {currentUser ? (
            <div className="flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs">
              <CloudCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="font-semibold text-stone-800 max-w-[120px] truncate">
                {currentUser.displayName || currentUser.email?.split('@')[0] || 'Student'}
              </span>
              <button
                onClick={onSignOut}
                className="p-1 text-stone-500 hover:text-rose-700 hover:bg-white rounded-lg transition-colors"
                title="Sign out of Google account"
                aria-label="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onSignInWithGoogle}
              disabled={isAuthLoading}
              className="px-3.5 py-2 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl shadow-2xs flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0"
            >
              <LogIn className="w-3.5 h-3.5 text-amber-700" />
              <span>Sign in with Google</span>
            </button>
          )}

          <button
            onClick={onStartLevelQuiz}
            className="hidden sm:inline-flex px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Daily Drill
          </button>
        </div>
      </div>

      {/* Mobile Nav Sub-row */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-100 px-3 py-2 bg-stone-50 text-xs font-medium text-stone-600">
        <button
          onClick={() => onNavigate('library')}
          className={`py-1 px-3 rounded-lg ${activeView === 'library' ? 'font-bold text-stone-900 bg-white shadow-2xs' : ''}`}
        >
          Articles
        </button>
        <button
          onClick={() => onNavigate('gym')}
          className={`py-1 px-3 rounded-lg flex items-center gap-1 ${activeView === 'gym' ? 'font-bold text-stone-900 bg-white shadow-2xs' : ''}`}
        >
          <Dumbbell className="w-3 h-3 text-amber-600" />
          <span>Gym</span>
        </button>
        <button
          onClick={() => onNavigate('notebook')}
          className={`py-1 px-3 rounded-lg flex items-center gap-1 ${activeView === 'notebook' ? 'font-bold text-stone-900 bg-white shadow-2xs' : ''}`}
        >
          <Bookmark className="w-3 h-3" />
          <span>Notebook</span>
          {savedWordsCount > 0 && <span className="font-mono text-2xs">({savedWordsCount})</span>}
        </button>
      </div>
    </header>
  );
};

