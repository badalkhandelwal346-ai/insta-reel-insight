/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Metric, Reel, HashtagPerformance, AudienceAge, AudienceGender, AudienceLocation, ReportItem } from '../types';

export const MOCK_METRICS: Metric[] = [
  {
    label: 'Total Views',
    value: '1.24M',
    change: '+14.2%',
    isPositive: true,
    icon: 'Play',
    description: 'Total play counts of all Reels uploaded within the selected time window.'
  },
  {
    label: 'Total Reach',
    value: '842.6K',
    change: '+18.5%',
    isPositive: true,
    icon: 'Users',
    description: 'The number of unique Instagram accounts that viewed your Reels at least once.'
  },
  {
    label: 'Engagement Rate',
    value: '8.45%',
    change: '+1.1%',
    isPositive: true,
    icon: 'Percent',
    description: 'Standard formula: ((Likes + Comments + Shares + Saves) / Views) * 100.'
  },
  {
    label: 'Followers Gained',
    value: '+4,821',
    change: '-2.4%',
    isPositive: false,
    icon: 'UserPlus',
    description: 'Net follower count changes driven directly from user impressions on Reels.'
  }
];

export const MOCK_REELS: Reel[] = [
  {
    id: 'reel-1',
    title: '5 Python Pandas Hacks You Must Know 🐍',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&auto=format&fit=crop&q=60',
    postedDate: '2026-06-28',
    views: 420000,
    reach: 310000,
    likes: 38200,
    shares: 12400,
    saves: 18500,
    comments: 1200,
    engagementRate: 16.7,
    watchTime: '18h 40m',
    completionRate: 64,
    hashtags: ['#python', '#pandas', '#datascience', '#coding', '#programmer'],
    caption: 'Stop writing long loops in Pandas! 🛑 Here are 5 vectorized hacks that will speed up your data analytics by 100x. Save this reel for your next coding session! Which one was your favorite?',
    captionLength: 178,
    emojiCount: 3
  },
  {
    id: 'reel-2',
    title: 'Day In The Life: NST AI Student 🎓',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&auto=format&fit=crop&q=60',
    postedDate: '2026-06-25',
    views: 310000,
    reach: 220000,
    likes: 29500,
    shares: 8900,
    saves: 4200,
    comments: 840,
    engagementRate: 13.9,
    watchTime: '12h 15m',
    completionRate: 48,
    hashtags: ['#nstudent', '#aistudent', '#collegelife', '#techcareers', '#rishihood'],
    caption: 'Ever wondered what it is like studying Artificial Intelligence and Software Craftsmanship? Here is a complete day-in-the-life Vlog showing our lab sessions, deep study blocks, and chill time with the cohort.',
    captionLength: 210,
    emojiCount: 2
  },
  {
    id: 'reel-3',
    title: 'Minimalist Desktop Setup Tour 💻✨',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=60',
    postedDate: '2026-06-22',
    views: 285000,
    reach: 198000,
    likes: 24100,
    shares: 15600,
    saves: 22300,
    comments: 920,
    engagementRate: 21.8,
    watchTime: '11h 50m',
    completionRate: 72,
    hashtags: ['#setup', '#workspace', '#desksetup', '#minimalist', '#developersetup'],
    caption: 'Clutter-free workspace = Clutter-free mind. 🧘‍♂️ Linking all accessories and desk elements in my bio. Tell me in the comments what is the one desk accessory you absolutely cannot live without.',
    captionLength: 185,
    emojiCount: 4
  },
  {
    id: 'reel-4',
    title: 'How I Built a Real-Time Dashboard in 3 Hours',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=60',
    postedDate: '2026-06-18',
    views: 180000,
    reach: 114000,
    likes: 12400,
    shares: 4500,
    saves: 6800,
    comments: 410,
    engagementRate: 13.3,
    watchTime: '6h 30m',
    completionRate: 52,
    hashtags: ['#fullstack', '#webdev', '#reactjs', '#tailwindcss', '#saas'],
    caption: 'React + Tailwind + Mock engines. Behind the scenes code timelapse of how I bootstrapped a complete analytics UI. Drop a comment with "CODE" and I will send you the repository link.',
    captionLength: 165,
    emojiCount: 1
  },
  {
    id: 'reel-5',
    title: 'Stop hardcoding your SQL queries! 🛑',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&auto=format&fit=crop&q=60',
    postedDate: '2026-06-14',
    views: 52000,
    reach: 38000,
    likes: 4100,
    shares: 980,
    saves: 1800,
    comments: 180,
    engagementRate: 13.5,
    watchTime: '1h 45m',
    completionRate: 35,
    hashtags: ['#sql', '#databases', '#backend', '#postgresql', '#codingtips'],
    caption: 'Writing raw SQL strings inside your backend controller is a recipe for SQL injection. Use an ORM or safe parameters instead. Learn Drizzle or SQLAlchemy today!',
    captionLength: 154,
    emojiCount: 1
  }
];

