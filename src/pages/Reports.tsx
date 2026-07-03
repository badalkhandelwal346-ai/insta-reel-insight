/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import { MOCK_REPORTS } from '../constants/mockData';
import {
  CalendarDays,
  FileText,
  Download,
  Share2,
  Trash2,
  Sparkles,
  RefreshCw,
  PlusCircle,
  CheckCircle,
  FileDown
} from 'lucide-react';

interface ReportsProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Reports({ setCurrentPage, uploadedFiles }: ReportsProps) {
  const [reportsList, setReportsList] = useState(MOCK_REPORTS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [reportType, setReportType] = useState<'Monthly' | 'Weekly'>('Monthly');

  // Simulated Report generator trigger
  const handleGenerateReport = () => {
    setIsGenerating(true);
    setProgress(15);
    setShowSuccess(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            const newRep = {
              id: `rep-${Date.now()}`,
              title: `${reportType} Reels Performance Summary (${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})`,
              date: new Date().toISOString().split('T')[0],
              type: reportType,
              status: 'Ready' as const,
              fileSize: '1.5 MB'
            };
            setReportsList([newRep, ...reportsList]);
            setShowSuccess(true);
          }, 300);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const handleDeleteReport = (id: string) => {
    setReportsList(reportsList.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Performance Reports
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Compile aggregates and export detailed summaries into clean, client-ready formats (CSV/PDF) for offline audits.
        </p>
      </div>

      {/* Main Generator block and history layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Compiler Generator panel */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-900">
              <div className="flex items-center gap-2">
                <FileDown className="w-5 h-5 text-pink-500" />
                <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Compile Report</h2>
              </div>
              <span className="text-[10px] text-purple-400 font-mono bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">
                PDF Layout Template
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Interval Scope</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setReportType('Monthly')}
                    className={`p-2.5 rounded-xl border font-semibold text-center transition-all ${
                      reportType === 'Monthly'
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/50 dark:border-slate-800'
                    }`}
                  >
                    Monthly Summary
                  </button>
                  <button
                    onClick={() => setReportType('Weekly')}
                    className={`p-2.5 rounded-xl border font-semibold text-center transition-all ${
                      reportType === 'Weekly'
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/50 dark:border-slate-800'
                    }`}
                  >
                    Weekly Summary
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1.5">Visual Content Sections</label>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                    <span>Incorporate Best Posting Slots</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                    <span>Incorporate Top Hashtag Performance</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                    <span>Incorporate Demographics &amp; retention</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-900/60 mt-6">
            {/* Generation Progress view */}
            {isGenerating ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Exporting charts and writing blocks...</span>
                  <span className="font-bold text-pink-500">{progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-900 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
            ) : (
              <button
                onClick={handleGenerateReport}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-purple-900/10 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                Trigger Report Compilation
              </button>
            )}

            {showSuccess && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs flex gap-2 items-center">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500 animate-bounce" />
                <span>Success! Your PDF report has been added to the logs below.</span>
              </div>
            )}
          </div>
        </div>

        {/* Historic Reports Log cards lists */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col transition-theme">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-900 pb-4">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Generated Exports Registry</h2>
              <span className="text-xs text-slate-400 dark:text-slate-500 block">Download mock summaries or view file metrics</span>
            </div>
            <span className="text-xs text-slate-500">
              Total logs: <span className="font-bold">{reportsList.length} files</span>
            </span>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[320px] pr-1">
            {reportsList.map((rep) => (
              <div
                key={rep.id}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between gap-4 text-xs hover:border-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-pink-500 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 truncate pr-4">{rep.title}</h4>
                    <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono">
                      <span>Date: {rep.date}</span>
                      <span>•</span>
                      <span className="text-purple-400 uppercase font-semibold">{rep.type}</span>
                      <span>•</span>
                      <span>Size: {rep.fileSize}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => alert('PDF export downloaded successfully (Mock download triggered).')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteReport(rep.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors"
                    title="Delete Record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-6 text-center">
            *PDF compilation is visual-only. The eventual backend will run a python execution block utilizing the "ReportLab" canvas model to output real PDF worksheets dynamically.
          </p>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="reports" />
    </div>
  );
}
