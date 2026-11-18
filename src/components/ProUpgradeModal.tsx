/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Lock,
  Sparkles,
  CheckCircle2,
  X,
  LogIn,
  Copy,
  Check,
  Send,
  BookOpen,
  FileDown,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { Article, SubscriptionSettings } from '../types';

interface ProUpgradeModalProps {
  article: Article | null;
  onClose: () => void;
  currentUser: User | null;
  onSignInWithGoogle: () => void;
  subscriptionSettings: SubscriptionSettings;
}

export const ProUpgradeModal: React.FC<ProUpgradeModalProps> = ({
  article,
  onClose,
  currentUser,
  onSignInWithGoogle,
  subscriptionSettings,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!article) return null;

  const cleanTelegramHandle = subscriptionSettings.telegramUsername
    .trim()
    .replace(/^https?:\/\/t\.me\//i, '')
    .replace(/^@/, '');

  const studentEmail = currentUser?.email || '';
  const telegramMessage = studentEmail
    ? `Assalomu alaykum! I would like to activate Articles ED Pro (${subscriptionSettings.monthlyPriceText}). My Google account email is: ${studentEmail}`
    : `Assalomu alaykum! I would like to activate Articles ED Pro (${subscriptionSettings.monthlyPriceText}).`;

  const telegramHref = cleanTelegramHandle
    ? `https://t.me/${cleanTelegramHandle}?text=${encodeURIComponent(telegramMessage)}`
    : 'https://t.me/';

  const handleCopyEmail = async () => {
    if (!studentEmail) return;
    try {
      await navigator.clipboard.writeText(studentEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pro-upgrade-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-stone-200 max-w-lg w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close Pro subscription modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Articles ED Pro · Monthly Subscription</span>
          </div>

          <h2
            id="pro-upgrade-modal-title"
            className="font-serif text-2xl font-bold text-white leading-snug"
          >
            Unlock All 70+ Graded Articles
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed">
            The first 10 articles in each level (B1, B2, C1) are free. Upgrade to Pro to read and
            practice every article in the library.
          </p>

          {/* Locked Article Preview Pill */}
          <div className="mt-4 p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-2xs uppercase tracking-wider text-amber-300 font-bold">
                <span>{article.level} Pro Article</span>
                <span>·</span>
                <span className="truncate">{article.category}</span>
              </div>
              <p className="font-serif font-bold text-sm text-white truncate mt-0.5">
                {article.title}
              </p>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
              <span>All 30 B1, 30 B2 &amp; 10 C1 Articles</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Interactive Quizzes &amp; Cloze Drills</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <FileDown className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Printable PDF Study Sheets</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Cloud Vocabulary Notebook Sync</span>
            </div>
          </div>

          {/* Pricing & Instructions Box */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Monthly Subscription
              </span>
              <span className="font-serif text-lg font-bold text-stone-950">
                {subscriptionSettings.monthlyPriceText}
              </span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              {subscriptionSettings.paymentInstructions}
            </p>
          </div>

          {/* Step 1: Google Sign-In Status */}
          <div className="space-y-2">
            <span className="text-2xs font-bold uppercase tracking-wider text-stone-400 block">
              Step 1 · Your Google Account
            </span>
            {currentUser?.email ? (
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
                <div className="min-w-0">
                  <span className="text-stone-500 block text-2xs">Signed in with Gmail:</span>
                  <span className="font-mono font-bold text-stone-900 truncate block">
                    {currentUser.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-emerald-300 font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-600" />
                      <span>Copy Gmail</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-stone-100/80 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-stone-600">
                  Sign in with Google first so the admin can activate Pro on your Gmail address.
                </p>
                <button
                  onClick={onSignInWithGoogle}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs shrink-0 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            )}
          </div>

          {/* Step 2: Contact Admin on Telegram */}
          <div className="space-y-2">
            <span className="text-2xs font-bold uppercase tracking-wider text-stone-400 block">
              Step 2 · Activate via Telegram
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>
                  Message {subscriptionSettings.telegramUsername} on Telegram
                </span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold transition-colors"
              >
                Continue Free Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
