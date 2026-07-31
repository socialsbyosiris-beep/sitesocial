export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  tone: 'blue' | 'peach' | 'sand';
};

// Placeholder projects — swap title, category, and description for real work,
// and add photos once available. `tone` picks the placeholder thumbnail color.
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project Name',
    category: 'Brand Photography',
    description: 'Add a short summary of the shoot, the brand, and the results here.',
    tone: 'blue',
  },
  {
    title: 'Project Name',
    category: 'Reels & TikTok',
    description: 'Describe the content series, platform, and any standout metrics.',
    tone: 'peach',
  },
  {
    title: 'Project Name',
    category: 'Content Calendar',
    description: 'Summarize the monthly cadence and engagement growth for this client.',
    tone: 'sand',
  },
  {
    title: 'Project Name',
    category: 'Community Management',
    description: 'Highlight the tone, response time, or community wins on this account.',
    tone: 'blue',
  },
  {
    title: 'Project Name',
    category: 'Email Campaign',
    description: 'Note the campaign goal, open rate, or launch this newsletter supported.',
    tone: 'peach',
  },
  {
    title: 'Project Name',
    category: 'Influencer Collab',
    description: 'Explain the collaboration, reach, and outcome for this partnership.',
    tone: 'sand',
  },
];
