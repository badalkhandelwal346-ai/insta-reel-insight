/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import { HOURLY_HEATMAP_DATA } from '../constants/mockData';
import {
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Info,
  Sliders,
  Compass
} from 'lucide-react';

interface BestTimeProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function BestTime({ setCurrentPage, uploadedFiles }: BestTimeProps) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ day: string; hour: string; value: number } | null>(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];

  // Best times data highlights
  const bestSlots = [
    { day: 'Tuesday', hour: '6:00 PM', score: '98%', volume: '11 posts', status: 'Optimal peak views' },
    { day: 'Thursday', hour: '12:00 PM', score: '88%', volume: '8 posts', status: 'High initial shares' },
    { day: 'Monday', hour: '6:00 PM', score: '90%', volume: '14 posts', status: 'Steady retention rate' }
  ];

  // Helper to color cells dynamically depending on score
  const getCellBg = (val: number) => {
    if (val >= 90) return 'bg-purple-600/90 dark:bg-purple-600 text-white';
    if (val >= 75) return 'bg-pink-500/80 dark:bg-pink-500/80 text-white';
    if (val >= 50) return 'bg-pink-500/40 dark:bg-pink-500/30 text-slate-800 dark:text-purple-300';
    if (val >= 25) return 'bg-purple-500/15 dark:bg-purple-500/10 text-slate-500 dark:text-slate-400';
    return 'bg-slate-100 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
            Optimal Posting Slots
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Pinpoint high-velocity posting brackets by mapping views against historical day and hour indicators.
          </p>
        </div>
        <div className="flex gap-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800">
            <Compass className="w-4 h-4 text-purple-500" /> Timezone: Creator Local (UTC+5:30)
          </span>
        </div>
      </div>

      {/* Top Advisory Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bestSlots.map((slot, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            {/* Gradient border indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-purple-500 font-bold uppercase tracking-wider">Rank #{i + 1} Golden Slot</span>
                <span className="text-xs text-emerald-500 font-bold flex items-center gap-0.5">
                  <Sparkles className="w-3 h-3" />
                  {slot.score} Score
                </span>
              </div>
              <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                {slot.day} @ {slot.hour}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{slot.status}</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-900/60 text-[10px] text-slate-400">
              <span>Analysis Volume: {slot.volume}</span>
              <span className="flex items-center gap-0.5 hover:text-pink-400 cursor-pointer">
                Timeline <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2D Interactive Heatmap Grid */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Weekly Engagement Distribution Heatmap</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500 block">Click on any colored bracket cell to view individual post density metrics</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono shrink-0">
            <span className="text-slate-400">Cold</span>
            <div className="flex gap-1">
              <span className="w-3.5 h-3.5 rounded bg-purple-500/10" />
              <span className="w-3.5 h-3.5 rounded bg-pink-500/40" />
              <span className="w-3.5 h-3.5 rounded bg-pink-500/80" />
              <span className="w-3.5 h-3.5 rounded bg-purple-600" />
            </div>
            <span className="text-slate-400">Viral Peak</span>
          </div>
        </div>

        {/* Heatmap Grid Layout */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[640px] space-y-2">
            {/* Header X-axis (Hours) */}
            <div className="flex items-center">
              <div className="w-16 shrink-0 text-xs font-mono font-bold text-slate-400 text-center">Day</div>
              <div className="flex-1 grid grid-cols-8 gap-2">
                {hours.map((hr) => (
                  <div key={hr} className="text-xs font-mono font-bold text-slate-400 text-center">{hr}</div>
                ))}
              </div>
            </div>

            {/* Grid rows */}
            {daysOfWeek.map((day) => {
              const isRowSelected = selectedDay === day;
              return (
                <div key={day} className="flex items-center">
                  <button
                    onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                    className={`w-16 shrink-0 text-xs font-bold text-left px-2 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 ${
                      isRowSelected ? 'text-pink-500 bg-pink-500/5' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {day}
                  </button>

                  <div className="flex-1 grid grid-cols-8 gap-2">
                    {hours.map((hr, idx) => {
                      // Get simulated heatmap value from our mock row data
                      const matchedHourRow = HOURLY_HEATMAP_DATA[idx];
                      const val = matchedHourRow ? (matchedHourRow as any)[day] || 15 : 15;
                      const cellBg = getCellBg(val);
                      const isCellActive = selectedCell?.day === day && selectedCell?.hour === hr;

                      return (
                        <button
                          key={hr}
                          onClick={() => setSelectedCell({ day, hour: hr, value: val })}
                          className={`h-12 rounded-xl text-center flex flex-col items-center justify-center font-mono text-[10px] font-bold transition-all hover:scale-[1.05] focus:outline-none relative ${cellBg} ${
                            isCellActive ? 'ring-2 ring-pink-500 scale-[1.05] shadow-lg shadow-purple-900/30' : ''
                          }`}
                        >
                          <span>{val}%</span>
                          <span className="text-[8px] opacity-75 font-normal">Score</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic heatmap inspect card drawer */}
        {selectedCell && (
          <div className="mt-6 p-4 rounded-2xl bg-slate-55 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-scale-up">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-pink-400 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Heatmap Inspector: {selectedCell.day}s around {selectedCell.hour}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                  Posts uploaded in this window reached an average of <span className="font-semibold text-pink-500">{(selectedCell.value * 8.42).toFixed(0)} accounts</span>, with an engagement rate multiplier of <span className="font-semibold text-purple-400">{(selectedCell.value * 0.12).toFixed(2)}%</span>.
                </p>
              </div>
            </div>
            <div className="flex gap-2 self-start sm:self-auto shrink-0">
              <button
                onClick={() => setSelectedCell(null)}
                className="text-xs text-slate-400 hover:text-white bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800"
              >
                Dismiss
              </button>
              <button
                onClick={() => setCurrentPage('upload')}
                className="text-xs text-white bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1.5 rounded-lg shadow font-medium"
              >
                Inspect Original Logs
              </button>
            </div>
          </div>
        )}

        <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-4 text-center">
          *The heatmap matrix above is a client visualization. In the eventual production build, Python will process all raw CSV dates, normalize timezones, pivot times, and supply raw arrays.
        </p>
      </div>

      {/* Advisory warning panel */}
      <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-400 flex gap-3">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
        <div className="space-y-1">
          <span className="font-bold flex items-center gap-1">
            <Info className="w-3.5 h-3.5" /> Core Statistical Trap: Sample Size Bias
          </span>
          <p className="text-slate-500 dark:text-slate-400 leading-normal">
            If you only have 1 post uploaded on Sunday at 9 AM, and that post went viral because of a unique trending topic, your Sunday 9 AM slot will look like a "100% optimal peak" when it was actually a lucky outlier.
          </p>
          <span className="font-semibold block text-[10px] text-amber-600/80 dark:text-amber-400/80">
            Fix: In your Pandas cleaning pipeline, always group by (day, hour) and filter out categories where count &lt; 3!
          </span>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="best-time" />
    </div>
  );
}
