/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  UserPlus,
  Users,
  Sparkles,
  Search,
  Calendar,
  Trash2,
  Save,
  CheckCircle2,
  ArrowLeft,
  CloudCheck,
  FileDown,
  BookOpen,
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  Article,
  CEFRLevel,
  RegisteredStudentProfile,
  StudentSubscription,
  SubscriptionSettings,
} from '../types';
import { ADMIN_EMAIL, isAdminUser } from '../utils/quizLogic';
import { ARTICLES_DATA } from '../data/articlesData';
import { downloadLevelArticlesAsPDF } from '../utils/pdfExport';

interface AdminDashboardProps {
  currentUser: User | null;
  articles?: Article[];
  registeredUsers: RegisteredStudentProfile[];
  subscriptions: StudentSubscription[];
  subscriptionSettings: SubscriptionSettings;
  onGrantPro: (
    studentIdentifier: string,
    studentName: string,
    durationDays: number,
    planLabel: string
  ) => Promise<void>;
  onRevokePro: (studentIdentifier: string) => Promise<void>;
  onSaveSettings: (settings: Omit<SubscriptionSettings, 'settingId'>) => Promise<void>;
  onBackToLibrary: () => void;
}

type DirectoryFilter = 'ALL' | 'FREE' | 'PRO';

