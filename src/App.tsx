/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
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
import {
  auth,
  db,
  OperationType,
  handleFirestoreError,
  signInStudentWithGoogle,
  signOutStudent,
  saveWordToCloudNotebook,
  removeWordFromCloudNotebook,
  markWordLearnedInCloud,
  unmarkWordLearnedInCloud,
} from './firebase';
import { Search } from 'lucide-react';

const DEFAULT_DOCUMENT_TITLE =
  'Articles ED (Every day) - Graded English Readers & Interactive Vocabulary (B1, B2, C1)';

export default function App() {
  // Articles & Categorization State
  const [articles] = useState<Article[]>(ARTICLES_DATA);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Firebase Auth User State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  // Lookup map of all canonical vocabulary items by ID
  const allVocabMap = useMemo(() => {
    const map = new Map<string, VocabularyItem>();
    ARTICLES_DATA.forEach((a) =>
      a.targetVocabulary.forEach((v) => map.set(v.id, v))
    );
    return map;
  }, []);

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

  // Saved Vocabulary Notebook State (persisted in localStorage AND synced with Firestore when signed in)
  const [savedWords, setSavedWords] = useState<UserSavedWord[]>(() => {
    try {
      const stored = localStorage.getItem('lexiread_saved_words');
      if (!stored) return [];
      const parsed: UserSavedWord[] = JSON.parse(stored);
      const latestVocabMap = new Map<string, VocabularyItem>();
      ARTICLES_DATA.forEach((a) =>
        a.targetVocabulary.forEach((v) => latestVocabMap.set(v.id, v))
      );
      return parsed.map((item) => {
        const fresh = latestVocabMap.get(item.id);
        return fresh ? { ...item, ...fresh } : item;
      });
    } catch {
      return [];
    }
  });

  // Learned Vocabulary IDs State (persisted in localStorage AND synced with Firestore when signed in)
  const [learnedWordIdsList, setLearnedWordIdsList] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('lexiread_learned_words');
      const fromLearned: string[] = stored ? JSON.parse(stored) : [];
      const storedSaved = localStorage.getItem('lexiread_saved_words');
      const fromSaved: string[] = storedSaved
        ? (JSON.parse(storedSaved) as UserSavedWord[]).map((w) => w.id)
        : [];
      return Array.from(new Set([...fromLearned, ...fromSaved]));
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

  useEffect(() => {
    try {
      localStorage.setItem('lexiread_learned_words', JSON.stringify(learnedWordIdsList));
    } catch {
      // Ignore storage errors
    }
  }, [learnedWordIdsList]);

  // Track Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  // Subscribe to student's Firestore Notebook & Learned Words when authenticated
  useEffect(() => {
    if (!isAuthReady || !currentUser) return;

    const notebookPath = `users/${currentUser.uid}/notebook`;
    const learnedPath = `users/${currentUser.uid}/learned`;

    const unsubNotebook = onSnapshot(
      collection(db, notebookPath),
      (snapshot) => {
        const cloudWords: UserSavedWord[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const canonical = allVocabMap.get(data.wordId);
          cloudWords.push({
            id: data.wordId,
            word: canonical?.word || data.word,
            phonetic: canonical?.phonetic || data.phonetic,
            partOfSpeech: canonical?.partOfSpeech || data.partOfSpeech,
            definition: canonical?.definition || data.definition,
            cefrLevel: canonical?.cefrLevel || data.cefrLevel,
            exampleSentence: canonical?.exampleSentence || data.exampleSentence,
            collocations: canonical?.collocations || data.collocations || [],
            synonyms: canonical?.synonyms,
            antonyms: canonical?.antonyms,
            savedAt: typeof data.savedAt === 'number' ? data.savedAt : Date.now(),
            reviewInterval: typeof data.reviewInterval === 'number' ? data.reviewInterval : 1,
            repetitions: typeof data.repetitions === 'number' ? data.repetitions : 0,
            nextReviewDate:
              typeof data.nextReviewDate === 'number' ? data.nextReviewDate : Date.now() + 86400000,
          });
        });
        cloudWords.sort((a, b) => b.savedAt - a.savedAt);
        setSavedWords(cloudWords);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, notebookPath);
      }
    );

    const unsubLearned = onSnapshot(
      collection(db, learnedPath),
      (snapshot) => {
        const ids: string[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data.wordId) ids.push(data.wordId);
        });
        setLearnedWordIdsList((prev) => Array.from(new Set([...prev, ...ids])));
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, learnedPath);
      }
    );

    return () => {
      unsubNotebook();
      unsubLearned();
    };
  }, [isAuthReady, currentUser, allVocabMap]);

  const savedWordIds = useMemo(() => new Set(savedWords.map((w) => w.id)), [savedWords]);
  const learnedWordIds = useMemo(() => new Set(learnedWordIdsList), [learnedWordIdsList]);

  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

  const handleSignInWithGoogle = async () => {
    setAuthErrorMessage(null);
    try {
      const localSavedSnapshot = [...savedWords];
      const localLearnedSnapshot = [...learnedWordIdsList];
      const user = await signInStudentWithGoogle();
      // Merge any words saved/learned locally before signing in into the student's cloud account
      for (const word of localSavedSnapshot) {
        await saveWordToCloudNotebook(user, word);
      }
      for (const wordId of localLearnedSnapshot) {
        const vocab = allVocabMap.get(wordId);
        if (vocab) {
          await markWordLearnedInCloud(user, vocab);
        }
      }
    } catch (err: unknown) {
      console.error('Google Sign-In failed or was cancelled:', err);
      const code =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: string }).code)
          : '';
      const message = err instanceof Error ? err.message : String(err);

      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        return;
      }
      if (code === 'auth/unauthorized-domain' || message.includes('unauthorized-domain')) {
        const host = typeof window !== 'undefined' ? window.location.hostname : 'your live domain';
        setAuthErrorMessage(
          `The domain "${host}" is not yet authorized in Firebase Authentication. Add "${host}" under Firebase Console → Authentication → Settings → Authorized domains.`
        );
      } else if (code === 'auth/popup-blocked') {
        setAuthErrorMessage(
          'Your browser blocked the Google Sign-In popup. Please allow popups for this site and try again.'
        );
      } else {
        setAuthErrorMessage(`Google Sign-In could not complete (${code || message}).`);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutStudent();
    } catch (err) {
      console.error('Sign-Out error:', err);
    }
  };

  const handleMarkWordLearned = (wordId: string) => {
    setLearnedWordIdsList((prev) => (prev.includes(wordId) ? prev : [...prev, wordId]));
    if (currentUser) {
      const vocab = allVocabMap.get(wordId);
      if (vocab) {
        void markWordLearnedInCloud(currentUser, vocab);
      }
    }
  };

  const handleToggleLearnedWord = (wordId: string) => {
    const isCurrentlyLearned = learnedWordIds.has(wordId);
    setLearnedWordIdsList((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
    if (currentUser) {
      if (isCurrentlyLearned) {
        void unmarkWordLearnedInCloud(currentUser, wordId);
      } else {
        const vocab = allVocabMap.get(wordId);
        if (vocab) {
          void markWordLearnedInCloud(currentUser, vocab);
        }
      }
    }
  };

  const handleMarkArticleWordsLearned = (article: Article) => {
    const ids = article.targetVocabulary.map((v) => v.id);
    setLearnedWordIdsList((prev) => Array.from(new Set([...prev, ...ids])));
    if (currentUser) {
      for (const vocab of article.targetVocabulary) {
        void markWordLearnedInCloud(currentUser, vocab);
      }
    }
  };

  const handleToggleSaveWord = (vocab: VocabularyItem) => {
    const exists = savedWords.some((w) => w.id === vocab.id);
    if (!exists) {
      handleMarkWordLearned(vocab.id);
    }
    setSavedWords((prev) => {
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

    if (currentUser) {
      if (exists) {
        void removeWordFromCloudNotebook(currentUser, vocab.id);
      } else {
        void saveWordToCloudNotebook(currentUser, vocab);
      }
    }
  };

  const handleRemoveSavedWord = (wordId: string) => {
    setSavedWords((prev) => prev.filter((w) => w.id !== wordId));
    if (currentUser) {
      void removeWordFromCloudNotebook(currentUser, wordId);
    }
  };

  const handleClearAllSaved = () => {
    const currentIds = savedWords.map((w) => w.id);
    setSavedWords([]);
    if (currentUser) {
      for (const id of currentIds) {
        void removeWordFromCloudNotebook(currentUser, id);
      }
    }
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
    // Studying an article's exercises marks its target words as learned
    handleMarkArticleWordsLearned(article);
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
        currentUser={currentUser}
        isAuthLoading={!isAuthReady}
        onSignInWithGoogle={handleSignInWithGoogle}
        onSignOut={handleSignOut}
      />

      {/* Auth Error Banner (e.g., if live domain is not yet in Firebase Authorized Domains) */}
      {authErrorMessage && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 py-3 text-xs sm:text-sm text-amber-950">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold">Google Sign-In Notice: </span>
              <span>{authErrorMessage}</span>
            </div>
            <button
              onClick={() => setAuthErrorMessage(null)}
              className="text-xs font-semibold text-amber-900 hover:underline self-end sm:self-auto shrink-0"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

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
          learnedWordIds={learnedWordIds}
          onMarkWordLearned={handleMarkWordLearned}
          onToggleLearnedWord={handleToggleLearnedWord}
          onMarkArticleWordsLearned={handleMarkArticleWordsLearned}
        />
      ) : activeView === 'gym' ? (
        /* Dedicated Vocabulary Gym */
        <VocabularyGym
          initialMode={gymInitialMode}
          savedWordIds={savedWordIds}
          onToggleSaveWord={handleToggleSaveWord}
          learnedWordIds={learnedWordIds}
          onToggleLearnedWord={handleToggleLearnedWord}
          onOpenArticle={handleOpenArticleById}
          onBrowseLibrary={() => {
            setActiveView('library');
            setReadingArticle(null);
          }}
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
          currentUser={currentUser}
          onSignInWithGoogle={handleSignInWithGoogle}
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
