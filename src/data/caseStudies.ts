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
    brand: 'Client Name',
    instagramHandle: '@clienthandle',
    instagramHref: '#',
    intro: [
      "Add a short paragraph here about how this client came to work with Osiris and what they needed help with.",
      'Add a note on the starting point — follower count, posting frequency, or brand consistency before this project.',
    ],
    goals: [
      'Increase Instagram engagement',
      'Grow follower count with the right audience',
      'Establish a consistent visual brand',
      'Build a repeatable content calendar',
    ],
    skills: ['Content Strategy', 'Caption Copywriting', 'Photo & Video Editing', 'Community Management'],
    tools: [
      { name: 'Canva', blurb: 'Templates for consistent, on-brand visuals' },
      { name: 'Later', blurb: 'Scheduling and content calendar management' },
      { name: 'Meta Business Suite', blurb: 'Publishing and performance tracking' },
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
  {
    brand: 'Client Name',
    instagramHandle: '@clienthandle',
    instagramHref: '#',
    intro: [
      'Add a short paragraph here about how this client came to work with Osiris and what they needed help with.',
      'Add a note on the starting point before this project began.',
    ],
    goals: [
      'Build a cohesive content calendar',
      'Increase Reel views and shares',
      'Strengthen community engagement',
      'Launch a monthly email newsletter',
    ],
    skills: ['Video Editing', 'Community Management', 'Email Marketing', 'Analytics Reporting'],
    tools: [
      { name: 'CapCut', blurb: 'Reels and short-form video editing' },
      { name: 'Notion', blurb: 'Content calendar and campaign planning' },
      { name: 'Flodesk', blurb: 'Newsletter design and delivery' },
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
        palette: ['#d98a86', '#9caf88', '#e8b98c', '#467390'],
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
      headline: '+3x more Reel views',
      stats: [
        { label: 'Reel Views', value: '48,200', delta: '+310%' },
        { label: 'Profile Visits', value: '2,430', delta: '+180%' },
        { label: 'Total Followers', value: '2,890', delta: '+412' },
      ],
    },
    photoTones: ['sage', 'rose', 'blue', 'peach', 'sand', 'rose', 'blue', 'sage', 'peach'],
  },
];
