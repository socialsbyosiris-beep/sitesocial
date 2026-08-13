export type Tone = 'blue' | 'peach' | 'sand' | 'sage' | 'rose';

export type TaskColumn = {
  label: string;
  text: string;
};

export type Task = {
  number: string;
  title: string;
  body: string;
  columns?: TaskColumn[];
  palette?: string[];
};

export type InsightStat = {
  label: string;
  value: string;
  delta: string;
};

export type CaseStudy = {
  brand: string;
  instagramHandle: string;
  instagramHref: string;
  intro: string[];
  goals: string[];
  skills: string[];
  tools: { name: string; blurb: string }[];
  tasks: Task[];
  results: {
    bullets: string[];
    headline: string;
    stats: InsightStat[];
  };
  photoTones: Tone[];
};

// Placeholder client case studies — swap brand, handle, photo grid, goals,
// skills, tasks, and results for real client work once ready.
export const caseStudies: CaseStudy[] = [
  {
    brand: 'YLS Bakery & Cafe · Yorba Linda',
    instagramHandle: '@ylsbakerycafe',
    instagramHref: 'https://instagram.com/ylsbakerycafe',
    intro: [
      'YLS Bakery & Cafe is a local Yorba Linda favorite serving up donuts, coffee, breakfast, lunch, and plenty of seasonal treats. I came on to help bring more consistency and personality to their social media while keeping the content fun, approachable, and connected to the local community.',
      "The goal wasn't to completely reinvent YLS online it was to build on an already loved local brand with more consistent content, stronger storytelling, and a better way to showcase everything they offer beyond the donut case.",
    ],
    goals: [
      'Create a more consistent social presence',
      'Showcase the full YLS menu + seasonal launches',
      'Increase local reach and engagement',
      'Build stronger connections with the Yorba Linda community',
    ],
    skills: [
      'Content Strategy',
      'Photography + Video',
      'Copywriting',
      'Content Planning',
      'Community Engagement',
      'Email + SMS',
    ],
    tools: [
      { name: 'Canva & Adobe', blurb: 'Content design, photo, and video editing' },
      { name: 'Metricool', blurb: 'Scheduling and analytics' },
      { name: 'Meta Business Suite', blurb: 'Performance tracking and ads' },
    ],
    tasks: [
      {
        number: '01',
        title: 'Brand Research',
        body: 'Add a summary of the discovery process for this client.',
        columns: [
          { label: 'Image', text: "Add the visual direction chosen for this brand — colors, tone, mood." },
          { label: 'Target', text: 'Add who this brand speaks to — their audience and clientele.' },
          { label: 'Values', text: "Add the brand's core values reflected in the content." },
        ],
      },
      {
        number: '02',
        title: 'Feed Concepts',
        body: 'Add a description of the visual direction, feed layout, and color scheme designed for this brand.',
        palette: ['#467390', '#e8b98c', '#9caf88', '#2f4a5c'],
      },
      {
        number: '03',
        title: 'Content Planning',
        body: 'Add a description of the posting cadence, content pillars, and how far in advance content was planned.',
      },
    ],
    results: {
      bullets: [
        'Add the reach or impressions growth over the campaign period.',
        'Add the engagement rate increase.',
        'Add the follower growth number.',
      ],
      headline: '+561% more accounts reached',
      stats: [
        { label: 'Accounts Reached', value: '3,920', delta: '+561%' },
        { label: 'Accounts Engaged', value: '153', delta: '+1,290%' },
        { label: 'Total Followers', value: '1,076', delta: '+64' },
      ],
    },
    photoTones: ['blue', 'peach', 'sand', 'sage', 'rose', 'blue', 'peach', 'sand', 'sage'],
  },
];
