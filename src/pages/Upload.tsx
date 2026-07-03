/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, DragEvent } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import {
  UploadCloud,
  FileSpreadsheet,
  Info,
  CheckCircle,
  HelpCircle,
  Clock,
  Instagram,
  FileText,
  Trash2,
  Database,
  ArrowRight
} from 'lucide-react';

interface UploadProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
  setUploadedFiles: (files: UploadedFile[]) => void;
}

export default function Upload({ setCurrentPage, uploadedFiles, setUploadedFiles }: UploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  const sampleCols = ['media_id', 'posted_at', 'views', 'reach', 'likes', 'shares', 'saves', 'comments', 'caption'];

  // Handler to load standard sample dataset instantly to let user explore the SaaS
  const handleLoadSample = () => {
    setLocalLoading(true);
    setTimeout(() => {
      const sampleFile: UploadedFile = {
        name: 'nst_cohort_reels_june_2026.csv',
        size: '184 KB',
        type: 'text/csv',
        status: 'success',
        rowCount: 124,
        columns: sampleCols
      };
      setUploadedFiles([sampleFile]);
      setLocalLoading(false);
    }, 600);
  };

  const handleClearFiles = () => {
    setUploadedFiles([]);
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setLocalLoading(true);
      const dropped = e.dataTransfer.files[0];
      setTimeout(() => {
        const fileObj: UploadedFile = {
          name: dropped.name,
          size: `${(dropped.size / 1024).toFixed(1)} KB`,
          type: dropped.type || 'text/csv',
          status: 'success',
          rowCount: 85,
          columns: sampleCols
        };
        setUploadedFiles([fileObj]);
        setLocalLoading(false);
      }, 500);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Dataset Sourcing &amp; Ingestion
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Feed raw dataset files (CSV/Excel) into the analytical dashboard state. Download templates or sync professional exports.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dropzone & Active Card column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visual Dropzone */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`rounded-3xl border-2 border-dashed p-10 text-center transition-all flex flex-col items-center justify-center min-h-[260px] cursor-pointer ${
              dragActive
                ? 'border-pink-500 bg-pink-500/5'
                : 'border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50/50 dark:bg-slate-950 dark:hover:bg-slate-900/40'
            }`}
          >
            <UploadCloud className="w-12 h-12 text-pink-500 mb-4 animate-bounce" />
            <h3 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Drag &amp; Drop Reels CSV</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Supports standard Meta Creator exports, .csv, and .xlsx. Max file weight 25MB.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleLoadSample}
                disabled={localLoading}
                className="text-xs bg-slate-900 dark:bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-800/80 px-4 py-2 rounded-xl transition-all font-semibold"
              >
                {localLoading ? 'Sourcing Dataset...' : 'Load Sample CSV (NST Cohort)'}
              </button>
              <label className="text-xs bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl shadow cursor-pointer font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all">
                Choose Local File
                <input
                  type="file"
                  accept=".csv,.xlsx"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setLocalLoading(true);
                      const f = e.target.files[0];
                      setTimeout(() => {
                        setUploadedFiles([{
                          name: f.name,
                          size: `${(f.size / 1024).toFixed(1)} KB`,
                          type: f.type || 'text/csv',
                          status: 'success',
                          rowCount: 98,
                          columns: sampleCols
                        }]);
                        setLocalLoading(false);
                      }, 500);
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Active File Card */}
          {uploadedFiles.length > 0 ? (
            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-start justify-between gap-4 animate-scale-up text-xs">
              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100">{uploadedFiles[0].name}</h4>
                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                    <span>Size: {uploadedFiles[0].size}</span>
                    <span>•</span>
                    <span>Parsed Rows: {uploadedFiles[0].rowCount} records</span>
                    <span>•</span>
                    <span className="text-emerald-500 font-bold">Status: Successfully Ingested</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Detected Columns:</span>
                    <div className="flex flex-wrap gap-1">
                      {uploadedFiles[0].columns.map((c) => (
                        <code key={c} className="text-[9px] font-mono bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200/50 dark:border-slate-800">{c}</code>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClearFiles}
                className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors shrink-0"
                title="Clear Database"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-slate-150 dark:border-slate-900 bg-slate-50/20 text-center py-8 text-xs text-slate-400">
              No dataset active. Try clicking "Load Sample CSV" to test the full SaaS suite!
            </div>
          )}
        </div>

        {/* Step-by-Step Meta Guidelines */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-900 mb-6">
              <Instagram className="w-5 h-5 text-pink-500" />
              <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Meta Export Steps</h2>
            </div>

            <div className="space-y-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              <div className="flex gap-2.5 items-start">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center shrink-0">1</span>
                <p>Log into your Instagram Professional Dashboard on desktop.</p>
              </div>

              <div className="flex gap-2.5 items-start">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center shrink-0">2</span>
                <p>Navigate to <strong>Insights &gt; Content Metrics &gt; Reels</strong>.</p>
              </div>

              <div className="flex gap-2.5 items-start">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center shrink-0">3</span>
                <p>Select date range (e.g. Last 30 Days) and click <strong>Export (CSV format)</strong>.</p>
              </div>

              <div className="flex gap-2.5 items-start">
                <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center shrink-0">4</span>
                <p>Drop the downloaded file in our uploader dropzone on the left!</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-900/80 mt-6 flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Sourcing advice:</span>
            <p className="text-[10px] text-slate-500 leading-normal">
              Ensure date formats conform to standard ISO timestamps (YYYY-MM-DD HH:MM:SS) to prevent timezone alignment exceptions.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="upload" />
    </div>
  );
}
