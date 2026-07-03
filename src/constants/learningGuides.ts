/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LearningGuideContent } from '../types';

export const LEARNING_GUIDES: Record<string, LearningGuideContent> = {
  dashboard: {
    featureName: 'Insights Dashboard',
    whyExists: 'The dashboard aggregates high-level performance indicators (KPIs) to give creators an immediate pulse check on their content strategy. It saves time by compiling metrics from disparate sources into a cohesive visual summary.',
    datasetNeeded: 'Instagram Creator Account Export or Meta Graph API JSON/CSV exports of post-level metrics.',
    columnsRequired: [
      'media_id',
      'timestamp/posted_date',
      'views/impressions',
      'reach',
      'likes',
      'shares',
      'saves',
      'comments'
    ],
    pythonConcepts: [
      'Basic variables and data structures (lists, dicts)',
      'Functions and parameter passing',
      'Importing libraries and modules',
      'Understanding object types'
    ],
    pandasFunctions: [
      'pd.read_csv() - loading raw datasets',
      'df.head() - quick inspection',
      'df.describe() - global statistics summary',
      'df.agg() - calculating multiple aggregates simultaneously'
    ],
    numpyConcepts: [
      'np.nan - identifying missing engagement cells',
      'Vectorized arithmetic for calculating aggregate sums and ratios (e.g., Engagement Rate)'
    ],
    matplotlibChart: 'A multi-axis Line Chart showing views vs. engagement rate over time to reveal overall growth trends.',
    dataCleaningSteps: [
      'Verify date-time formats are consistent.',
      'Replace nulls in engagement counters (likes, shares, etc.) with 0.',
      'Drop duplicates based on a unique media ID.'
    ],
    beginnerMistakes: [
      'Confusing views (total play cycles) with reach (unique viewers). Always report them separately.',
      'Hardcoding index numbers instead of referencing dataframe column labels.'
    ],
    practiceExercises: [
      'Load your dataset and print the maximum and minimum view values.',
      'Calculate the total likes + comments across the entire dataset with one Pandas statement.'
    ],
    nextSteps: 'Create a script that outputs a summary report text file describing average views and average engagement rates.',
    resources: [
      'Pandas Getting Started: pandas.pydata.org/docs/getting_started/',
      'NumPy Quickstart Guide: numpy.org/doc/stable/user/quickstart.html'
    ]
  },

  analytics: {
    featureName: 'Core Metric Analytics',
    whyExists: 'Creators must understand which metrics drive core growth. For example, high shares mean viral outreach, while high saves indicate high-value educational or aesthetic content. This analytics suite helps separate vanity metrics from action-oriented ones.',
    datasetNeeded: 'Performance CSV file containing individual post engagement counters and reach metrics.',
    columnsRequired: ['views', 'reach', 'likes', 'shares', 'saves', 'comments', 'followers_gained'],
    pythonConcepts: [
      'Statistical operations (mean, median, standard deviation)',
      'Data grouping and index alignment',
      'Type casting (converting strings to integers or floats)'
    ],
    pandasFunctions: [
      'df.sort_values(by="views", ascending=False) - finding top items',
      'df.corr() - calculating correlation matrices between shares, saves, and reach',
      'df.groupby() - segmenting performance'
    ],
    numpyConcepts: [
      'np.percentile() - calculating thresholds for "high performance" (e.g., top 10% of posts)',
      'np.corrcoef() - quick Pearson correlation coefficients between likes and views'
    ],
    matplotlibChart: 'Scatter Plots (shares vs. reach to inspect virality) and Bar Charts (averages of views vs. likes).',
    dataCleaningSteps: [
      'Removing suffix metrics like "K" or "M" (e.g., converting "12.5K" text into "12500" float).',
      'Detecting and clipping statistical outliers (erroneous data spikes).'
    ],
    beginnerMistakes: [
      'Relying solely on "mean" averages. Outlying viral reels skew averages upward; always check the "median" as well.',
      'Plotting metrics with vastly different scales on the same axis (e.g. view count alongside comment count) without dual Y-axes.'
    ],
    practiceExercises: [
      'Write a function that parses strings with "K" and "M" multipliers into clean float values.',
      'Use df.corr() to discover whether shares or saves correlate higher with overall reach in your sample.'
    ],
    nextSteps: 'Write a correlation-finder function that outputs text warnings if certain metrics appear heavily disconnected.',
    resources: [
      'W3Schools Python Statistics: w3schools.com/python/python_ml_mean_median_mode.asp',
      'Pandas Correlation Guide: pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.corr.html'
    ]
  },

  'best-time': {
    featureName: 'Best Time & Day to Post',
    whyExists: 'Posting when followers are active maximizes initial engagement velocity, triggering the Instagram recommendation algorithm. This feature calculates historical peak posting slots.',
    datasetNeeded: 'CSV containing timestamped posts and performance metrics, plus separate audience active times if available.',
    columnsRequired: ['timestamp/posted_at', 'views', 'engagement_rate', 'weekday', 'hour'],
    pythonConcepts: [
      'Date-time arithmetic, timezones, and UTC offsets',
      '2D grid manipulation (matrices) for heatmaps'
    ],
    pandasFunctions: [
      'pd.to_datetime() - essential for converting ISO timestamps',
      'df["timestamp"].dt.day_name() - extracting the day of the week',
      'df["timestamp"].dt.hour - extracting the 24-hour bracket',
      'df.pivot_table() - creating 2D grids (Days of the week vs. Hours) containing median views'
    ],
    numpyConcepts: [
      'np.argmax() - identifying the absolute index of the maximum cell in the pivot table',
      'np.reshape() - formatting 1D hour series into a 7x24 grid'
    ],
    matplotlibChart: 'Heatmaps (using seaborn.heatmap or matplotlib.imshow) showing days on the Y-axis and hours on the X-axis.',
    dataCleaningSteps: [
      'Converting all timestamps from global UTC to the creator’s local timezone.',
      'Filtering out days/hours with fewer than 3 posts to avoid drawing conclusions from statistical anomalies.'
    ],
    beginnerMistakes: [
      'Forgetting timezone differences. If your data is in UTC but you post in PST, your optimal times will be off by 8 hours!',
      'Failing to weight the averages. One random post with 1M views at 3 AM can make 3 AM look like the best time when it was actually a statistical anomaly.'
    ],
    practiceExercises: [
      'Load a dataset, parse the date, extract the hour, and print the count of posts uploaded in each hour.',
      'Build a simple 7x24 grid filled with zeros, and loop through your dataframe to count posts per slot.'
    ],
    nextSteps: 'Build an automated algorithm that prints out: "Based on 50+ posts, your optimal posting slots are Tuesdays at 5 PM and Thursdays at 11 AM."',
    resources: [
      'Pandas Datetime Properties: pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html',
      'Seaborn Heatmap Documentation: seaborn.pydata.org/generated/seaborn.heatmap.html'
    ]
  },

  hashtags: {
    featureName: 'Hashtag Performance Analysis',
    whyExists: 'Hashtags act as categorization signals. Proper hashtag strategies help reach niche audiences and expand discoverability. This tool breaks down performance per individual tag.',
    datasetNeeded: 'Reels dataset containing caption strings, or lists of hashtags used per post.',
    columnsRequired: ['media_id', 'caption/text', 'views', 'shares'],
    pythonConcepts: [
      'String splitting and regular expressions (regex)',
      'List flattening and counter dictionaries (e.g. collections.Counter)',
      'Iterating through lists of lists'
    ],
    pandasFunctions: [
      'df["caption"].str.findall(r"#\\w+") - extracting hashtags using regex',
      'df.explode() - converting hashtag lists into individual rows while duplicating post-level metrics for aggregate calculations',
      'df.groupby("hashtag")["views"].agg(["count", "mean", "median"])'
    ],
    numpyConcepts: [
      'np.where() - conditionally grouping hashtags into categories (e.g. "small" vs. "large" tags based on usage frequencies)'
    ],
    matplotlibChart: 'Horizontal Bar Charts (top 15 hashtags by median views) and Word Clouds representing hashtag popularity.',
    dataCleaningSteps: [
      'Lowercasing all hashtags to avoid duplicates like "#Fitness" and "#fitness".',
      'Removing punctuation symbols that are accidentally attached to hashtags.'
    ],
    beginnerMistakes: [
      'Attributing all performance to hashtags. Large hashtags have high search volume but massive competition; balance niche tags with broad ones.',
      'Exploding lists without understanding that total counts will multiply. Always use proper grouped averages, not simple sums.'
    ],
    practiceExercises: [
      'Use Python regex to extract all hashtags from a test string list.',
      'Write a function that takes a DataFrame of posts, explodes the hashtags, and identifies the single most frequently used hashtag.'
    ],
    nextSteps: 'Generate a CSV showing each hashtag, its count of occurrences, and the median views of posts that contained it.',
    resources: [
      'Python Regex Tutorial: docs.python.org/3/howto/regex.html',
      'Pandas Explode: pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.explode.html'
    ]
  },

  captions: {
    featureName: 'Caption Length & Tone Analysis',
    whyExists: 'Some creators succeed with long-form storytelling captions, while others thrive on ultra-short captions (1-3 words) that drive focus onto the video loop itself. This analysis optimizes caption copy.',
    datasetNeeded: 'CSV or JSON file containing full post captions and standard engagement rates.',
    columnsRequired: ['caption', 'views', 'engagement_rate', 'saves'],
    pythonConcepts: [
      'Natural Language Processing (NLP) basics (tokenization, word counts)',
      'Conditional classification loops'
    ],
    pandasFunctions: [
      'df["caption"].str.len() - calculating character length',
      'df["caption"].str.split().str.len() - calculating word count',
      'df["caption"].apply(lambda text: sum(1 for char in text if char in EMOJI_SET)) - custom functions with apply()'
    ],
    numpyConcepts: [
      'np.digitize() or np.select() - binning caption lengths into categories (e.g., Short, Medium, Long)'
    ],
    matplotlibChart: 'Box Plots comparing engagement rates across the different caption length bins (Short, Medium, Long) to see which category has the highest median performance.',
    dataCleaningSteps: [
      'Handling missing/NaN captions by replacing them with an empty string ("") to avoid string functions crashing.',
      'Filtering out systemic bot text, terms of service statements, or repetitive link-in-bio callouts.'
    ],
    beginnerMistakes: [
      'Ignoring emoji symbols. Emoji density heavily impacts readability; count them as distinct features.',
      'Confronting character length without word counts. A caption can have many letters but few words (e.g., repeating a single vowel).'
    ],
    practiceExercises: [
      'Build an emoji-counting function using Python’s "emoji" library or unicode ranges.',
      'Segment a test series of captions into 3 distinct length bins using np.select() and calculate median view rates.'
    ],
    nextSteps: 'Implement a script that parses sentiment or tone using the "textblob" or "nltk" library, and correlates tone to share-rate.',
    resources: [
      'Python NLTK (Natural Language Toolkit): nltk.org',
      'Pandas Apply and Lambda Functions: pandas.pydata.org/docs/reference/api/pandas.Series.apply.html'
    ]
  },

  audience: {
    featureName: 'Audience Demographics & Behavior',
    whyExists: 'Understanding your audience demographic helps you tailor the cultural context, language, sound choices, and presentation style of your reels. Aligning content with audience demographics boosts viewer retention.',
    datasetNeeded: 'Instagram Professional Dashboard demographics export JSON or Google Analytics CSV files.',
    columnsRequired: ['age_group', 'gender', 'country', 'city', 'active_percentage_by_hour'],
    pythonConcepts: [
      'Categorical data processing',
      'Percentage normalization (transforming counts into ratios)'
    ],
    pandasFunctions: [
      'df.groupby("country")["audience_count"].sum()',
      'df["percentage"] = (df["count"] / df["count"].sum()) * 100 - simple column mathematics',
      'df.sort_values(by="percentage", ascending=False)'
    ],
    numpyConcepts: [
      'np.round() - formatting raw values for presentation layers',
      'np.percentile() - calculating top geography brackets'
    ],
    matplotlibChart: 'Pie Charts or Donut Charts (gender distribution) and horizontal bar charts (top 5 countries and age ranges).',
    dataCleaningSteps: [
      'Mapping inconsistent city and country names (e.g., "US", "USA", "United States" merged into "United States").',
      'Consolidating scattered low-value categories into an "Other" category to prevent chart clutter.'
    ],
    beginnerMistakes: [
      'Overcomplicating layouts. Showing 50 countries on a pie chart makes it illegible. Limit displays to top 5 and bundle the rest.',
      'Confusing total follower demographics with active viewer demographics. Follower demographics change slowly, while view demographics change based on going viral.'
    ],
    practiceExercises: [
      'Write a function that groups all records below 3% in a dictionary and merges them into an "Other" category.',
      'Convert follower country absolute totals into readable percentage integers.'
    ],
    nextSteps: 'Create an automated function that triggers suggestions like: "Your highest audience share is age 18-24 in India. Incorporate current trending Indian audio formats!"',
    resources: [
      'Matplotlib Pie Chart Examples: matplotlib.org/stable/gallery/pie_and_polar_charts/pie_features.html',
      'Pandas Groupby Summary: realpython.com/pandas-groupby/'
    ]
  },

  comparison: {
    featureName: 'Reel-to-Reel Comparison',
    whyExists: 'When a reel goes viral or fails completely, creators need a side-by-side metric comparison to isolate the variables (e.g. hook style, length, music choice, caption style) that drove the divergence.',
    datasetNeeded: 'Row-level data of all Reels with deep metrics like views, watch-time, and retention percentages.',
    columnsRequired: ['media_id', 'title', 'duration_seconds', 'views', 'shares', 'average_watch_time'],
    pythonConcepts: [
      'Filtering dataframes with boolean conditions',
      'Calculating delta ratios (percentage change between two specific rows)'
    ],
    pandasFunctions: [
      'df.loc[df["media_id"] == first_id] - isolating a single record',
      'df.loc[df["media_id"] == second_id]',
      'Calculating percentage difference: ((metric_a - metric_b) / metric_b) * 100'
    ],
    numpyConcepts: [
      'np.diff() - calculating numerical differences across columns'
    ],
    matplotlibChart: 'A dual-axis grouped Bar Chart showing metrics side by side for direct comparison.',
    dataCleaningSteps: [
      'Validating that both comparison records are fully complete with no missing metrics.',
      'Aligning duration formatting (e.g. standardizing raw video seconds for relative comparison).'
    ],
    beginnerMistakes: [
      'Comparing reels with vastly different age timelines. A reel posted yesterday shouldn’t be directly compared to a reel posted 3 months ago without normalizing for time active.',
      'Failing to account for viewer scale. If video A has 10x the views of video B, compare engagement percentages rather than absolute numbers.'
    ],
    practiceExercises: [
      'Write a helper function that takes two row indices, extracts 5 columns, and returns a dictionary of percentage differences.',
      'Create a ratio comparison (Likes per 1000 Views) for two specific data frames.'
    ],
    nextSteps: 'Develop a simple terminal script where you input two post IDs, and it prints a detailed, written breakdown of which post performed better on retention and shares.',
    resources: [
      'Pandas Indexing with .loc: pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.loc.html',
      'Percentage Difference Formulas: mathisfun.com/percentage-difference.html'
    ]
  },

  reports: {
    featureName: 'Performance Reports & Exports',
    whyExists: 'Creators, agencies, and social managers must summarize results for clients, stakeholders, or weekly reviews. Auto-generated PDF/CSV reports simplify workflows.',
    datasetNeeded: 'Weekly or monthly aggregations of Reels performance statistics.',
    columnsRequired: ['week/month', 'total_views', 'views_growth', 'engagement_rate_avg', 'top_performing_reels'],
    pythonConcepts: [
      'File exports and system pathing (OS module)',
      'Working with PDF generators (e.g., ReportLab) or Excel writer libraries (e.g., OpenPyXL)'
    ],
    pandasFunctions: [
      'df.to_csv("weekly_report.csv", index=False) - exporting raw data',
      'df.to_excel("performance.xlsx", sheet_name="July") - multi-sheet exports',
      'pd.Grouper(key="timestamp", freq="W") - grouping data by week automatically'
    ],
    numpyConcepts: [
      'np.array_split() - splitting historical data into weekly batches for separate processing'
    ],
    matplotlibChart: 'Composite dashboards featuring multiple small charts printed to a single layout grid (subplots).',
    dataCleaningSteps: [
      'Formatting float numbers to 2 decimal places before exporting.',
      'Providing intuitive English column headers (e.g., changing "eng_rate_rel_v" to "Engagement Rate (%)").'
    ],
    beginnerMistakes: [
      'Over-exporting data. Clients and creators get lost in massive spreadsheets. Extract only the key highlights (views, shares, saves, recommendations) and summarize the rest.',
      'Omitting metadata. Always print the analysis date-range clearly at the top of every generated sheet.'
    ],
    practiceExercises: [
      'Use pd.to_csv() to save a filtered slice of your dataframe to a local file.',
      'Create a multi-sheet Pandas Excel writer that saves "Top Reels" in sheet 1 and "Geographic Data" in sheet 2.'
    ],
    nextSteps: 'Explore "ReportLab" in Python to generate a PDF containing a custom logo, header text, and an embedded matplotlib chart image.',
    resources: [
      'Pandas Excel Writing: pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_excel.html',
      'ReportLab PDF Generation: reportlab.com/opensource/'
    ]
  },

  settings: {
    featureName: 'Account Configuration & Parameters',
    whyExists: 'Analyzing data requires defining analytical parameters, such as defining what constitutes a "viral threshold" (e.g., top 10% or 15% of posts) or configuring target KPI values.',
    datasetNeeded: 'User parameters stored in a local config file (e.g., config.yaml or config.json) mapped against performance databases.',
    columnsRequired: ['parameter_name', 'parameter_value', 'created_at'],
    pythonConcepts: [
      'Reading and writing local JSON and YAML configuration files',
      'Setting constant thresholds in analytical code structures'
    ],
    pandasFunctions: [
      'pd.DataFrame.from_dict() - transforming configuration structures into dataframes',
      'df.query() - dynamically querying performance data using variables specified in setting files'
    ],
    numpyConcepts: [
      'np.select() - assigning labels to metrics using settings boundaries (e.g., "Below Target", "On Target", "Overachieved")'
    ],
    matplotlibChart: 'Bullet Charts or horizontal threshold gauges showing actual metric achievement against user-set KPIs.',
    dataCleaningSteps: [
      'Validating that threshold numbers in settings are valid mathematical boundaries (e.g. KPI percentage between 0 and 100).',
      'Correcting type errors (e.g., converting a text input of "5000" into a mathematical integer).'
    ],
    beginnerMistakes: [
      'Hardcoding thresholds directly inside computational loops instead of maintaining a central `config.py` file.',
      'Not validating system configs on load, which causes calculations to fail further down the script.'
    ],
    practiceExercises: [
      'Write a Python script that loads settings from a `config.json` file, and exits gracefully with a warning if fields are missing.',
      'Use the loaded values to filter a mock Pandas list.'
    ],
    nextSteps: 'Create an alert system that reads your target KPIs, checks yesterday’s post, and triggers an alert if the post exceeds the target by 50% or more.',
    resources: [
      'Python JSON Module: docs.python.org/3/library/json.html',
      'PyYAML Documentation: pyyaml.org'
    ]
  },

  upload: {
    featureName: 'Dataset Sourcing & Ingestion',
    whyExists: 'Data analysis is useless without clean data input. Sourcing, loading, and validating data from Instagram exports is the foundation of the analytics pipeline.',
    datasetNeeded: 'Instagram Account JSON/HTML exports, Meta Business Suite CSVs, or user-maintained tracking spreadsheets (Google Sheets/Excel).',
    columnsRequired: ['All uploaded columns - requires verification of standard social schema indicators.'],
    pythonConcepts: [
      'Exception handling (try-except blocks) to handle corrupt or incorrectly formatted files',
      'File system directory navigation (using the pathlib module)'
    ],
    pandasFunctions: [
      'pd.read_csv() with specific delimiter definitions (e.g., semicolon, tab)',
      'pd.read_excel() - handling xls/xlsx formats',
      'df.columns - inspecting and standardizing raw column labels'
    ],
    numpyConcepts: [
      'np.isnan() - checking for blank cells across the entire newly uploaded dataset'
    ],
    matplotlibChart: 'A Missingno or matrix plot showing the layout of missing/empty cells to help creators audit their upload quality.',
    dataCleaningSteps: [
      'Renaming columns to a consistent lowercase snake_case format (e.g., converting "Reach (Total)" to "reach").',
      'Validating that the uploaded file actually contains necessary metrics (views, timestamp) before executing analytics.'
    ],
    beginnerMistakes: [
      'Assuming all CSV uploads use a comma delimiter. European exports often use semicolons. Always catch parser errors!',
      'Failing to specify file encoding, causing string characters/emojis to break with "UnicodeDecodeError" exceptions.'
    ],
    practiceExercises: [
      'Write a `try-except` block to load a CSV file, automatically trying different encodings ("utf-8", "latin1") and delimiters (",", ";").',
      'Standardize columns: Write a python helper that takes any column list, strips whitespaces, replaces spaces with underscores, and lowercases everything.'
    ],
    nextSteps: 'Build an automated "Uploader Validator" script that checks files, prints out a list of detected columns, and returns a checklist of whether the file is compatible with Reels Insight AI.',
    resources: [
      'Pandas read_csv Documentation: pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html',
      'Python Exception Handling: w3schools.com/python/python_try_except.asp'
    ]
  }
};
