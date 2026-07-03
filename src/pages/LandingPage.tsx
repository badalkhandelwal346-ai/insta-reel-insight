/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PageId } from '../types';
import {
  TrendingUp,
  Clock,
  Zap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Play,
  Share2,
  Users2,
  HelpCircle
} from 'lucide-react';

interface LandingPageProps {
  setCurrentPage: (page: PageId) => void;
}

export default function LandingPage({ setCurrentPage }: LandingPageProps) {
  const features = [
    {
      icon: Clock,
      title: 'Best Posting Slots',
      desc: 'Pinpoint precise weekday and hourly slots when your audience is historically active and primed to engage.'
    },
    {
      icon: TrendingUp,
      title: 'Engagement Driver',
      desc: 'Inspect view-to-reach performance ratios and understand exactly which content spikes your retention velocity.'
    },
    {
      icon: Zap,
      title: 'Hashtag Optimization',
      desc: 'Classify hashtags into broad, viral, and niche buckets to maximize categorizing power without spamming.'
    },
    {
      icon: BookOpen,
      title: 'Developer Learning',
      desc: 'Learn high-level data pipelines. Every metric is backed by step-by-step Pandas and Matplotlib explanations.'
    }
  ];

  const faqs = [
    {
      q: 'Does this app connect directly to my Instagram account?',
      a: 'Reels Insight AI is built to analyze offline dataset exports (CSVs/JSONs) you download from your Instagram Creator Dashboard. This ensures 100% privacy and gives you absolute control over your profile data.'
    },
    {
      q: 'How do I obtain the dataset required for analytics?',
      a: 'You can export your performance metrics directly from the Instagram Professional Dashboard or download your complete data profile via Meta Account Center. Read our upload page for complete instructions.'
    },
    {
      q: 'Why does this application feature developer learning blocks?',
      a: 'This is an educational platform designed to teach social media managers and creators how to master data analytics. The UI shows you the visual targets, and the Mentor blocks guide you on implementing the actual analysis yourself in Python!'
    }
  ];

  const testimonials = [
    {
      quote: "Reels Insight helped me realize that my 11 PM posts were reaching the wrong timezone entirely. I adjusted my posting slots based on the guide, and views doubled in two weeks!",
      author: "Aditi S.",
      role: "Tech Creator (45K followers)"
    },
    {
      quote: "As a student starting in data science, the Python guides at the bottom are incredibly helpful. I built my first custom Pandas heatmap script following the Best-Time page tutorial!",
      author: "Rohan M.",
      role: "NST Computer Science Student"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative grid-bg transition-theme">
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-24 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Top Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <span className="text-white font-display font-black text-sm">R</span>
            </div>
          </div>
          <span className="text-base font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Reels Insight AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="text-xs sm:text-sm font-medium hover:text-pink-400 transition-colors cursor-pointer"
          >
            SaaS Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('upload')}
            className="text-xs sm:text-sm font-medium hover:text-pink-400 transition-colors cursor-pointer"
          >
            Upload
          </button>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-purple-900/40 hover:scale-[1.03] transition-all"
          >
            Enter App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            Empowering Instagram Creators with Analytical Precision
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight leading-tight">
            Analyze. Optimize.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
              Grow Your Reels.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            The ultimate visual platform to track Instagram Reels statistics. Identify optimal posting times, analyze captions, and master social data analysis using Python and Pandas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-purple-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              Start Analysis Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('upload')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm px-8 py-4 rounded-2xl border border-slate-800 transition-colors cursor-pointer"
            >
              Sourcing &amp; Dataset Upload
            </button>
          </div>
        </motion.div>

        {/* Floating Mock Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20 border border-slate-800/80 p-1 bg-slate-900/40"
        >
          <div className="bg-slate-950 rounded-2xl overflow-hidden aspect-[16/9] flex flex-col justify-between">
            {/* Header Control Panel */}
            <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="bg-slate-950 rounded-lg px-3 py-1 text-[10px] font-mono text-slate-400 select-none">
                https://reels-insight-ai.app/dashboard
              </div>
            </div>

            {/* Simulated UI Screens */}
            <div className="flex-1 bg-slate-950 p-6 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-radial from-purple-500/5 to-transparent pointer-events-none" />

              <div className="max-w-md text-center space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 mx-auto flex items-center justify-center text-white shadow-xl">
                  <Play className="w-8 h-8 fill-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Interactive Reels Heatmaps</h3>
                <p className="text-xs text-slate-400">
                  Visualizing optimal day &amp; hour ranges using mock datasets. Hover, filter, and drill into retention metrics.
                </p>
                <div className="flex justify-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-900">
                  <span className="flex items-center gap-1"><Users2 className="w-4 h-4 text-purple-400" /> 842K Unique Reach</span>
                  <span className="flex items-center gap-1"><Share2 className="w-4 h-4 text-pink-400" /> 15.6K Shares</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold">Professional Analytics &amp; Roadmap</h2>
          <p className="text-slate-400 text-sm mt-2">
            Equipping you with full frontend analytics views and complete backend code blueprints to execute the data cleaning in Python.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-purple-500/30 transition-all hover:translate-y-[-4px] duration-300"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-pink-400 inline-block mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social / Mentorship Values */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-purple-950/20 via-slate-900/30 to-transparent rounded-3xl border border-purple-500/10 mb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-semibold text-pink-400 tracking-wider uppercase">Hands-on Learning</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold">
              Become a Full-Stack Social Data Analyst
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We separate beautiful React visualizations from computational data processing. In this app, you analyze mock results in real-time, then read our detailed mentorship guides explaining exactly how to construct the corresponding clean calculations in Pandas.
            </p>
            <div className="space-y-3 font-sans text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Standardized dataset column dictionaries.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Interactive Python execution instructions.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Beginner syntax traps &amp; outlier data warnings.</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-slate-200">What our early users say:</h3>
            <div className="space-y-4">
              {testimonials.map((test, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-950 border border-slate-900 text-xs">
                  <p className="text-slate-400 italic mb-3">"{test.quote}"</p>
                  <div className="flex justify-between items-center text-slate-500">
                    <span className="font-semibold text-slate-300">{test.author}</span>
                    <span>{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-pink-500 mx-auto mb-3" />
          <h2 className="text-2xl font-display font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
              <h3 className="text-sm font-semibold text-slate-200 mb-2">{faq.q}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-400">Reels Insight AI</span> © 2026. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-slate-300">Privacy Policy</span>
          <span>•</span>
          <span className="cursor-pointer hover:text-slate-300">Terms of Service</span>
          <span>•</span>
          <span className="cursor-pointer hover:text-slate-300">Mentorship License</span>
        </div>
      </footer>
    </div>
  );
}
