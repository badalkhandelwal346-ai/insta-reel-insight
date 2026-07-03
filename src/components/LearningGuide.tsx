/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LEARNING_GUIDES } from '../constants/learningGuides';
import { BookOpen, Database, Code, BarChart2, AlertCircle, FileText } from 'lucide-react';

interface LearningGuideProps {
  pageId: string;
}

export default function LearningGuide({ pageId }: LearningGuideProps) {
  const guide = LEARNING_GUIDES[pageId];
  const [activeTab, setActiveTab] = useState<'why' | 'data' | 'python' | 'viz' | 'exercises'>('why');

  if (!guide) return null;

  return (
    <div id={`learning-guide-${pageId}`} className="mt-16 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/40 rounded-3xl p-6 md:p-8 border border-purple-500/20 shadow-2xl backdrop-blur-md relative overflow-hidden transition-theme">
      {/* Absolute Decorative Gradient Glows */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-purple-500/15 pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-semibold">Mentor Mode</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-100">
            📘 Developer Learning Guide: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">{guide.featureName}</span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Learn the exact data science workflows required to build this feature yourself using Python, Pandas, and Matplotlib.
          </p>
        </div>
        <div className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 inline-flex items-center gap-1.5 self-start md:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          No Code Implemented Yet — Build It Next!
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('why')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'why'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-slate-800/40 hover:bg-slate-800/70 text-slate-300 border border-slate-700/50'
          }`}
        >
          <FileText className="w-4 h-4" />
          Why This Exists
        </button>
        <button
          onClick={() => setActiveTab('data')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'data'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-slate-800/40 hover:bg-slate-800/70 text-slate-300 border border-slate-700/50'
          }`}
        >
          <Database className="w-4 h-4" />
          Dataset &amp; Schema
        </button>
        <button
          onClick={() => setActiveTab('python')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'python'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-slate-800/40 hover:bg-slate-800/70 text-slate-300 border border-slate-700/50'
          }`}
        >
          <Code className="w-4 h-4" />
          Python &amp; Pandas
        </button>
        <button
          onClick={() => setActiveTab('viz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'viz'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-slate-800/40 hover:bg-slate-800/70 text-slate-300 border border-slate-700/50'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          Visualization &amp; Math
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'exercises'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-slate-800/40 hover:bg-slate-800/70 text-slate-300 border border-slate-700/50'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          Practice &amp; Pitfalls
        </button>
      </div>

      {/* Tab Panels with animations */}
      <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 min-h-[220px]">
        {activeTab === 'why' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-1.5">Business &amp; Creators Value</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{guide.whyExists}</p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Recommended Next Goal:</span>
                <span className="text-sm text-pink-300 font-semibold">{guide.nextSteps}</span>
              </div>
              <div className="flex gap-2">
                {guide.resources.map((res, i) => (
                  <a
                    key={i}
                    href={`https://${res}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 rounded-lg border border-purple-500/10 transition-colors"
                  >
                    View Resource
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-2">Ideal Sourcing</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{guide.datasetNeeded}</p>

              <h4 className="text-xs font-mono uppercase text-pink-400 font-bold mb-2">Required Dataset Columns</h4>
              <div className="flex flex-wrap gap-1.5">
                {guide.columnsRequired.map((col, idx) => (
                  <code key={idx} className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md font-mono border border-slate-700">
                    {col}
                  </code>
                ))}
              </div>
            </div>
            <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono uppercase text-purple-400 font-bold mb-2">Data Cleaning &amp; Standardizing</h4>
                <ul className="space-y-2">
                  {guide.dataCleaningSteps.map((step, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'python' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-2.5">Pandas Functions to Study</h3>
              <div className="space-y-2">
                {guide.pandasFunctions.map((func, i) => {
                  const [title, desc] = func.split(' - ');
                  return (
                    <div key={i} className="text-sm text-slate-300 bg-slate-800/30 p-2.5 rounded-lg border border-slate-800/50">
                      <code className="text-pink-400 font-mono text-xs font-bold block mb-0.5">{title}</code>
                      <span className="text-xs text-slate-400">{desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-2.5">Fundamental Python &amp; NumPy Concepts</h3>
              <ul className="space-y-3">
                {guide.pythonConcepts.map((concept, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-purple-400 font-mono font-bold">▶</span>
                    <span>{concept}</span>
                  </li>
                ))}
                {guide.numpyConcepts.map((concept, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-bold">np</span>
                    <span className="font-mono text-slate-400 text-xs mt-0.5 bg-slate-800 px-1.5 py-0.5 rounded">{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'viz' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-1.5">Recommended Matplotlib / Seaborn Chart</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">{guide.matplotlibChart}</p>
            </div>
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto">
              <span className="text-slate-500 font-sans block mb-2 font-mono">// Python Implementation Blueprint</span>
              <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br />
              <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br />
              <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br />
              <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns<br /><br />
              <span className="text-slate-500"># Load dataset</span><br />
              df = pd.read_csv(<span className="text-orange-300">"reels_data.csv"</span>)<br />
              <span className="text-slate-500"># Perform analysis on columns ({guide.columnsRequired.slice(0, 2).join(', ')})</span><br />
              {pageId === 'best-time' ? (
                <>
                  df[<span className="text-orange-300">'timestamp'</span>] = pd.to_datetime(df[<span className="text-orange-300">'posted_at'</span>])<br />
                  df[<span className="text-orange-300">'hour'</span>] = df[<span className="text-orange-300">'timestamp'</span>].dt.hour<br />
                  df[<span className="text-orange-300">'weekday'</span>] = df[<span className="text-orange-300">'timestamp'</span>].dt.day_name()<br />
                  pivot = df.pivot_table(index=<span className="text-orange-300">'weekday'</span>, columns=<span className="text-orange-300">'hour'</span>, values=<span className="text-orange-300">'views'</span>, aggfunc=np.median)
                </>
              ) : pageId === 'hashtags' ? (
                <>
                  df[<span className="text-orange-300">'hashtags'</span>] = df[<span className="text-orange-300">'caption'</span>].str.findall(<span className="text-orange-300">r"#\w+"</span>)<br />
                  exploded_df = df.explode(<span className="text-orange-300">'hashtags'</span>)<br />
                  results = exploded_df.groupby(<span className="text-orange-300">'hashtags'</span>)[<span className="text-orange-300">'views'</span>].median()
                </>
              ) : (
                <>
                  summary = df.groupby(<span className="text-orange-300">'{guide.columnsRequired[0]}'</span>)[<span className="text-orange-300">'views'</span>].agg([np.mean, np.median])
                </>
              )}<br /><br />
              plt.figure(figsize=(<span className="text-cyan-400">10</span>, <span className="text-cyan-400">5</span>))<br />
              plt.title(<span className="text-orange-300">"Optimal Performance Metrics"</span>)<br />
              plt.show()
            </div>
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-r border-slate-800/60 pr-0 md:pr-4">
              <h3 className="text-base font-semibold text-red-400 flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-4 h-4" />
                Common Beginner Mistakes
              </h3>
              <ul className="space-y-2">
                {guide.beginnerMistakes.map((mistake, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-red-400 font-bold font-mono">✖</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                <Code className="w-4 h-4" />
                Practice Hands-on Exercises
              </h3>
              <ul className="space-y-2">
                {guide.practiceExercises.map((ex, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold font-mono">{i + 1}.</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
