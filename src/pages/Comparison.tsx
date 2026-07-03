/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, Reel, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import { MOCK_REELS } from '../constants/mockData';
import {
  GitCompare,
  TrendingUp,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Info,
  Calendar,
  Layers
} from 'lucide-react';

interface ComparisonProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
  selectedComparisonReels?: [string, string];
}

export default function Comparison({ setCurrentPage, uploadedFiles, selectedComparisonReels }: ComparisonProps) {
  // Use pre-selected reels if passed, otherwise default to first two
  const [reelAId, setReelAId] = useState(selectedComparisonReels?.[0] || MOCK_REELS[0].id);
  const [reelBId, setReelBId] = useState(selectedComparisonReels?.[1] || MOCK_REELS[1].id);

  const reelA = MOCK_REELS.find((r) => r.id === reelAId) || MOCK_REELS[0];
  const reelB = MOCK_REELS.find((r) => r.id === reelBId) || MOCK_REELS[1];

  // Helper to calculate delta percentages
  const getDeltaPct = (valA: number, valB: number) => {
    if (valB === 0) return '0%';
    const pct = ((valA - valB) / valB) * 100;
    return `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`;
  };

  const isPositiveDelta = (valA: number, valB: number) => {
    return valA >= valB;
  };

  // Compare factors list
  const factors = [
    { label: 'Total Views', key: 'views' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Unique Reach', key: 'reach' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Total Likes', key: 'likes' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Total Shares', key: 'shares' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Total Saves', key: 'saves' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Total Comments', key: 'comments' as const, format: (v: number) => v.toLocaleString() },
    { label: 'Engagement Rate', key: 'engagementRate' as const, format: (v: number) => `${v}%` },
    { label: 'Completion Rate', key: 'completionRate' as const, format: (v: number) => `${v}%` }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Reel Side-by-Side Comparison
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Compare two reels side-by-side to isolate variables (e.g., hooks, caption density, hashtag category) driving divergence.
        </p>
      </div>

      {/* Selectors dropdown card */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between transition-theme">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Reel A selector */}
          <div className="flex-1 sm:w-64">
            <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Reel A (Target Focus)</label>
            <select
              value={reelAId}
              onChange={(e) => setReelAId(e.target.value)}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 p-2.5 text-xs text-slate-800 dark:text-slate-200 outline-none cursor-pointer focus:border-purple-500"
            >
              {MOCK_REELS.map((reel) => (
                <option key={reel.id} value={reel.id}>{reel.title}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center shrink-0 pt-4 sm:pt-0">
            <GitCompare className="w-5 h-5 text-pink-500 animate-pulse hidden sm:block" />
          </div>

          {/* Reel B selector */}
          <div className="flex-1 sm:w-64">
            <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Reel B (Comparison Baseline)</label>
            <select
              value={reelBId}
              onChange={(e) => setReelBId(e.target.value)}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 p-2.5 text-xs text-slate-800 dark:text-slate-200 outline-none cursor-pointer focus:border-purple-500"
            >
              {MOCK_REELS.map((reel) => (
                <option key={reel.id} value={reel.id}>{reel.title}</option>
              ))}
            </select>
          </div>
        </div>

        <span className="text-[10px] font-mono text-purple-500 bg-purple-500/10 px-2.5 py-1.5 rounded-full border border-purple-500/10 self-start sm:self-auto">
          Deltas Calculated Instantly
        </span>
      </div>

      {/* Visual Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reel A Focus Details */}
        <div className="bg-slate-50/50 dark:bg-slate-950 border border-slate-150 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-600" />
          <div>
            <div className="flex gap-4 items-start mb-4">
              <img
                src={reelA.thumbnail}
                alt={reelA.title}
                referrerPolicy="no-referrer"
                className="w-16 h-24 object-cover rounded-xl shrink-0 bg-slate-100 border border-slate-200/50 dark:border-slate-800"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200/20">{reelA.postedDate}</span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">{reelA.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{reelA.caption}</p>
              </div>
            </div>

            <div className="space-y-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-900/60 text-xs">
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wide">Applied Hashtags:</span>
              <div className="flex flex-wrap gap-1.5">
                {reelA.hashtags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reel B Focus Details */}
        <div className="bg-slate-50/50 dark:bg-slate-950 border border-slate-150 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500" />
          <div>
            <div className="flex gap-4 items-start mb-4">
              <img
                src={reelB.thumbnail}
                alt={reelB.title}
                referrerPolicy="no-referrer"
                className="w-16 h-24 object-cover rounded-xl shrink-0 bg-slate-100 border border-slate-200/50 dark:border-slate-800"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200/20">{reelB.postedDate}</span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">{reelB.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{reelB.caption}</p>
              </div>
            </div>

            <div className="space-y-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-900/60 text-xs">
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wide">Applied Hashtags:</span>
              <div className="flex flex-wrap gap-1.5">
                {reelB.hashtags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delta performance comparison list */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
        <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-6">Comparative Factor Matrix</h2>

        <div className="space-y-4">
          {factors.map((f) => {
            const valA = (reelA as any)[f.key];
            const valB = (reelB as any)[f.key];
            const isPos = isPositiveDelta(valA, valB);
            const delta = getDeltaPct(valA, valB);

            return (
              <div key={f.key} className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                {/* Metric Title Label */}
                <div className="w-40 shrink-0">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{f.label}</span>
                </div>

                {/* Progress Visual Comparison Row */}
                <div className="flex-1 flex items-center gap-4">
                  <span className="font-mono text-purple-400 font-bold w-20 text-right">{f.format(valA)}</span>
                  <div className="flex-1 bg-slate-100 dark:bg-slate-900 h-3 rounded-full overflow-hidden flex">
                    <div
                      className="bg-purple-600 h-full rounded-l-full border-r border-white/20"
                      style={{ width: `${(valA / (valA + valB || 1)) * 100}%` }}
                    />
                    <div
                      className="bg-pink-500 h-full rounded-r-full"
                      style={{ width: `${(valB / (valA + valB || 1)) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-pink-500 font-bold w-20">{f.format(valB)}</span>
                </div>

                {/* Delta Percent Badge */}
                <div className="w-24 text-right shrink-0">
                  <span
                    className={`inline-flex items-center gap-0.5 px-2 py-1 rounded-lg font-mono font-bold text-[10px] ${
                      isPos
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}
                  >
                    {isPos ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                    {delta}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic comparison text summary */}
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 text-xs flex gap-3">
          <Sparkles className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-800 dark:text-slate-200">Comparison Evaluation Summary:</span>
            <p className="text-slate-500 dark:text-slate-400 leading-normal">
              Reel A (<span className="font-medium text-slate-700 dark:text-slate-300">"{reelA.title.slice(0, 30)}..."</span>) drove higher views and saves, indicating powerful search indexing signals. However, Reel B (<span className="font-medium text-slate-700 dark:text-slate-300">"{reelB.title.slice(0, 30)}..."</span>) had higher engagement and completions.
            </p>
            <span className="font-semibold block text-[10px] text-pink-500 uppercase tracking-wider">
              Recommendation: Standardize Reel A's thumbnail/hashtag configuration, but copy Reel B's word count hooks!
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="comparison" />
    </div>
  );
}
