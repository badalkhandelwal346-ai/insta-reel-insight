/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, UploadedFile } from '../types';
import LearningGuide from '../components/LearningGuide';
import {
  FileText,
  Sparkles,
  Award,
  Smile,
  Type,
  BookOpen,
  Send,
  HelpCircle,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

interface CaptionsProps {
  setCurrentPage: (page: PageId) => void;
  uploadedFiles: UploadedFile[];
}

export default function Captions({ setCurrentPage, uploadedFiles }: CaptionsProps) {
  const [draftText, setDraftText] = useState('Stop writing long loops in Pandas! 🛑 Here are 5 vectorized hacks that will speed up your data analytics by 100x. Save this reel for your next coding session! Which one was your favorite?');
  const [analyzing, setAnalyzing] = useState(false);
  const [scoreResult, setScoreResult] = useState({
    score: 87,
    density: 'Medium',
    words: 34,
    emojis: 2,
    readingTime: '8 seconds',
    grade: 'A- Great engagement triggers!'
  });

  // Simple reactive evaluation to make the playground interactive
  const handleScoreCaption = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const words = draftText.split(/\s+/).filter(Boolean).length;
      const emojiMatch = draftText.match(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g) || [];
      const emojis = emojiMatch.length;

      let score = 50;
      // Scorer heuristics
      if (words > 10 && words < 50) score += 25;
      if (emojis > 0 && emojis <= 3) score += 15;
      if (draftText.toLowerCase().includes('save') || draftText.toLowerCase().includes('share')) score += 10;
      score = Math.min(score, 100);

      const density = emojis > 4 ? 'High' : emojis > 1 ? 'Medium' : 'Low';
      const readingTime = `${Math.ceil(words / 4)} seconds`;
      const grade = score >= 90 ? 'A+ Masterpiece!' : score >= 75 ? 'A- Highly Optimizable' : 'B- Needs Call-To-Action';

      setScoreResult({
        score,
        density,
        words,
        emojis,
        readingTime,
        grade
      });
      setAnalyzing(false);
    }, 450);
  };

  // Static insights cards
  const keywordsList = [
    { word: 'Pandas', strength: '94%', count: 14, type: 'Core Topic' },
    { word: 'Hacks', strength: '88%', count: 8, type: 'Hook' },
    { word: 'Save', strength: '85%', count: 11, type: 'Call to Action' },
    { word: 'Speed up', strength: '81%', count: 6, type: 'Benefit' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
          Caption Copy Grader
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Evaluate readability thresholds, word length distributions, emoji density ratios, and call-to-action placement tags.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Caption playground scorer */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">Interactive Caption Grader Playground</h2>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">Type your caption to run high-level layout checkouts</span>
              </div>
              <span className="text-[10px] text-pink-500 bg-pink-500/10 px-2.5 py-1 rounded-full font-mono border border-pink-500/10 animate-pulse">
                Mock NLP Engine
              </span>
            </div>

            <div className="relative">
              <textarea
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                rows={6}
                maxLength={1000}
                placeholder="Draft your caption here (e.g., Hook, body copy, hashtag anchors, and share reminders)..."
                className="w-full rounded-2xl p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 focus:border-purple-500/80 outline-none text-sm text-slate-800 dark:text-slate-200 font-sans transition-all leading-relaxed"
              />
              <span className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">
                {draftText.length}/1000 chars
              </span>
            </div>

            <button
              onClick={handleScoreCaption}
              disabled={analyzing}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-purple-900/10 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {analyzing ? 'Evaluating Text Factors...' : 'Analyze Copy Quality Factors'}
            </button>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row gap-4 justify-between text-xs">
            <div className="flex gap-2 items-start text-slate-400 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              <span>
                <strong>Playground Rule:</strong> This playground parses character counters and regex structures instantly. The eventual Python workflow will use libraries like NLTK or TextBlob to compute emotional sentiment, semantic tags, and readability scores.
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic score dashboard */}
        <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col justify-between transition-theme">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-1.5">
              <Award className="w-5 h-5 text-pink-500" />
              Factor Results
            </h2>

            <div className="space-y-4">
              {/* Score Circular gauge look */}
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-900">
                <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 flex items-center justify-center text-xl font-display font-extrabold text-slate-800 dark:text-slate-100 shrink-0">
                  {scoreResult.score}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-400 uppercase font-mono">Engagement Index</h4>
                  <p className="text-sm font-bold text-purple-400 mt-0.5">{scoreResult.grade}</p>
                </div>
              </div>

              {/* Factors counts grid */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900/60 flex items-center gap-2">
                  <Type className="w-4 h-4 text-pink-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Words</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{scoreResult.words}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900/60 flex items-center gap-2">
                  <Smile className="w-4 h-4 text-pink-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Emojis</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{scoreResult.emojis}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900/60 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-pink-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Reading Time</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{scoreResult.readingTime}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900/60 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Emoji Density</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{scoreResult.density}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-900/80 mt-6">
            <span className="text-[10px] text-slate-400 block mb-1 uppercase font-semibold">Recommendation advice:</span>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Your loop hook score is extremely high! For maximum shares, maintain your current structure where the core educational point is introduced in the first sentence.
            </p>
          </div>
        </div>
      </div>

      {/* Keywords Frequency Table */}
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-3xl p-5 md:p-6 shadow-sm transition-theme">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-800 dark:text-slate-200">High-Impact Caption Keywords</h2>
            <span className="text-xs text-slate-400 dark:text-slate-500 block">Identified words that correlate with saving/referencing behaviour</span>
          </div>
          <span className="text-[10px] font-mono text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">
            Mock Corpus Tags
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-900 pb-3 text-slate-400 uppercase font-mono tracking-wider">
                <th className="py-2.5">Keyword</th>
                <th className="py-2.5">Category Type</th>
                <th className="py-2.5">Usage Count</th>
                <th className="py-2.5">Correlation Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
              {keywordsList.map((kw, i) => (
                <tr key={i} className="text-slate-700 dark:text-slate-300">
                  <td className="py-3 font-semibold text-slate-800 dark:text-slate-100">{kw.word}</td>
                  <td className="py-3"><span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[10px] font-semibold">{kw.type}</span></td>
                  <td className="py-3 font-mono">{kw.count} posts</td>
                  <td className="py-3 font-mono text-emerald-500 font-bold">{kw.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Developer Learning Section */}
      <LearningGuide pageId="captions" />
    </div>
  );
}