export const MOCK_HASHTAGS: HashtagPerformance[] = [
  { tag: '#python', usageCount: 22, avgViews: 285000, avgEngagement: 14.5, category: 'Broad', growthTrend: 12.4 },
  { tag: '#pandas', usageCount: 14, avgViews: 310000, avgEngagement: 16.2, category: 'Niche', growthTrend: 24.1 },
  { tag: '#datascience', usageCount: 19, avgViews: 245000, avgEngagement: 13.1, category: 'Broad', growthTrend: 8.5 },
  { tag: '#coding', usageCount: 25, avgViews: 195000, avgEngagement: 11.8, category: 'Broad', growthTrend: -2.3 },
  { tag: '#setup', usageCount: 8, avgViews: 285000, avgEngagement: 21.8, category: 'Viral', growthTrend: 45.8 },
  { tag: '#saas', usageCount: 11, avgViews: 140000, avgEngagement: 12.4, category: 'Industry', growthTrend: 15.2 },
  { tag: '#nstudent', usageCount: 15, avgViews: 220000, avgEngagement: 14.2, category: 'Niche', growthTrend: 18.0 }
];

export const MOCK_AUDIENCE_AGE: AudienceAge[] = [
  { range: '13-17', percentage: 4.5 },
  { range: '18-24', percentage: 42.8 },
  { range: '25-34', percentage: 38.2 },
  { range: '35-44', percentage: 11.3 },
  { range: '45-54', percentage: 2.2 },
  { range: '55+', percentage: 1.0 }
];

export const MOCK_AUDIENCE_GENDER: AudienceGender[] = [
  { gender: 'Male', percentage: 68.4 },
  { gender: 'Female', percentage: 29.1 },
  { gender: 'Non-binary/Other', percentage: 2.5 }
];

export const MOCK_AUDIENCE_COUNTRIES: AudienceLocation[] = [
  { name: 'India', percentage: 44.5 },
  { name: 'United States', percentage: 22.8 },
  { name: 'United Kingdom', percentage: 8.4 },
  { name: 'Germany', percentage: 5.2 },
  { name: 'Canada', percentage: 4.8 }
];

export const MOCK_AUDIENCE_CITIES: AudienceLocation[] = [
  { name: 'Mumbai', percentage: 14.2 },
  { name: 'Bangalore', percentage: 12.8 },
  { name: 'New York City', percentage: 8.5 },
  { name: 'New Delhi', percentage: 7.4 },
  { name: 'London', percentage: 6.1 }
];

export const MOCK_REPORTS: ReportItem[] = [
  { id: 'rep-1', title: 'June Performance Deep-Dive', date: '2026-06-30', type: 'Monthly', status: 'Ready', fileSize: '2.4 MB' },
  { id: 'rep-2', title: 'Hashtag Growth Optimization Analysis', date: '2026-06-25', type: 'Custom', status: 'Ready', fileSize: '1.8 MB' },
  { id: 'rep-3', title: 'Weekly Core Growth Summary', date: '2026-06-22', type: 'Weekly', status: 'Ready', fileSize: '1.1 MB' }
];

export const HOURLY_HEATMAP_DATA = [
  { hour: '12 AM', Sun: 40, Mon: 20, Tue: 25, Wed: 30, Thu: 22, Fri: 35, Sat: 45 },
  { hour: '3 AM', Sun: 15, Mon: 10, Tue: 8, Wed: 12, Thu: 15, Fri: 14, Sat: 20 },
  { hour: '6 AM', Sun: 25, Mon: 35, Tue: 40, Wed: 38, Thu: 45, Fri: 35, Sat: 28 },
  { hour: '9 AM', Sun: 45, Mon: 65, Tue: 70, Wed: 68, Thu: 72, Fri: 60, Sat: 50 },
  { hour: '12 PM', Sun: 70, Mon: 80, Tue: 85, Wed: 82, Thu: 88, Fri: 75, Sat: 68 },
  { hour: '3 PM', Sun: 65, Mon: 72, Tue: 78, Wed: 75, Thu: 80, Fri: 70, Sat: 62 },
  { hour: '6 PM', Sun: 85, Mon: 90, Tue: 98, Wed: 95, Thu: 97, Fri: 92, Sat: 88 },
  { hour: '9 PM', Sun: 60, Mon: 55, Tue: 62, Wed: 60, Thu: 68, Fri: 65, Sat: 70 }
];

export const CHART_TREND_DATA = [
  { date: 'Jun 15', views: 85000, reach: 62000, engagement: 7.8 },
  { date: 'Jun 17', views: 120000, reach: 91000, engagement: 8.2 },
  { date: 'Jun 19', views: 180000, reach: 114000, engagement: 8.5 },
  { date: 'Jun 21', views: 240000, reach: 168000, engagement: 8.1 },
  { date: 'Jun 23', views: 310000, reach: 220000, engagement: 9.2 },
  { date: 'Jun 25', views: 280000, reach: 198000, engagement: 8.9 },
  { date: 'Jun 27', views: 420000, reach: 310000, engagement: 9.8 }
];
