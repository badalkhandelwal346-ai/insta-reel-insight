/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import {
  Settings2,
  User,
  Instagram,
  Bell,
  Sliders,
  CheckCircle,
  HelpCircle,
  Clock,
  KeyRound,
  Compass
} from 'lucide-react';

interface SettingsProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Settings({ setCurrentPage, uploadedFiles }: SettingsProps) {
  const [targetViews, setTargetViews] = useState('200000');
  const [targetEr, setTargetEr] = useState('8.5');
  const [timezone, setTimezone] = useState('UTC+05:30 (Asia/Kolkata)');
  const [showSaved, setShowSaved] = useState(false);

  const handleSaveSettings = (e: FormEvent) => {
    e.preventDefault();
    setShowSaved(true);
    setTimeout(() => {
      setShowSaved(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Platform Configuration
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Define KPI goals, parameter variables, timezone benchmarks, and connected social pipelines.
        </p>
      </div>

      <form onSubmit={handleSaveSettings} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile & Parameter variables Form */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm space-y-6 transition-theme">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-900">
            <User className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Account Profile &amp; Goals</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300">
            {/* Username */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Instagram Account</label>
              <input
                type="text"
                readOnly
                value="@badal_k"
                className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-2.5 outline-none font-mono font-semibold"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Contact Email</label>
              <input
                type="email"
                readOnly
                value="badal.k25111@nst.rishihood.edu.in"
                className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-2.5 outline-none font-mono"
              />
            </div>

            {/* Timezone */}
            <div className="sm:col-span-2">
              <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Primary Timezone (For Heatmaps)</label>
              <div className="relative flex items-center">
                <Compass className="absolute left-3 w-4 h-4 text-slate-400" />
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 pl-10 pr-4 py-2.5 outline-none font-sans cursor-pointer focus:border-purple-500 text-slate-800 dark:text-slate-200"
                >
                  <option value="UTC+05:30 (Asia/Kolkata)">UTC+05:30 (Asia/Kolkata)</option>
                  <option value="UTC-08:00 (US/Pacific)">UTC-08:00 (US/Pacific)</option>
                  <option value="UTC+00:00 (GMT/London)">UTC+00:00 (GMT/London)</option>
                </select>
              </div>
            </div>

            {/* Benchmark target views */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Viral Views Threshold Target</label>
              <input
                type="number"
                value={targetViews}
                onChange={(e) => setTargetViews(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-2.5 outline-none font-mono focus:border-purple-500 text-slate-800 dark:text-slate-200"
              />
            </div>

            {/* Benchmark target ER */}
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Target Engagement Benchmark (%)</label>
              <input
                type="number"
                step="0.1"
                value={targetEr}
                onChange={(e) => setTargetEr(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-2.5 outline-none font-mono focus:border-purple-500 text-slate-800 dark:text-slate-200"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-900/60 text-xs">
            <span className="text-slate-400 font-medium">Auto-saves parameters to client variables</span>
            <div className="flex items-center gap-3">
              {showSaved && (
                <span className="text-emerald-500 font-bold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Parameters Updated!
                </span>
              )}
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-5 py-2 rounded-xl shadow-lg shadow-purple-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>

        {/* Connected integrations status card */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-900 mb-6">
              <Instagram className="w-5 h-5 text-pink-500" />
              <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 font-sans">Sourcing Pipelines</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-800 dark:text-slate-200">Instagram Graph API</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Status: Connected as Creator</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 text-xs flex items-center justify-between opacity-60">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-800 dark:text-slate-200">Meta Business Suite SDK</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Status: Offline / Sandbox</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-900/80 mt-6 text-[10px] text-slate-400 leading-normal flex gap-1.5">
            <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> API synchronization keys are secured server-side. They never load directly inside client browser network inspectors.
            </span>
          </div>
        </div>
      </form>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="settings" />
    </div>
  );
}
