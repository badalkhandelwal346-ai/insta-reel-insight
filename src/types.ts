/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'landing'
  | 'dashboard'
  | 'analytics'
  | 'best-time'
  | 'hashtags'
  | 'captions'
  | 'audience'
  | 'comparison'
  | 'reports'
  | 'settings'
  | 'upload';

export interface Metric {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: string;
  description: string;
}

export interface Reel {
  id: string;
  title: string;
  thumbnail: string;
  postedDate: string;
  views: number;
  reach: number;
  likes: number;
  shares: number;
  saves: number;
  comments: number;
  engagementRate: number;
  watchTime: string; // in minutes/seconds
  completionRate: number; // percentage
  hashtags: string[];
  caption: string;
  captionLength: number;
  emojiCount: number;
}

export interface HashtagPerformance {
  tag: string;
  usageCount: number;
  avgViews: number;
  avgEngagement: number;
  category: 'Niche' | 'Broad' | 'Viral' | 'Industry';
  growthTrend: number; // percentage increase
}

export interface CaptionAnalysisResult {
  score: number;
  emojiDensity: 'Low' | 'Medium' | 'High';
  lengthCategory: 'Short (<50 chars)' | 'Medium (50-150 chars)' | 'Long (>150 chars)';
  estimatedReadingTime: string;
  suggestedKeywords: string[];
  tone: string;
}

export interface AudienceAge {
  range: string;
  percentage: number;
}

export interface AudienceGender {
  gender: string;
  percentage: number;
}

export interface AudienceLocation {
  name: string;
  percentage: number;
}

export interface ReportItem {
  id: string;
  title: string;
  date: string;
  type: 'Monthly' | 'Weekly' | 'Custom';
  status: 'Ready' | 'Generating';
  fileSize: string;
}

export interface UploadedFile {
  name: string;
  size: string;
  type: string;
  status: 'success' | 'uploading' | 'error';
  rowCount: number;
  columns: string[];
}

export interface LearningGuideContent {
  featureName: string;
  whyExists: string;
  datasetNeeded: string;
  columnsRequired: string[];
  pythonConcepts: string[];
  pandasFunctions: string[];
  numpyConcepts: string[];
  matplotlibChart: string;
  dataCleaningSteps: string[];
  beginnerMistakes: string[];
  practiceExercises: string[];
  nextSteps: string;
  resources: string[];
}
