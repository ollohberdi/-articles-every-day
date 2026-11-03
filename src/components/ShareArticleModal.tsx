/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Link2, Check, Copy, Share2, ExternalLink, BookOpen } from 'lucide-react';
import { Article } from '../types';
import { buildArticleShareUrl } from '../utils/quizLogic';

interface ShareArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

/**
 * Copies text to the clipboard with an iframe-safe fallback
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback below for restricted iframe environments
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(textArea);
    return copied;
  } catch {
    return false;
  }
}

export const ShareArticleModal: React.FC<ShareArticleModalProps> = ({ article, onClose }) => {
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedPublic, setCopiedPublic] = useState(false);

  const shareUrl = article
    ? buildArticleShareUrl(window.location.href, article)
    : '';

  const isAiStudioDev =
    typeof window !== 'undefined' && window.location.hostname.startsWith('ais-dev-');

  const publicShareUrl =
    article && isAiStudioDev
      ? buildArticleShareUrl(
          window.location.href.replace('://ais-dev-', '://ais-pre-'),
          article
        )
      : null;

  useEffect(() => {
    if (!article) return;
    const urlToCopy = publicShareUrl || shareUrl;
    copyTextToClipboard(urlToCopy).then((ok) => {
      if (ok) {
        if (publicShareUrl) {
          setCopiedPublic(true);
          setTimeout(() => setCopiedPublic(false), 3000);
        } else {
          setCopiedPrimary(true);
          setTimeout(() => setCopiedPrimary(false), 3000);
        }
      }
    });
  }, [article, shareUrl, publicShareUrl]);

  if (!article) return null;

  const handleCopy = async (url: string, type: 'primary' | 'public') => {
    await copyTextToClipboard(url);
    if (type === 'public') {
      setCopiedPublic(true);
      setCopiedPrimary(false);
      setTimeout(() => setCopiedPublic(false), 2500);
    } else {
      setCopiedPrimary(true);
      setCopiedPublic(false);
      setTimeout(() => setCopiedPrimary(false), 2500);
    }
  };

  const levelBadgeColor = {
    B1: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    B2: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    C1: 'bg-purple-50 text-purple-800 border-purple-200',
  }[article.level];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-article-title"
      onClick={onClose}
    >
      <div
        className="bg-white border border-stone-200 rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h2 id="share-article-title" className="font-serif text-lg font-bold text-stone-950">
                Share Exact Article Link
              </h2>
              <p className="text-xs text-stone-500">
                Anyone opening this link will go straight to this article instead of the home page.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close share dialog"
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Target Article Card Preview */}
        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className={`font-bold px-2 py-0.5 rounded border text-2xs ${levelBadgeColor}`}>
              {article.level}
            </span>
            <span>·</span>
            <span className="font-medium text-stone-600">{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base leading-snug">
            {article.title}
          </h3>
        </div>

        {/* Public Shared Link (if inside AI Studio preview) */}
        {publicShareUrl && (
          <div className="space-y-1.5">
            <label
              htmlFor="public-share-url-input"
              className="block text-xs font-semibold text-stone-700"
            >
              Public Shared Article Link (for students &amp; readers)
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Link2 className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="public-share-url-input"
                  type="text"
                  readOnly
                  value={publicShareUrl}
                  onFocus={(e) => e.currentTarget.select()}
                  className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500"
                />
              </div>
              <button
                onClick={() => handleCopy(publicShareUrl, 'public')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                  copiedPublic
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                {copiedPublic ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Current Environment Direct Link */}
        <div className="space-y-1.5">
          <label
            htmlFor="direct-share-url-input"
            className="block text-xs font-semibold text-stone-700"
          >
            {publicShareUrl ? 'Direct Preview Link (current session)' : 'Direct Article Link'}
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Link2 className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="direct-share-url-input"
                type="text"
                readOnly
                value={shareUrl}
                onFocus={(e) => e.currentTarget.select()}
                className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              onClick={() => handleCopy(shareUrl, 'primary')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                copiedPrimary
                  ? 'bg-emerald-600 text-white'
                  : publicShareUrl
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {copiedPrimary ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Parameter: <code className="font-mono text-stone-700">?article={article.id}</code></span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