interface DirectoryEntry {
  key: string;
  identifier: string; // email or uid:<userId>
  emailDisplay: string;
  hasSyncedEmail: boolean;
  userId?: string;
  displayName: string;
  isRegisteredUser: boolean;
  subscription?: StudentSubscription;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  articles = ARTICLES_DATA,
  registeredUsers,
  subscriptions,
  subscriptionSettings,
  onGrantPro,
  onRevokePro,
  onSaveSettings,
  onBackToLibrary,
}) => {
  // Strict guard: never render anything unless signed in as verified ollohberdiinfo@gmail.com
  const isAuthorizedAdmin = isAdminUser(currentUser);

  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [directoryFilter, setDirectoryFilter] = useState<DirectoryFilter>('ALL');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);

  const [monthlyPriceText, setMonthlyPriceText] = useState(
    subscriptionSettings.monthlyPriceText
  );
  const [telegramUsername, setTelegramUsername] = useState(
    subscriptionSettings.telegramUsername
  );
  const [paymentInstructions, setPaymentInstructions] = useState(
    subscriptionSettings.paymentInstructions
  );

  // Keep local form synced if cloud settings load after mount
  React.useEffect(() => {
    setMonthlyPriceText(subscriptionSettings.monthlyPriceText);
    setTelegramUsername(subscriptionSettings.telegramUsername);
    setPaymentInstructions(subscriptionSettings.paymentInstructions);
  }, [
    subscriptionSettings.monthlyPriceText,
    subscriptionSettings.telegramUsername,
    subscriptionSettings.paymentInstructions,
  ]);

  const now = Date.now();

  // Build full directory of ALL Google-registered users (both Free and Pro) + any pre-activated Gmail subscriptions
  const { allEntries, filteredEntries, freeUsersCount, proUsersCount } = useMemo(() => {
    const byEmail = new Map<string, DirectoryEntry>();
    const byUid = new Map<string, DirectoryEntry>();

    // Index subscriptions by email and by uid
    const subByEmail = new Map<string, StudentSubscription>();
    const subByUid = new Map<string, StudentSubscription>();

    for (const sub of subscriptions) {
      const raw = (sub.studentEmail || '').trim();
      if (raw.startsWith('uid:')) {
        const uid = raw.slice(4).trim();
        if (uid) subByUid.set(uid, sub);
      } else if (sub.emailKey?.startsWith('uid-')) {
        const uid = sub.emailKey.slice(4).trim();
        if (uid) subByUid.set(uid, sub);
      } else if (raw) {
        subByEmail.set(raw.toLowerCase(), sub);
      }
    }

    // 1. Add EVERY user from /users/{userId} (all users who ever signed in with Google)
    for (const u of registeredUsers) {
      const inferredEmail =
        (u.email || '').trim().toLowerCase() ||
        (currentUser && u.userId === currentUser.uid
          ? (currentUser.email || '').trim().toLowerCase()
          : '');

      const matchedSub =
        (inferredEmail ? subByEmail.get(inferredEmail) : undefined) ||
        subByUid.get(u.userId);

      if (inferredEmail) {
        const entry: DirectoryEntry = {
          key: inferredEmail,
          identifier: inferredEmail,
          emailDisplay: inferredEmail,
          hasSyncedEmail: true,
          userId: u.userId,
          displayName: u.displayName || inferredEmail.split('@')[0] || 'Student',
          isRegisteredUser: true,
          subscription: matchedSub,
        };
        byEmail.set(inferredEmail, entry);
      } else {
        // User signed in with Google before email field was added to /users/{userId}
        const uidIdentifier = `uid:${u.userId}`;
        const entry: DirectoryEntry = {
          key: uidIdentifier,
          identifier: uidIdentifier,
          emailDisplay: `Google Account (ID: ${u.userId.slice(0, 10)}…)`,
          hasSyncedEmail: false,
          userId: u.userId,
          displayName: u.displayName || 'Google Student',
          isRegisteredUser: true,
          subscription: matchedSub,
        };
        byUid.set(u.userId, entry);
      }
    }

    // 2. Also include any subscription whose email/uid is not yet in registeredUsers (pre-activated Gmail)
    for (const sub of subscriptions) {
      const raw = (sub.studentEmail || '').trim();
      if (raw.startsWith('uid:')) {
        const uid = raw.slice(4).trim();
        if (uid && !byUid.has(uid)) {
          // Check if already attached to an email entry
          const alreadyAttached = Array.from(byEmail.values()).some(
            (e) => e.userId === uid
          );
          if (!alreadyAttached) {
            byUid.set(uid, {
              key: `uid:${uid}`,
              identifier: `uid:${uid}`,
              emailDisplay: `Google Account (ID: ${uid.slice(0, 10)}…)`,
              hasSyncedEmail: false,
              userId: uid,
              displayName: sub.studentName || 'Google Student',
              isRegisteredUser: true,
              subscription: sub,
            });
          }
        }
      } else if (raw) {
        const cleanEmail = raw.toLowerCase();
        if (!byEmail.has(cleanEmail)) {
          byEmail.set(cleanEmail, {
            key: cleanEmail,
            identifier: cleanEmail,
            emailDisplay: cleanEmail,
            hasSyncedEmail: true,
            displayName: sub.studentName || cleanEmail.split('@')[0] || 'Student',
            isRegisteredUser: false,
            subscription: sub,
          });
        }
      }
    }

    const combined: DirectoryEntry[] = [
      ...Array.from(byEmail.values()),
      ...Array.from(byUid.values()),
    ];

    combined.sort((a, b) => {
      const aIsAdmin = a.identifier === ADMIN_EMAIL ? 1 : 0;
      const bIsAdmin = b.identifier === ADMIN_EMAIL ? 1 : 0;
      if (aIsAdmin !== bIsAdmin) return bIsAdmin - aIsAdmin;

      const aActive = (a.subscription?.proUntil || 0) > now ? 1 : 0;
      const bActive = (b.subscription?.proUntil || 0) > now ? 1 : 0;
      if (aActive !== bActive) return bActive - aActive;

      return a.displayName.localeCompare(b.displayName);
    });

    let freeCount = 0;
    let proCount = 0;
    for (const item of combined) {
      if (item.identifier === ADMIN_EMAIL) continue;
      const isPro = Boolean(item.subscription && item.subscription.proUntil > now);
      if (isPro) {
        proCount += 1;
      } else {
        freeCount += 1;
      }
    }

    const afterTabFilter = combined.filter((item) => {
      if (directoryFilter === 'ALL') return true;
      const isAdminRow = item.identifier === ADMIN_EMAIL;
      const isPro = isAdminRow || Boolean(item.subscription && item.subscription.proUntil > now);
      if (directoryFilter === 'PRO') return isPro;
      return !isPro; // 'FREE'
    });

    const q = studentSearch.trim().toLowerCase();
    const afterSearch = q
      ? afterTabFilter.filter(
          (item) =>
            item.displayName.toLowerCase().includes(q) ||
            item.emailDisplay.toLowerCase().includes(q) ||
            (item.userId && item.userId.toLowerCase().includes(q))
        )
      : afterTabFilter;

    return {
      allEntries: combined,
      filteredEntries: afterSearch,
      freeUsersCount: freeCount,
      proUsersCount: proCount,
    };
  }, [registeredUsers, subscriptions, studentSearch, directoryFilter, now, currentUser]);

  if (!isAuthorizedAdmin) {
    return null;
  }

  const showToast = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => {
      setStatusMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleQuickGrant = async (days: number, label: string) => {
    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      showToast('Please enter a valid student Gmail address first.');
      return;
    }
    if (cleanEmail === ADMIN_EMAIL) {
      showToast(`${ADMIN_EMAIL} is the Admin account and already has Pro Forever without limits.`);
      setEmailInput('');
      setNameInput('');
      return;
    }
    setIsBusy(true);
    try {
      const cleanName = nameInput.trim() || cleanEmail.split('@')[0];
      await onGrantPro(cleanEmail, cleanName, days, label);
      setEmailInput('');
      setNameInput('');
      showToast(`Activated ${label} (+${days} days) for ${cleanEmail}`);
    } finally {
      setIsBusy(false);
    }
  };

  const handleRowGrant = async (
    identifier: string,
    displayName: string,
    days: number,
    label: string
  ) => {
    if (identifier === ADMIN_EMAIL) return;
    setIsBusy(true);
    try {
      await onGrantPro(identifier, displayName, days, label);
      showToast(`Activated +${days} days (${label}) for ${displayName}`);
    } finally {
      setIsBusy(false);
    }
  };

  const handleRowRevoke = async (identifier: string, displayName: string) => {
    if (identifier === ADMIN_EMAIL) return;
    setIsBusy(true);
    try {
      await onRevokePro(identifier);
      showToast(`Moved ${displayName} back to Free Tier (10 articles/level)`);
    } finally {
      setIsBusy(false);
    }
  };

  const handleSaveSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    try {
      await onSaveSettings({
        monthlyPriceText: monthlyPriceText.trim() || '39,000 UZS / month',
        telegramUsername: telegramUsername.trim() || '@ollohberdi',
        paymentInstructions: paymentInstructions.trim(),
      });
      showToast('Subscription pricing and Telegram instructions saved.');
    } finally {
      setIsBusy(false);
    }
  };

  const b1Count = useMemo(() => articles.filter((a) => a.level === 'B1').length, [articles]);
  const b2Count = useMemo(() => articles.filter((a) => a.level === 'B2').length, [articles]);
  const c1Count = useMemo(() => articles.filter((a) => a.level === 'C1').length, [articles]);

  const handleDownloadLevelPDF = (
    level: CEFRLevel | 'ALL',
    tier: 'ALL' | 'FREE' | 'PRO' = 'ALL'
  ) => {
    downloadLevelArticlesAsPDF(articles, level, tier);
    const levelLabel = level === 'ALL' ? `All Levels (${articles.length} articles)` : `Level ${level}`;
    const tierLabel = tier === 'ALL' ? 'Complete Collection' : tier === 'FREE' ? 'Free Tier (10)' : 'Pro Collection';
    showToast(`Downloaded ${levelLabel} — ${tierLabel} PDF Book.`);
  };

  return (
    <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-900 text-white p-6 rounded-3xl shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Only · {ADMIN_EMAIL}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Student Subscriptions &amp; Google Users
          </h1>
          <p className="text-xs sm:text-sm text-stone-300">
            View all users who signed in with Google (both Free and Pro) and activate or revoke Pro
            access with one click.
          </p>
        </div>

        <button
          onClick={onBackToLibrary}
          className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>
      </div>

      {/* Status Toast */}
      {statusMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm font-medium flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{statusMessage}</span>
          </div>
          <button
            onClick={() => setStatusMessage(null)}
            className="text-xs font-bold text-emerald-800 hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <span className="text-xs font-medium text-stone-500">All Google Accounts</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-stone-900">
              {registeredUsers.length}
            </span>
            <span className="text-xs text-stone-500">
              signed in ({freeUsersCount} Free · {proUsersCount} Pro)
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <span className="text-xs font-medium text-stone-500">Active Pro Students</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-emerald-700">
              {proUsersCount}
            </span>
            <span className="text-xs text-stone-500">students with premium access</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <span className="text-xs font-medium text-stone-500">Free Tier Students</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-amber-800">
              {freeUsersCount}
            </span>
            <span className="text-xs text-stone-500">students without premium (10/level)</span>
          </div>
        </div>
      </div>

      {/* Admin Exclusive Section: Download All Articles by Level (B1, B2, C1, or All) */}
      <section className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold text-stone-900">
                  Download All Articles by Level (PDF Books)
                </h2>
                <span className="px-2 py-0.5 rounded-md bg-stone-900 text-amber-300 text-2xs font-bold uppercase tracking-wider">
                  Only for You
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Download a complete, print-ready PDF book containing every article, table of
                contents, and full vocabulary list for B1, B2, C1, or the entire library.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleDownloadLevelPDF('ALL', 'ALL')}
            className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-2 shadow-2xs transition-colors shrink-0"
          >
            <FileDown className="w-4 h-4 text-amber-400" />
            <span>Download All {articles.length} Articles (B1 + B2 + C1)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* B1 Card */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-700 text-white text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Level B1</span>
                </span>
                <span className="text-xs font-semibold text-emerald-900">
                  {b1Count} Articles · {b1Count * 5} Words
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 pt-1">
                B1 Intermediate Complete Book
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Includes all {b1Count} B1 articles with full texts and Uzbek target vocabulary
                definitions.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => handleDownloadLevelPDF('B1', 'ALL')}
                className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download All {b1Count} B1 Articles (PDF)</span>
              </button>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleDownloadLevelPDF('B1', 'FREE')}
                  className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-emerald-100/70 text-emerald-900 border border-emerald-200 text-2xs font-semibold transition-colors"
                >
                  Free 10 B1 Only
                </button>
                <button
                  type="button"
                  onClick={() => handleDownloadLevelPDF('B1', 'PRO')}
                  className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-emerald-100/70 text-emerald-900 border border-emerald-200 text-2xs font-semibold transition-colors"
                >
                  Pro {Math.max(0, b1Count - 10)} B1 Only
                </button>
              </div>
            </div>
          </div>

          {/* B2 Card */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-700 text-white text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Level B2</span>
                </span>
                <span className="text-xs font-semibold text-amber-900">
                  {b2Count} Articles · 308 Words
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 pt-1">
                B2 Upper-Intermediate Complete Book
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Includes all {b2Count} B2 articles with full texts, English definitions, and
                academic collocations.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => handleDownloadLevelPDF('B2', 'ALL')}
                className="w-full py-2.5 px-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download All {b2Count} B2 Articles (PDF)</span>
              </button>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleDownloadLevelPDF('B2', 'FREE')}
                  className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-amber-100/70 text-amber-900 border border-amber-200 text-2xs font-semibold transition-colors"
                >
                  Free 10 B2 Only
                </button>
                <button
                  type="button"
                  onClick={() => handleDownloadLevelPDF('B2', 'PRO')}
                  className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-amber-100/70 text-amber-900 border border-amber-200 text-2xs font-semibold transition-colors"
                >
                  Pro {Math.max(0, b2Count - 10)} B2 Only
                </button>
              </div>
            </div>
          </div>

          {/* C1 Card */}
          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-rose-800 text-white text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Level C1</span>
                </span>
                <span className="text-xs font-semibold text-rose-900">
                  {c1Count} Articles · 60 Words
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 pt-1">
                C1 Advanced Complete Book
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Includes all {c1Count} long-form C1 articles with advanced academic vocabulary and
                examples.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => handleDownloadLevelPDF('C1', 'ALL')}
                className="w-full py-2.5 px-3.5 rounded-xl bg-rose-800 hover:bg-rose-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download All {c1Count} C1 Articles (PDF)</span>
              </button>
              <div className="text-center py-1 text-2xs text-rose-800 font-medium">
                Complete C1 Master Collection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Activate Pro by Student Gmail */}
      <section className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
            <UserPlus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Activate Pro by Student Gmail
            </h2>
            <p className="text-xs text-stone-500">
              Enter a student&apos;s Gmail address (even before they sign in) to unlock all{' '}
              {articles.length} articles immediately.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-5">
            <label className="block text-2xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Student Gmail Address *
            </label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="student@gmail.com"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-2xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Student Name (Optional)
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g., Sardor"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="md:col-span-4 flex items-end gap-2">
            <button
              type="button"
              disabled={isBusy}
              onClick={() => handleQuickGrant(30, 'Monthly Pro')}
              className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white text-xs font-semibold transition-colors"
            >
              +30 Days Pro
            </button>
            <button
              type="button"
              disabled={isBusy}
              onClick={() => handleQuickGrant(90, '3-Month Pro')}
              className="py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 disabled:opacity-50 text-amber-950 text-xs font-semibold transition-colors"
            >
              +90 Days
            </button>
            <button
              type="button"
              disabled={isBusy}
              onClick={() => handleQuickGrant(365, 'Annual Pro')}
              className="py-2.5 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 disabled:opacity-50 text-emerald-950 text-xs font-semibold transition-colors"
            >
              +1 Year
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: All Registered Google Users (Free & Pro) + Subscriptions Directory */}
      <section className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-100 text-stone-800">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                All Google Users &amp; Subscriptions ({allEntries.length})
              </h2>
              <p className="text-xs text-stone-500">
                Every student who signed in with Google appears here — both Free Tier and Pro
                subscribers.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Filter Tabs: All / Free / Pro */}
            <div className="inline-flex bg-stone-100 p-1 rounded-xl border border-stone-200/70 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setDirectoryFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  directoryFilter === 'ALL'
                    ? 'bg-white text-stone-950 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All ({allEntries.length})
              </button>
              <button
                type="button"
                onClick={() => setDirectoryFilter('FREE')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  directoryFilter === 'FREE'
                    ? 'bg-white text-stone-950 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Without Pro ({freeUsersCount})
              </button>
              <button
                type="button"
                onClick={() => setDirectoryFilter('PRO')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  directoryFilter === 'PRO'
                    ? 'bg-white text-emerald-800 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                With Pro ({proUsersCount + 1})
              </button>
            </div>

            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Search by name or Gmail..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <div className="text-center py-10 text-xs text-stone-500 border border-dashed border-stone-200 rounded-2xl">
            No matching users found for this filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider text-2xs">
                  <th className="py-3 px-3">Student</th>
                  <th className="py-3 px-3">Gmail / Google Account</th>
                  <th className="py-3 px-3">Plan &amp; Status</th>
                  <th className="py-3 px-3 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredEntries.map((entry) => {
                  const isRowAdmin = entry.identifier === ADMIN_EMAIL;
                  const sub = entry.subscription;
                  const isActive = sub && sub.proUntil > now;
                  const daysLeft = isActive
                    ? Math.max(1, Math.ceil((sub.proUntil - now) / 86400000))
                    : 0;
                  const expiryDateStr = sub
                    ? new Date(sub.proUntil).toLocaleDateString()
                    : '';

                  return (
                    <tr key={entry.key} className="hover:bg-stone-50/80">
                      <td className="py-3.5 px-3 font-semibold text-stone-900">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>{entry.displayName}</span>
                          {isRowAdmin ? (
                            <span className="px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 text-2xs font-bold">
                              Admin
                            </span>
                          ) : entry.isRegisteredUser ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-2xs font-medium">
                              <CloudCheck className="w-3 h-3 text-emerald-600" />
                              <span>Signed in with Google</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-2xs font-medium">
                              Pre-activated Gmail
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-mono text-stone-700">
                        {entry.hasSyncedEmail ? (
                          <span>{entry.emailDisplay}</span>
                        ) : (
                          <div>
                            <span className="text-stone-700 font-semibold block">
                              {entry.emailDisplay}
                            </span>
                            <span className="text-2xs font-sans text-stone-400">
                              Gmail address syncs automatically on student&apos;s next visit
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        {isRowAdmin ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300/80 font-bold text-2xs">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
                            <span>Pro Forever · Unlimited</span>
                          </span>
                        ) : isActive ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-2xs">
                            <Sparkles className="w-3 h-3 text-emerald-700" />
                            <span>
                              Pro Active · {daysLeft}d left (until {expiryDateStr})
                            </span>
                          </span>
                        ) : sub ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-semibold text-2xs">
                            <Calendar className="w-3 h-3" />
                            <span>Expired ({expiryDateStr})</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 font-medium text-2xs">
                            Free Tier · Without Pro (10/level)
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        {isRowAdmin ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-semibold text-2xs">
                            Lifetime Admin Access
                          </span>
                        ) : (
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() =>
                                handleRowGrant(
                                  entry.identifier,
                                  entry.displayName,
                                  30,
                                  'Monthly Pro'
                                )
                              }
                              className="px-2.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold transition-colors"
                              title="Grant +30 days of Pro access"
                            >
                              +30d Pro
                            </button>
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() =>
                                handleRowGrant(
                                  entry.identifier,
                                  entry.displayName,
                                  365,
                                  'Annual Pro'
                                )
                              }
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-semibold transition-colors"
                              title="Grant +1 year of Pro access"
                            >
                              +1yr
                            </button>
                            {sub && (
                              <button
                                type="button"
                                disabled={isBusy}
                                onClick={() =>
                                  handleRowRevoke(entry.identifier, entry.displayName)
                                }
                                title="Revoke Pro subscription and return to Free Tier"
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Section 3: Subscription Modal Settings */}
      <section className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-900">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Subscription Price &amp; Telegram Contact Settings
            </h2>
            <p className="text-xs text-stone-500">
              Customize what students see when they click a locked Pro article.
            </p>
          </div>
        </div>

        <form onSubmit={handleSaveSettingsSubmit} className="space-y-4 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-2xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Monthly Price Display
              </label>
              <input
                type="text"
                value={monthlyPriceText}
                onChange={(e) => setMonthlyPriceText(e.target.value)}
                placeholder="39,000 UZS / month"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-2xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Admin Telegram Username
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                placeholder="@ollohberdi"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-2xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Student Payment &amp; Activation Instructions
            </label>
            <textarea
              rows={3}
              value={paymentInstructions}
              onChange={(e) => setPaymentInstructions(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isBusy}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Subscription Settings</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
