export type PortfolioItem = {
  category: string;
  image: string;
  alt: string;
};

// "Beyond the Feed" tiles — swap category, image, and alt for real work
// as it's ready.
export const portfolioItems: PortfolioItem[] = [
  {
    category: 'Brand Photography',
    image: '/portfolio/beyond-photography.jpg',
    alt: 'Overhead shot of decorated Halloween donuts at YLS Bakery & Cafe',
  },
  {
    category: 'Reels & TikTok',
    image: '/portfolio/beyond-reels.jpg',
    alt: 'Editing a breakfast bagel Reel in CapCut',
  },
  {
    category: 'Content Calendar',
    image: '/portfolio/beyond-content-calendar.jpg',
    alt: 'Monthly content calendar spreadsheet for YLS Bakery & Cafe',
  },
  {
    category: 'Community Management',
    image: '/portfolio/beyond-community.jpg',
    alt: 'Instagram comment replies on a YLS Bakery & Cafe post',
  },
  {
    category: 'Email Campaign',
    image: '/portfolio/beyond-email.jpg',
    alt: 'YLS Bakery & Cafe seasonal email newsletter design',
  },
  {
    category: 'Influencer Outreach',
    image: '/portfolio/beyond-collabs.jpg',
    alt: 'Influencer collaboration post featuring YLS Bakery & Cafe',
  },
  {
    category: 'Paid Ads',
    image: '/portfolio/beyond-ads.jpg',
    alt: 'Yelp Ads performance dashboard for YLS Bakery & Cafe',
  },
  {
    category: 'Analytics & Growth',
    image: '/portfolio/beyond-analytics.jpg',
    alt: 'Metricool analytics dashboard showing account growth',
  },
];
