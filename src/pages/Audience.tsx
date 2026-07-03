/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import {
  MOCK_AUDIENCE_AGE,
  MOCK_AUDIENCE_GENDER,
  MOCK_AUDIENCE_COUNTRIES,
  MOCK_AUDIENCE_CITIES
} from '../constants/mockData';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Users2,
  Globe2,
  MapPin,
  TrendingUp,
  Activity,
  UserCheck,
  ChevronRight
} from 'lucide-react';

interface AudienceProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Audience({ setCurrentPage, uploadedFiles }: AudienceProps) {
  // Simple summary cards
  const summaryCards = [
    { label: 'Follower Base', value: '45.2K', change: '+8.4%', icon: Users2, color: '#f9ce34' },
    { label: 'Avg Viewer Retention', value: '64.2%', change: '+5.1%', icon: Activity, color: '#ee2a7b' },
    { label: 'Profile Actions', value: '2,841', change: '+12.5%', icon: UserCheck, color: '#6228d7' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Audience Insights
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Explore follower and viewer characteristics. Tailor content to match your dominant age, gender, and geographical brackets.
        </p>
      </div>

      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl p-5 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">{card.label}</span>
                <span className="text-2xl font-display font-extrabold text-slate-800 dark:text-slate-100 block">{card.value}</span>
                <span className="text-[10px] font-bold text-emerald-500">{card.change} this week</span>
              </div>
              <div className="p-3.5 rounded-xl text-white" style={{ backgroundColor: card.color }}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid containing Demographic Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Age Groups Bar Chart */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Age Range Distribution</h2>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">Relative percentage share per group</span>
              </div>
              <span className="text-[10px] font-mono text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">
                Mock Bar Chart
              </span>
            </div>

            <div className="h-60 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_AUDIENCE_AGE} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.15)" />
                  <XAxis dataKey="range" stroke="#9ca3af" fontSize={10} tickLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={10} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="percentage" fill="#6228d7" radius={[4, 4, 0, 0]} name="Audience %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
            *This chart will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>

        {/* Gender Shares Donut Chart */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Gender Breakdown</h2>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">Estimated gender shares among viewers</span>
              </div>
              <span className="text-[10px] font-mono text-pink-500 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/10">
                Mock Donut
              </span>
            </div>

            <div className="h-48 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={MOCK_AUDIENCE_GENDER}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="percentage"
                  >
                    <Cell fill="#6228d7" />
                    <Cell fill="#ee2a7b" />
                    <Cell fill="#f9ce34" />
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
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-center text-[10px] font-mono">
              {MOCK_AUDIENCE_GENDER.map((item, i) => (
                <div key={i} className="flex flex-col items-center bg-slate-50/50 dark:bg-slate-900/30 p-2 rounded-xl border border-slate-100 dark:border-slate-900/40">
                  <span className="font-semibold text-slate-400">{item.gender}</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
            *This chart will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>
      </div>

      {/* Geographies progress panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Countries Progress list */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
          <div className="flex items-center gap-2 mb-6">
            <Globe2 className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Top Geographies (Country)</h2>
          </div>

          <div className="space-y-4">
            {MOCK_AUDIENCE_COUNTRIES.map((country, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-700 dark:text-slate-300">{country.name}</span>
                  <span className="font-mono font-bold text-slate-500">{country.percentage}%</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                    style={{ width: `${country.percentage * 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-6 text-center">
            *This list will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>

        {/* Cities Progress list */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Top Geographies (City)</h2>
          </div>

          <div className="space-y-4">
            {MOCK_AUDIENCE_CITIES.map((city, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-700 dark:text-slate-300">{city.name}</span>
                  <span className="font-mono font-bold text-slate-500">{city.percentage}%</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-orange-400 h-full rounded-full"
                    style={{ width: `${city.percentage * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-6 text-center">
            *This list will later be generated using Pandas and Matplotlib after processing the uploaded dataset.
          </p>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="audience" />
    </div>
  );
}
