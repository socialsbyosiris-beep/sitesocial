export type Tone = 'blue' | 'peach' | 'sand' | 'sage' | 'rose';

export type Photo = { src: string; alt: string; position?: string } | { tone: Tone };

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
  photos: Photo[];
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
        title: 'Content Creation',
        body: 'Planned and captured photo + short-form video content highlighting everything from everyday menu favorites to seasonal launches and promotions.',
      },
      {
        number: '02',
        title: 'Social Media Management',
        body: 'Turned content into an ongoing social presence with reels, posts, captions, trends, and timely promotional content.',
      },
      {
        number: '03',
        title: 'Campaign + Content Planning',
        body: 'Built content around seasonal launches, holidays, promotions, events, and evergreen menu items while leaving room for trends and last-minute updates.',
      },
    ],
    results: {
      bullets: [],
      headline: '+561% more accounts reached',
      stats: [
        { label: 'Accounts Reached', value: '3,920', delta: '+561%' },
        { label: 'Accounts Engaged', value: '153', delta: '+1,290%' },
        { label: 'Total Followers', value: '1,076', delta: '+64' },
      ],
    },
    photos: [
      { src: '/portfolio/yls-donuts.jpg', alt: 'Assorted gourmet donuts at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-drinks.jpg', alt: 'Iced coffee and matcha drinks at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-lox.jpg', alt: 'Lox bagel with capers at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-tote.jpg', alt: "YLS Bakery & Cafe 10 year anniversary tote bag" },
      { src: '/portfolio/yls-pink-donut.jpg', alt: 'Pink sprinkle donut at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-dubai-dream.jpg', alt: 'Dubai chocolate pistachio pastry, cut open, at YLS Bakery & Cafe', position: 'center 30%' },
      { src: '/portfolio/yls-quesadilla.jpg', alt: 'Breakfast quesadilla with avocado at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-pastry.jpg', alt: 'Branded pastry bag and donut at YLS Bakery & Cafe' },
      { src: '/portfolio/yls-pins.jpg', alt: 'YLS Bakery & Cafe branded enamel pins' },
    ],
  },
];
