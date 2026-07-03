/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import {
  LayoutDashboard,
  BarChart3,
  Clock,
  Hash,
  FileText,
  Users2,
  GitCompare,
  CalendarDays,
  Settings2,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
  currentPage,
  setCurrentPage,
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen
}: SidebarProps) {
  const navItems = [
    { id: 'dashboard' as PageId, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics' as PageId, label: 'Analytics', icon: BarChart3 },
    { id: 'best-time' as PageId, label: 'Best Time to Post', icon: Clock },
    { id: 'hashtags' as PageId, label: 'Hashtag Analysis', icon: Hash },
    { id: 'captions' as PageId, label: 'Caption Analysis', icon: FileText },
    { id: 'audience' as PageId, label: 'Audience Insights', icon: Users2 },
    { id: 'comparison' as PageId, label: 'Reel Comparison', icon: GitCompare },
    { id: 'reports' as PageId, label: 'Performance Reports', icon: CalendarDays },
    { id: 'settings' as PageId, label: 'Settings', icon: Settings2 },
    { id: 'upload' as PageId, label: 'Upload Dataset', icon: UploadCloud }
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsMobileOpen(false);
  };

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-4 bg-slate-950 text-slate-100 border-r border-slate-800/80">
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between mb-8 px-2 py-3">
          <div
            onClick={() => handleNavClick('landing')}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5 flex items-center justify-center shadow-lg shadow-purple-900/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] font-display font-extrabold text-lg">R</span>
              </div>
            </div>
            {(!isCollapsed || isMobileOpen) && (
              <div className="leading-none animate-fade-in">
                <h1 className="text-sm font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  Reels Insight AI
                </h1>
                <span className="text-[10px] text-slate-500 font-mono">v1.0.0 Alpha</span>
              </div>
            )}
          </div>

          {/* Collapse toggle (desktop only) */}
          {!isMobileOpen && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5 rounded-lg hover:bg-slate-800/60 text-slate-400 hover:text-white transition-colors border border-slate-800"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium transition-all group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-transparent text-pink-400 border-l-2 border-pink-500'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? 'text-pink-400 scale-110' : 'text-slate-400 group-hover:scale-105'}`} />
                {(!isCollapsed || isMobileOpen) && (
                  <span className="truncate">{item.label}</span>
                )}

                {/* Tooltip for collapsed mode */}
                {isCollapsed && !isMobileOpen && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md border border-slate-800">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Info / Creator Link */}
      {(!isCollapsed || isMobileOpen) && (
        <div className="p-3 bg-slate-900/40 rounded-2xl border border-slate-900 text-center">
          <span className="text-xs text-slate-500 block">Logged in as</span>
          <span className="text-xs font-mono font-medium text-purple-400 block truncate">badal.k25111@nst</span>
          <button
            onClick={() => handleNavClick('landing')}
            className="mt-2 text-[10px] text-pink-400 hover:text-white transition-colors hover:underline block w-full"
          >
            Back to Landing Page
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar container */}
      <aside
        className={`hidden lg:block h-screen fixed top-0 left-0 transition-all duration-300 z-30 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (with Backdrop overlay) */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-slate-950 transition-transform duration-300 transform translate-x-0 z-50">
            {/* Close button inside drawer */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
