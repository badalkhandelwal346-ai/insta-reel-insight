/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import {
  Eye,
  Users,
  Percent,
  TrendingUp,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Clock,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface AnalyticsProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Analytics({ setCurrentPage, uploadedFiles }: AnalyticsProps) {
  const [activeMetric, setActiveMetric] = useState<'views' | 'reach' | 'engagement'>('views');

  // Detailed Metrics list
  const detailMetrics = [
    { key: 'views', label: 'Total Views', value: '1.24M', icon: Eye, color: '#f9ce34', change: '+14.2%', desc: 'Total video play cycles.' },
    { key: 'reach', label: 'Unique Reach', value: '842.6K', icon: Users, color: '#ee2a7b', change: '+18.5%', desc: 'Unique Instagram profile impressions.' },
    { key: 'engagement', label: 'Engagement Rate', value: '8.45%', icon: Percent, color: '#6228d7', change: '+1.1%', desc: 'Engagement per view multiplier.' },
    { key: 'saves', label: 'Saved Count', value: '48.9K', icon: Bookmark, color: '#2563eb', change: '+22.4%', desc: 'Indicates evergreen reference value.' },
    { key: 'shares', label: 'Shared Count', value: '37.1K', icon: Share2, color: '#10b981', change: '+32.8%', desc: 'Direct factor for algorithmic virality.' },
    { key: 'watchTime', label: 'Avg Watch Time', value: '14.2s', icon: Clock, color: '#f59e0b', change: '+5.6%', desc: 'Average viewer focus duration.' }
  ];

  // Recharts main trend line/area dataset
  const trendData = [
    { date: 'Post 1', views: 85000, reach: 62000, engagement: 7.8, likes: 6200, shares: 1200 },
    { date: 'Post 2', views: 120000, reach: 91000, engagement: 8.2, likes: 9800, shares: 3500 },
    { date: 'Post 3', views: 180000, reach: 114000, engagement: 8.5, likes: 12400, shares: 4500 },
    { date: 'Post 4', views: 240000, reach: 168000, engagement: 8.1, likes: 18200, shares: 7200 },
    { date: 'Post 5', views: 310000, reach: 220000, engagement: 9.2, likes: 29500, shares: 8900 },
    { date: 'Post 6', views: 280000, reach: 198000, engagement: 8.9, likes: 24100, shares: 15600 },
    { date: 'Post 7', views: 420000, reach: 310000, engagement: 9.8, likes: 38200, shares: 12400 }
  ];

  // Recharts engagement breakdown pie dataset
  const breakdownData = [
    { name: 'Likes', value: 138400, color: '#ee2a7b' },
    { name: 'Shares', value: 54200, color: '#6228d7' },
    { name: 'Saves', value: 48900, color: '#2563eb' },
    { name: 'Comments', value: 3550, color: '#f9ce34' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Core Metrics Suite
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Deep-dive analysis on individual engagement metrics, view correlations, and watch time performance.
        </p>
      </div>

      {/* Dynamic Metric Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {detailMetrics.map((met) => {
          const Icon = met.icon;
          const isSelected = activeMetric === met.key || (activeMetric === 'views' && met.key === 'views') || (activeMetric === 'reach' && met.key === 'reach') || (activeMetric === 'engagement' && met.key === 'engagement');
          const isClickable = met.key === 'views' || met.key === 'reach' || met.key === 'engagement';

          return (
            <button
              key={met.key}
              disabled={!isClickable}
              onClick={() => isClickable && setActiveMetric(met.key as any)}
              className={`p-4 rounded-2xl text-left border shadow-sm transition-all flex flex-col justify-between ${
                isClickable ? 'cursor-pointer hover:shadow-md' : 'opacity-70 cursor-not-allowed'
              } ${
                isSelected && isClickable
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white'
                  : 'bg-white text-slate-800 border-slate-100 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-900'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div
                    className="p-1.5 rounded-lg text-white"
                    style={{ backgroundColor: met.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500">{met.change}</span>
                </div>
                <p className="text-[10px] font-mono font-medium text-slate-400 block uppercase tracking-wider">{met.label}</p>
                <p className="text-xl font-display font-extrabold mt-1">{met.value}</p>
              </div>
              <p className="text-[9px] text-slate-400 mt-2 line-clamp-2 leading-tight">{met.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Main Charts Block */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dynamic Metric Trend Over Time */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col transition-theme">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 uppercase">
                {activeMetric} Trend Over Time
              </h2>
              <span className="text-xs text-slate-400 dark:text-slate-500 block">Isolate performance spikes across recent uploads</span>
            </div>
            <div className="text-xs bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1 text-slate-500 dark:text-slate-400">
              Active Metric: <span className="font-bold text-pink-500 uppercase">{activeMetric}</span>
            </div>
          </div>

          <div className="h-72 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={activeMetric === 'views' ? '#f9ce34' : activeMetric === 'reach' ? '#ee2a7b' : '#6228d7'} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={activeMetric === 'views' ? '#f9ce34' : activeMetric === 'reach' ? '#ee2a7b' : '#6228d7'} stopOpacity={0}/>
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
                <Area
                  type="monotone"
                  dataKey={activeMetric}
                  stroke={activeMetric === 'views' ? '#f9ce34' : activeMetric === 'reach' ? '#ee2a7b' : '#6228d7'}
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#trendGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
            *This chart will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>

        {/* Engagement Breakdown Pie Chart */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-2">Engagement Share</h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 leading-relaxed">
              Comparison of active participation types across total interactions.
            </p>

            <div className="h-56 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={breakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {breakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-none">Total Action</span>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">245.1K</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
              {breakdownData.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="truncate">{item.name}: {item.value >= 1000 ? `${(item.value / 1000).toFixed(0)}k` : item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
            *This chart will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>
      </div>

      {/* Auxiliary bar chart explaining post reach factor comparisons */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Post Reach &amp; Virality Breakdown</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500 block">Direct comparison of unique reach versus raw likes per upload</span>
          </div>
          <span className="text-[10px] font-mono text-pink-500 dark:text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/10">
            Mock Plot (Recharts)
          </span>
        </div>

        <div className="h-64 sm:h-72 w-full text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="reach" fill="#ee2a7b" radius={[4, 4, 0, 0]} name="Unique Reach" />
              <Bar dataKey="likes" fill="#f9ce34" radius={[4, 4, 0, 0]} name="Likes Driven" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
          *This chart will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
        </p>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="analytics" />
    </div>
  );
}
