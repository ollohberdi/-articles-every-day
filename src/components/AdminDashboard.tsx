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
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  RegisteredStudentProfile,
  StudentSubscription,
  SubscriptionSettings,
} from '../types';
import { ADMIN_EMAIL, isAdminUser } from '../utils/quizLogic';

interface AdminDashboardProps {
  currentUser: User | null;
  registeredUsers: RegisteredStudentProfile[];
  subscriptions: StudentSubscription[];
  subscriptionSettings: SubscriptionSettings;
  onGrantPro: (
    studentEmail: string,
    studentName: string,
    durationDays: number,
    planLabel: string
  ) => Promise<void>;
  onRevokePro: (studentEmail: string) => Promise<void>;
  onSaveSettings: (settings: Omit<SubscriptionSettings, 'settingId'>) => Promise<void>;
  onBackToLibrary: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
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

  // Merge registered Google users + subscription records by lowercase email
  const mergedDirectory = useMemo(() => {
    const map = new Map<
      string,
      {
        email: string;
        displayName: string;
        isRegisteredUser: boolean;
        subscription?: StudentSubscription;
      }
    >();

    for (const u of registeredUsers) {
      const cleanEmail = (u.email || '').trim().toLowerCase();
      if (!cleanEmail) continue;
      map.set(cleanEmail, {
        email: cleanEmail,
        displayName: u.displayName || cleanEmail.split('@')[0],
        isRegisteredUser: true,
      });
    }

    for (const sub of subscriptions) {
      const cleanEmail = (sub.studentEmail || '').trim().toLowerCase();
      if (!cleanEmail) continue;
      const existing = map.get(cleanEmail);
      map.set(cleanEmail, {
        email: cleanEmail,
        displayName: existing?.displayName || sub.studentName || cleanEmail.split('@')[0],
        isRegisteredUser: existing?.isRegisteredUser ?? false,
        subscription: sub,
      });
    }

    const list = Array.from(map.values());
    list.sort((a, b) => {
      const aActive = (a.subscription?.proUntil || 0) > now ? 1 : 0;
      const bActive = (b.subscription?.proUntil || 0) > now ? 1 : 0;
      if (aActive !== bActive) return bActive - aActive;
      return a.email.localeCompare(b.email);
    });

    if (!studentSearch.trim()) return list;
    const q = studentSearch.trim().toLowerCase();
    return list.filter(
      (item) =>
        item.email.toLowerCase().includes(q) ||
        item.displayName.toLowerCase().includes(q)
    );
  }, [registeredUsers, subscriptions, studentSearch, now]);

  if (!isAuthorizedAdmin) {
    return null;
  }

  const activeSubscribersCount = subscriptions.filter((s) => s.proUntil > now).length;

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
    email: string,
    displayName: string,
    days: number,
    label: string
  ) => {
    setIsBusy(true);
    try {
      await onGrantPro(email, displayName, days, label);
      showToast(`Updated ${email}: +${days} days (${label})`);
    } finally {
      setIsBusy(false);
    }
  };

  const handleRowRevoke = async (email: string) => {
    setIsBusy(true);
    try {
      await onRevokePro(email);
      showToast(`Revoked Pro access for ${email}`);
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
            Student Subscriptions &amp; Access Control
          </h1>
          <p className="text-xs sm:text-sm text-stone-300">
            First 10 articles in B1, B2, and C1 are Free. Activate or extend Pro access for any
            student Gmail below.
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
          <span className="text-xs font-medium text-stone-500">Active Pro Subscribers</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-emerald-700">
              {activeSubscribersCount}
            </span>
            <span className="text-xs text-stone-500">students with full access</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <span className="text-xs font-medium text-stone-500">Registered Google Accounts</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-stone-900">
              {registeredUsers.length}
            </span>
            <span className="text-xs text-stone-500">signed-in students</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
          <span className="text-xs font-medium text-stone-500">Library Access Rule</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold text-amber-800">
              10 Free / Level
            </span>
            <span className="text-xs text-stone-500">30 Free · 40 Pro</span>
          </div>
        </div>
      </div>

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
              Enter a student&apos;s Gmail address (even before they sign in) to unlock all 70+
              articles immediately.
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

      {/* Section 2: Registered Students & Subscriptions Directory */}
      <section className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-100 text-stone-800">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Students &amp; Subscriptions ({mergedDirectory.length})
              </h2>
              <p className="text-xs text-stone-500">
                Manage Pro access for registered Google users and pre-activated Gmail accounts.
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={studentSearch}
              onChange={(e) => setStudentSearch(e.target.value)}
              placeholder="Search by Gmail or name..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {mergedDirectory.length === 0 ? (
          <div className="text-center py-10 text-xs text-stone-500 border border-dashed border-stone-200 rounded-2xl">
            No matching student accounts or subscriptions yet. Use the form above to grant Pro to
            any Gmail address.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider text-2xs">
                  <th className="py-3 px-3">Student</th>
                  <th className="py-3 px-3">Gmail Address</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {mergedDirectory.map((entry) => {
                  const sub = entry.subscription;
                  const isActive = sub && sub.proUntil > now;
                  const daysLeft = isActive
                    ? Math.max(1, Math.ceil((sub.proUntil - now) / 86400000))
                    : 0;
                  const expiryDateStr = sub
                    ? new Date(sub.proUntil).toLocaleDateString()
                    : '';

                  return (
                    <tr key={entry.email} className="hover:bg-stone-50/80">
                      <td className="py-3.5 px-3 font-semibold text-stone-900">
                        <div className="flex items-center gap-2">
                          <span>{entry.displayName}</span>
                          {entry.email === ADMIN_EMAIL && (
                            <span className="px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 text-2xs font-bold">
                              Admin
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-mono text-stone-700">{entry.email}</td>
                      <td className="py-3.5 px-3">
                        {isActive ? (
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
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-medium text-2xs">
                            Free Tier (10/level)
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() =>
                              handleRowGrant(
                                entry.email,
                                entry.displayName,
                                30,
                                'Monthly Pro'
                              )
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold transition-colors"
                          >
                            +30d
                          </button>
                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() =>
                              handleRowGrant(
                                entry.email,
                                entry.displayName,
                                365,
                                'Annual Pro'
                              )
                            }
                            className="px-2.5 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-semibold transition-colors"
                          >
                            +1yr
                          </button>
                          {sub && (
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => handleRowRevoke(entry.email)}
                              title="Revoke Pro subscription"
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
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
