/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId, UploadedFile } from './types';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import BestTime from './pages/BestTime';
import Hashtags from './pages/Hashtags';
import Captions from './pages/Captions';
import Audience from './pages/Audience';
import Comparison from './pages/Comparison';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Upload from './pages/Upload';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('landing');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedComparisonReels, setSelectedComparisonReels] = useState<[string, string]>(['reel-1', 'reel-2']);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync dark class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // If we are on the landing page, show it full-width without the dashboard scaffolding
  if (currentPage === 'landing') {
    return <LandingPage setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-theme relative">
      {/* Background Decorative Grid Overlays */}
      <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-100 pointer-events-none z-0" />

      {/* Main SaaS Scaffolding */}
      <div className="flex relative z-10">
        {/* Navigation Sidebar */}
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          setIsMobileOpen={setIsMobileSidebarOpen}
        />

        {/* Core Content Area */}
        <div
          className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ${
            isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
          }`}
        >
          {/* Main Top Header Navbar */}
          <Navbar
            setCurrentPage={setCurrentPage}
            uploadedFiles={uploadedFiles}
            setIsMobileOpen={setIsMobileSidebarOpen}
          />

          {/* Page Routing Switchboard */}
          <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto relative">
            {/* Floating theme toggle button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 transition-all focus:outline-none"
              title="Toggle theme mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
            </button>

            {currentPage === 'dashboard' && (
              <Dashboard
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
                setSelectedComparisonReels={setSelectedComparisonReels}
              />
            )}
            {currentPage === 'analytics' && (
              <Analytics
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'best-time' && (
              <BestTime
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'hashtags' && (
              <Hashtags
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'captions' && (
              <Captions
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'audience' && (
              <Audience
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'comparison' && (
              <Comparison
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
                selectedComparisonReels={selectedComparisonReels}
              />
            )}
            {currentPage === 'reports' && (
              <Reports
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'settings' && (
              <Settings
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
              />
            )}
            {currentPage === 'upload' && (
              <Upload
                setCurrentPage={setCurrentPage}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
