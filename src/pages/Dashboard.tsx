/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId, Reel, UploadedFile } from '../types';
import { MOCK_METRICS, MOCK_REELS, CHART_TREND_DATA } from '../constants/mockData';
import LearningGuide from '../components/LearningGuide';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

interface DashboardProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
  setSelectedComparisonReels?: (reels: [string, string]) => void;
}

export default function Dashboard({ setCurrentPage, uploadedFiles, setSelectedComparisonReels }: DashboardProps) {
  const isDatasetLoaded = uploadedFiles.length > 0;

  // Custom function to quickly set up compare reels and jump page
  const handleQuickCompare = (firstId: string) => {
    if (setSelectedComparisonReels) {
      setSelectedComparisonReels([firstId, MOCK_REELS[1]?.id || '']);
      setCurrentPage('comparison');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Upper Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
            Platform Overview
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time visual monitoring of mock Reels aggregates and creator insights.
          </p>
        </div>
        <button
          onClick={() => setCurrentPage('upload')}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-purple-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          {isDatasetLoaded ? 'Update Dataset' : 'Upload Sourcing CSV'}
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_METRICS.map((metric, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 shadow-sm flex flex-col justify-between transition-theme"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">{metric.label}</span>
                <span
                  className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    metric.isPositive
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400'
                  }`}
                >
                  {metric.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {metric.change}
                </span>
              </div>
              <p className="text-3xl font-display font-bold mt-2 text-slate-900 dark:text-slate-100">{metric.value}</p>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 leading-relaxed">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Graph and Recommendations split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Growth Graph Area */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col transition-theme">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Reach Growth Over Time</h2>
              <span className="text-xs text-slate-400 dark:text-slate-500 block">Showing aggregate impressions across the last 7 uploads</span>
            </div>
            <span className="text-[10px] font-mono text-purple-500 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">
              Mock Plot (Recharts)
            </span>
          </div>

          <div className="h-64 sm:h-72 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ee2a7b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ee2a7b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.15)" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={10} tickLine={false} />
                <YAxis stroke="#9ca3af" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="reach" stroke="#ee2a7b" strokeWidth={2.5} fillOpacity={1} fill="url(#viewsGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
            *This chart will later be generated using Pandas and Matplotlib after processing your uploaded dataset.
          </p>
        </div>

        {/* Dynamic Insights / Recommendations Cards */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Creator Advisory
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-purple-500/5 to-pink-500/5 border border-purple-500/10 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
                  <Clock className="w-4 h-4 text-pink-500" />
                  Upcoming Golden Slot
                </span>
                <p className="text-slate-500 dark:text-slate-400 leading-normal">
                  Your peak weekly engagement window is approaching. Schedule your next Reel for <span className="font-semibold text-pink-500">Tuesday at 5:00 PM local time</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-tr from-pink-500/5 to-orange-500/5 border border-pink-500/10 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  Double Down on Hashtags
                </span>
                <p className="text-slate-500 dark:text-slate-400 leading-normal">
                  Posts using <span className="font-semibold text-purple-400">#pandas</span> generate 1.2x higher views compared to general tech terms. Maintain niche density!
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200/50 dark:from-slate-900 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
                  📝 Optimal Caption Structure
                </span>
                <p className="text-slate-500 dark:text-slate-400 leading-normal">
                  Short captions with exactly 2 emojis and 1 loop hook generated your top 3 viral peaks. Limit verbose logs.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('best-time')}
            className="mt-6 w-full text-xs font-semibold text-pink-500 hover:text-white hover:bg-pink-600 border border-pink-500/20 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
          >
            Explore Best Posting Times
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Uploads Table / Cards */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Recent Upload Log</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500 block">Isolate individual factors by examining post-by-post statistics</span>
          </div>
          <button
            onClick={() => setCurrentPage('analytics')}
            className="text-xs text-pink-500 hover:underline font-semibold flex items-center gap-1"
          >
            View Full Core Analytics
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_REELS.slice(0, 3).map((reel) => (
            <div
              key={reel.id}
              className="rounded-2xl border border-slate-100 dark:border-slate-900/80 hover:border-purple-500/20 p-4 bg-slate-50/50 dark:bg-slate-900/20 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-3 mb-3">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-20 object-cover rounded-lg bg-slate-100 shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400">{reel.postedDate}</span>
                    <h3 className="text-xs font-bold line-clamp-2 text-slate-800 dark:text-slate-200">{reel.title}</h3>
                    <p className="text-[10px] text-pink-500 font-semibold">ER: {reel.engagementRate}%</p>
                  </div>
                </div>

                {/* Engagement icons grid */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-100 dark:border-slate-900 text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-red-500" /> {reel.likes >= 1000 ? `${(reel.likes / 1000).toFixed(1)}k` : reel.likes}</span>
                  <span className="flex items-center gap-1"><Share2 className="w-3 h-3 text-emerald-500" /> {reel.shares >= 1000 ? `${(reel.shares / 1000).toFixed(1)}k` : reel.shares}</span>
                  <span className="flex items-center gap-1"><Bookmark className="w-3 h-3 text-blue-500" /> {reel.saves >= 1000 ? `${(reel.saves / 1000).toFixed(1)}k` : reel.saves}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 text-orange-500" /> {reel.comments}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-900/60">
                <button
                  onClick={() => handleQuickCompare(reel.id)}
                  className="flex-1 text-center text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 py-1.5 rounded-lg transition-colors"
                >
                  Quick Compare
                </button>
                <button
                  onClick={() => setCurrentPage('comparison')}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  title="Full Compare"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="dashboard" />
    </div>
  );
}
