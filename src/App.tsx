/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar, ActiveView } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { VocabularyExercises } from './components/VocabularyExercises';
import { VocabularyGym } from './components/VocabularyGym';
import { VocabularyNotebook } from './components/VocabularyNotebook';
import { ShareArticleModal } from './components/ShareArticleModal';
import { ARTICLES_DATA } from './data/articlesData';
import { Article, CEFRLevel, VocabularyItem, UserSavedWord } from './types';
import { filterArticles, resolveArticleFromLocation } from './utils/quizLogic';
import { Search } from 'lucide-react';

const DEFAULT_DOCUMENT_TITLE =
  'Articles ED (Every day) - Graded English Readers & Interactive Vocabulary (B1, B2, C1)';

export default function App() {
  // Articles & Categorization State
  const [articles] = useState<Article[]>(ARTICLES_DATA);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Initialize Active View from URL if present
  const [activeView, setActiveView] = useState<ActiveView>(() => {
    if (typeof window === 'undefined') return 'library';
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'gym' || viewParam === 'notebook') {
      return viewParam;
    }
    return 'library';
  });

  // Initialize Reading Article synchronously from URL (?article=..., #article=..., or /article/...)
  const [readingArticle, setReadingArticle] = useState<Article | null>(() => {
    if (typeof window === 'undefined') return null;
    return resolveArticleFromLocation(ARTICLES_DATA, {
      search: window.location.search,
      pathname: window.location.pathname,
      hash: window.location.hash,
    });
  });

  const [exerciseArticle, setExerciseArticle] = useState<Article | null>(null);
  const [sharingArticle, setSharingArticle] = useState<Article | null>(null);

  // Vocabulary Gym Initial Mode
  const [gymInitialMode, setGymInitialMode] = useState<'flashcards' | 'speedQuiz' | 'matrix'>('flashcards');

  // Synchronize URL and Document Title with active article / view
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    // Normalize any /article/<id> pathname back to root so query param is canonical
    url.pathname = url.pathname.replace(/\/articles?\/[^/?#]+\/?$/i, '/') || '/';
    url.hash = '';

    if (readingArticle) {
      url.search = '';
      url.searchParams.set('article', readingArticle.id);
      document.title = `${readingArticle.title} | Articles ED (Every day)`;
    } else {
      url.search = '';
      if (activeView === 'gym' || activeView === 'notebook') {
        url.searchParams.set('view', activeView);
      }
      document.title = DEFAULT_DOCUMENT_TITLE;
    }

    const targetRelativeUrl = `${url.pathname}${url.search}${url.hash}`;
    const currentRelativeUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (targetRelativeUrl !== currentRelativeUrl) {
      window.history.pushState({ articleId: readingArticle?.id ?? null, view: activeView }, '', targetRelativeUrl);
    }
  }, [readingArticle, activeView]);

  // Listen to browser Back / Forward navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const matchedArticle = resolveArticleFromLocation(articles, {
        search: window.location.search,
        pathname: window.location.pathname,
        hash: window.location.hash,
      });

      if (matchedArticle) {
        setReadingArticle(matchedArticle);
        setActiveView('library');
        return;
      }

      setReadingArticle(null);
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view');
      if (viewParam === 'gym' || viewParam === 'notebook') {
        setActiveView(viewParam);
      } else {
        setActiveView('library');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [articles]);

  // Saved Vocabulary Notebook State (persisted in localStorage)
  const [savedWords, setSavedWords] = useState<UserSavedWord[]>(() => {
    try {
      const stored = localStorage.getItem('lexiread_saved_words');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lexiread_saved_words', JSON.stringify(savedWords));
    } catch {
      // Ignore storage errors
    }
  }, [savedWords]);

  const savedWordIds = useMemo(() => new Set(savedWords.map((w) => w.id)), [savedWords]);

  const handleToggleSaveWord = (vocab: VocabularyItem) => {
    setSavedWords((prev) => {
      const exists = prev.some((w) => w.id === vocab.id);
      if (exists) {
        return prev.filter((w) => w.id !== vocab.id);
      } else {
        const newWord: UserSavedWord = {
          ...vocab,
          savedAt: Date.now(),
          reviewInterval: 1,
          repetitions: 0,
          nextReviewDate: Date.now() + 86400000,
        };
        return [newWord, ...prev];
      }
    });
  };

  const handleRemoveSavedWord = (wordId: string) => {
    setSavedWords((prev) => prev.filter((w) => w.id !== wordId));
  };

  const handleClearAllSaved = () => {
    setSavedWords([]);
  };

  // Extract unique topic categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => set.add(a.category));
    return Array.from(set);
  }, [articles]);

  // Level counts for active tab badges
  const levelCounts = useMemo(() => {
    return {
      ALL: articles.length,
      B1: articles.filter((a) => a.level === 'B1').length,
      B2: articles.filter((a) => a.level === 'B2').length,
      C1: articles.filter((a) => a.level === 'C1').length,
    };
  }, [articles]);

  // Filtered Articles based on Level, Category, and Search Query
  const filteredArticles = useMemo(() => {
    return filterArticles(articles, {
      level: selectedLevel,
      category: selectedCategory,
      searchQuery,
    });
  }, [articles, selectedLevel, selectedCategory, searchQuery]);

  // Dynamic Target Words count for currently filtered articles
  const totalTargetWordsCount = useMemo(() => {
    return filteredArticles.reduce((sum, article) => sum + article.targetVocabulary.length, 0);
  }, [filteredArticles]);

  // Navigation handlers
  const handleOpenArticle = (article: Article) => {
    setReadingArticle(article);
  };

  const handleOpenArticleById = (articleId: string) => {
    const target = articles.find((a) => a.id === articleId);
    if (target) {
      setActiveView('library');
      setReadingArticle(target);
    }
  };

  const handleOpenExercises = (article: Article) => {
    setExerciseArticle(article);
  };

  const handleShareArticle = (article: Article) => {
    setSharingArticle(article);
  };

  const handleStartDailyDrill = () => {
    setGymInitialMode('speedQuiz');
    setReadingArticle(null);
    setActiveView('gym');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-amber-200">
      {/* Primary Navigation Bar (Top Bar Contract) */}
      <Navbar
        activeView={activeView}
        onNavigate={(view) => {
          setActiveView(view);
          setReadingArticle(null);
        }}
        savedWordsCount={savedWords.length}
        onStartLevelQuiz={handleStartDailyDrill}
      />

      {/* Main Body */}
      {readingArticle ? (
        /* Reading Experience */
        <ArticleReader
          article={readingArticle}
          onBack={() => setReadingArticle(null)}
          onStartExercises={handleOpenExercises}
          onShareArticle={handleShareArticle}
          savedWordIds={savedWordIds}
          onToggleSaveWord={handleToggleSaveWord}
        />
      ) : activeView === 'gym' ? (
        /* Dedicated Vocabulary Gym */
        <VocabularyGym
          initialMode={gymInitialMode}
          savedWordIds={savedWordIds}
          onToggleSaveWord={handleToggleSaveWord}
          onOpenArticle={handleOpenArticleById}
        />
      ) : activeView === 'notebook' ? (
        /* Personal Vocabulary Notebook */
        <VocabularyNotebook
          savedWords={savedWords}
          onRemoveWord={handleRemoveSavedWord}
          onClearAll={handleClearAllSaved}
          onNavigateToGym={() => {
            setGymInitialMode('flashcards');
            setActiveView('gym');
          }}
        />
      ) : (
        /* Library View */
        <main className="flex-1 pb-20">
          {/* Hero Section with Search and Proficiency Categorization */}
          <HeroSection
            selectedLevel={selectedLevel}
            onSelectLevel={setSelectedLevel}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categories={categories}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalFilteredCount={filteredArticles.length}
            totalTargetWordsCount={totalTargetWordsCount}
            levelCounts={levelCounts}
          />

          {/* Graded Articles Grid */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onSelect={handleOpenArticle}
                    onOpenExercises={handleOpenExercises}
                    onShareArticle={handleShareArticle}
                  />
                ))}
              </div>
            ) : (
              /* Empty Search / Filter State */
              <div className="text-center py-16 bg-white border border-stone-200 rounded-2xl p-8 max-w-lg mx-auto space-y-4 shadow-xs">
                <div className="inline-flex p-3 rounded-full bg-stone-100 text-stone-500">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  No articles matched your criteria
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in{' '}
                  {selectedLevel === 'ALL' ? 'all levels' : selectedLevel}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedLevel('ALL');
                      setSelectedCategory('ALL');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              </div>
            )}
          </section>
        </main>
      )}

      {/* Interactive Exercises Modal */}
      {exerciseArticle && (
        <VocabularyExercises
          article={exerciseArticle}
          onClose={() => setExerciseArticle(null)}
          onSaveWord={handleToggleSaveWord}
          savedWordIds={savedWordIds}
        />
      )}

      {/* Share Article Link Modal */}
      <ShareArticleModal
        article={sharingArticle}
        onClose={() => setSharingArticle(null)}
      />

      {/* Clean Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-8 px-4 sm:px-6 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-900 text-sm">Articles ED (Every day)</span>
            <span>·</span>
            <span>Graded English Readers for B1, B2, and C1 Learners</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => {
                setActiveView('library');
                setReadingArticle(null);
              }}
              className="hover:text-stone-900 transition-colors"
            >
              All Articles
            </button>
            <button
              onClick={() => {
                setGymInitialMode('flashcards');
                setActiveView('gym');
                setReadingArticle(null);
              }}
              className="hover:text-stone-900 transition-colors"
            >
              Vocabulary Gym
            </button>
            <button
              onClick={() => {
                setActiveView('notebook');
                setReadingArticle(null);
              }}
              className="hover:text-stone-900 transition-colors"
            >
              My Notebook ({savedWords.length})
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
