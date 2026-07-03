/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import {
  Menu,
  Bell,
  Search,
  Database,
  CloudUpload,
  User,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
  setIsMobileOpen: (open: boolean) => void;
}

export default function Navbar({ setCurrentPage, uploadedFiles, setIsMobileOpen }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const isDatasetLoaded = uploadedFiles.length > 0;
  const activeFile = isDatasetLoaded ? uploadedFiles[0] : null;

  const notifications = [
    { id: 1, title: 'Upload recommendation', text: 'Tuesdays at 5:00 PM matches peak audience reach.', time: '2h ago' },
    { id: 2, title: 'Engagement spike', text: 'Your last reel went viral in India, views +450%.', time: '1d ago' },
    { id: 3, title: 'System ready', text: 'You can now download the June Performance Report.', time: '3d ago' }
  ];

  return (
    <header className="sticky top-0 z-20 w-full glass-panel border-b border-slate-200/50 dark:border-slate-800/50 transition-theme px-4 lg:px-6 py-4 flex items-center justify-between">
      {/* Mobile Menu Trigger & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Quick search (e.g., hashtags, captions)..."
            className="bg-transparent border-none outline-none w-48 font-sans focus:w-60 transition-all text-slate-800 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Dataset status & user widgets */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Dynamic Sourcing Badge */}
        <button
          onClick={() => setCurrentPage('upload')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
            isDatasetLoaded
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 animate-pulse'
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">
            {isDatasetLoaded ? `File Loaded: ${activeFile?.name}` : 'No Python Dataset Uploaded'}
          </span>
          <span className="sm:hidden">{isDatasetLoaded ? 'Active' : 'Missing'}</span>
          <CloudUpload className="w-3.5 h-3.5" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-950 shadow-xl border border-slate-100 dark:border-slate-800 p-4 z-50 text-slate-800 dark:text-slate-200 animate-scale-up">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-xs text-slate-500 dark:text-slate-400">Insights Notifications</span>
                <span className="text-[10px] text-pink-500 cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="text-xs hover:bg-slate-50 dark:hover:bg-slate-900/40 p-2 rounded-xl transition-colors">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-bold text-slate-800 dark:text-slate-100">{notif.title}</span>
                      <span className="text-[10px] text-slate-400">{notif.time}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 leading-normal">{notif.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">BK</div>
            </div>
            <span className="hidden md:inline text-xs font-semibold text-slate-700 dark:text-slate-300 pr-1">Badal K.</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-950 shadow-xl border border-slate-100 dark:border-slate-800 p-3 z-50 text-slate-800 dark:text-slate-200">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                <p className="font-bold">Badal K.</p>
                <p className="text-slate-500 dark:text-slate-400 truncate">badal.k25111@nst.rishihood.edu.in</p>
              </div>
              <div className="mt-2 space-y-1">
                <button
                  onClick={() => { setCurrentPage('settings'); setShowProfile(false); }}
                  className="w-full text-left text-xs px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
                >
                  My Profile Settings
                </button>
                <button
                  onClick={() => { setCurrentPage('upload'); setShowProfile(false); }}
                  className="w-full text-left text-xs px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
                >
                  Connected Datasets
                </button>
                <a
                  href="https://pandas.pydata.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between text-xs px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
                >
                  <span>Pandas Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
