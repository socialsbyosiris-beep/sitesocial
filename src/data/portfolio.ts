export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  tone: 'blue' | 'peach' | 'sand' | 'sage' | 'rose';
  icon: 'camera' | 'play' | 'calendar' | 'chat' | 'mail' | 'star' | 'heart' | 'chart';
};

// Placeholder projects — swap title, category, and description for real work,
// and add photos once available. `tone` and `icon` style the placeholder tile.
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project Name',
    category: 'Brand Photography',
    description: 'Add a short summary of the shoot, the brand, and the results here.',
    tone: 'blue',
    icon: 'camera',
  },
  {
    title: 'Project Name',
    category: 'Reels & TikTok',
    description: 'Describe the content series, platform, and any standout metrics.',
    tone: 'peach',
    icon: 'play',
  },
  {
    title: 'Project Name',
    category: 'Content Calendar',
    description: 'Summarize the monthly cadence and engagement growth for this client.',
    tone: 'sage',
    icon: 'calendar',
  },
  {
    title: 'Project Name',
    category: 'Community Management',
    description: 'Highlight the tone, response time, or community wins on this account.',
    tone: 'rose',
    icon: 'chat',
  },
  {
    title: 'Project Name',
    category: 'Email Campaign',
    description: 'Note the campaign goal, open rate, or launch this newsletter supported.',
    tone: 'sand',
    icon: 'mail',
  },
  {
    title: 'Project Name',
    category: 'Influencer Collab',
    description: 'Explain the collaboration, reach, and outcome for this partnership.',
    tone: 'blue',
    icon: 'star',
  },
  {
    title: 'Project Name',
    category: 'UGC Campaign',
    description: 'Describe the giveaway, user-generated content push, or engagement campaign here.',
    tone: 'peach',
    icon: 'heart',
  },
  {
    title: 'Project Name',
    category: 'Analytics & Growth',
    description: 'Summarize a growth milestone or performance report delivered for this client.',
    tone: 'sand',
    icon: 'chart',
  },
];
