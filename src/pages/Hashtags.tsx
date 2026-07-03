/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import { MOCK_HASHTAGS } from '../constants/mockData';
import {
  Hash,
  Sparkles,
  Award,
  TrendingUp,
  LineChart,
  Grid,
  Info,
  ArrowUpRight
} from 'lucide-react';

interface HashtagsProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Hashtags({ setCurrentPage, uploadedFiles }: HashtagsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Highlighting top categories
  const categories = [
    { label: 'Broad Coverage', count: 3, icon: Grid, desc: 'Large global tags (e.g., #python, #coding) that place content in high competition streams.' },
    { label: 'Niche Keywords', count: 2, icon: Award, desc: 'Highly targeted developer tags (e.g., #pandas, #nstudent) with dense high-value followers.' },
    { label: 'Viral Accelerators', count: 2, icon: Sparkles, desc: 'Trend-based visual or aesthetic tags (e.g., #setup, #workspace) driving rapid sharing.' }
  ];

  const activeHashtagStats = selectedTag
    ? MOCK_HASHTAGS.find((h) => h.tag === selectedTag)
    : MOCK_HASHTAGS[1]; // default to #pandas

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Hashtag Density Suite
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Track categorization signals. Classify hashtags into Niche, Broad, and Viral categories to maximize outreach algorithms.
        </p>
      </div>

      {/* Main Tag Cloud and Detail Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Visual Tag Cloud */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Interactive Hashtag Cloud</h2>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">Sized by usage count. Click to inspect precise performance data.</span>
              </div>
              <span className="text-[10px] text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-full font-mono border border-purple-500/10">
                Clickable Cloud
              </span>
            </div>

            {/* Custom SVG Tag Cloud mapping */}
            <div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-900/60 min-h-[220px] flex flex-wrap gap-4 items-center justify-center relative overflow-hidden">
              <div className="absolute top-12 left-12 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-12 right-12 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />

              {MOCK_HASHTAGS.map((tagObj) => {
                const isSelected = selectedTag === tagObj.tag;
                // Sizing based on usage count
                const fontSize = tagObj.usageCount >= 20 ? 'text-2xl sm:text-3xl font-extrabold' : tagObj.usageCount >= 15 ? 'text-lg sm:text-xl font-bold' : 'text-xs sm:text-sm font-medium';
                // Color based on category
                const colorClass = tagObj.category === 'Viral'
                  ? 'text-pink-500'
                  : tagObj.category === 'Niche'
                  ? 'text-purple-500 dark:text-purple-400'
                  : 'text-slate-500 dark:text-slate-400';

                return (
                  <button
                    key={tagObj.tag}
                    onClick={() => setSelectedTag(tagObj.tag)}
                    className={`px-3 py-1.5 rounded-xl transition-all hover:scale-105 select-none focus:outline-none flex items-center gap-1 ${fontSize} ${colorClass} ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-950/40 ring-2 ring-pink-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-900/60 bg-transparent'
                    }`}
                  >
                    <Hash className="w-3.5 h-3.5 shrink-0" />
                    {tagObj.tag.replace('#', '')}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-6 text-center">
            *This cloud uses mock weights. The actual Python code will count matches and scale font attributes dynamically using Matplotlib or wordcloud.
          </p>
        </div>

        {/* Selected Hashtag Inspector detail card */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          {activeHashtagStats ? (
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-900 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-pink-500">
                    <Hash className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-slate-800 dark:text-slate-200">
                    {activeHashtagStats.tag}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-pink-500/10 text-pink-500 rounded-full border border-pink-500/10">
                  {activeHashtagStats.category}
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50/50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-900/60">
                    <span className="text-slate-400 block mb-1">Times Used</span>
                    <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{activeHashtagStats.usageCount} posts</span>
                  </div>
                  <div className="bg-slate-50/50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-900/60">
                    <span className="text-slate-400 block mb-1">Growth Trend</span>
                    <span className="text-lg font-bold text-emerald-500">+{activeHashtagStats.growthTrend}%</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1 font-mono uppercase tracking-wide">Average Views Target</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-100 dark:bg-slate-900 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                          style={{ width: `${Math.min((activeHashtagStats.avgViews / 400000) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="font-bold shrink-0">{(activeHashtagStats.avgViews / 1000).toFixed(0)}K</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-1 font-mono uppercase tracking-wide">Average Engagement Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-100 dark:bg-slate-900 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-orange-400 h-full rounded-full"
                          style={{ width: `${Math.min((activeHashtagStats.avgEngagement / 25) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="font-bold shrink-0">{activeHashtagStats.avgEngagement}%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-900/80 text-[10px] text-slate-500 leading-normal flex gap-1.5 items-start">
                  <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Observation:</strong> This category functions best as a validation anchor. Niche hashtags often drive 2x deeper saves, even when views are lower.
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              Select a tag on the cloud to inspect metrics.
            </div>
          )}

          <button
            onClick={() => setCurrentPage('upload')}
            className="mt-6 w-full text-xs font-semibold text-pink-500 hover:text-white hover:bg-pink-600 border border-pink-500/20 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
          >
            Sourcing &amp; Raw CSV Headers
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories summary row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-400 font-mono">Active Tags: {cat.count}</span>
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-slate-100 mb-1">{cat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="hashtags" />
    </div>
  );
}
