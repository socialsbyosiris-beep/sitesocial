export const site = {
  name: 'Socials by Osiris',
  role: 'Social Media Manager',
  tagline:
    'Full-service social media — strategy, shooting, editing, and daily management — all in one.',
  email: 'socialsbyosiris@gmail.com',
  phone: '714 · 341 · 8284',
  phoneHref: 'tel:7143418284',
  instagram: '@socialsbyosiris',
  instagramHref: 'https://instagram.com/socialsbyosiris',
};

export type Package = {
  eyebrow: string;
  name: string;
  blurb: string;
  price: string;
  meta: string;
  features: string[];
  note?: string;
  cta: string;
  featured?: boolean;
  badge?: string;
};

export const packages: Package[] = [
  {
    eyebrow: 'Starter',
    name: 'Essential',
    blurb: 'Perfect for businesses getting consistent on social.',
    price: '$1,800',
    meta: '1 content shoot · up to 3 hrs on location',
    features: [
      '2 platforms (IG + FB or TikTok)',
      '3–4 posts per week',
      'Monthly content shoot (photos + video)',
      'Full video editing (Reels / TikToks)',
      'Caption copywriting',
      'Comment replies on published posts',
      'Monthly content calendar',
      'Monthly performance recap',
    ],
    note: 'Email and SMS available as add-ons.',
    cta: 'Start with Essential',
  },
  {
    eyebrow: 'Growth',
    name: 'Full Presence',
    blurb: 'Daily content across all platforms with one shoot per month.',
    price: '$3,200',
    meta: '1 content shoot · up to 4 hrs on location',
    features: [
      '3 platforms (IG, FB, TikTok)',
      'Daily posting',
      'Monthly content shoot (photos + video)',
      'Full video editing (Reels / TikToks)',
      'Caption copywriting',
      'Monthly content calendar',
      'Community engagement (comments + DMs)',
      'Monthly analytics report',
    ],
    cta: 'Book Full Presence',
    featured: true,
    badge: 'Most Popular',
  },
  {
    eyebrow: 'Premium',
    name: 'Content Machine',
    blurb: 'Maximum output with two shoots per month.',
    price: '$5,000',
    meta: '2 content shoots · up to 4 hrs each',
    features: [
      '3 platforms (IG, FB, TikTok)',
      'Daily posting',
      '2× monthly shoots (photos + video)',
      'Full video editing (Reels / TikToks)',
      'Caption copywriting',
      'Monthly content calendar',
      'Full community management + proactive engagement',
      'Email newsletter, 2× per month',
      'Monthly analytics report + strategy call',
    ],
    cta: 'Go all in',
  },
];

export type AddOn = {
  name: string;
  blurb: string;
  price: string;
  unit?: string;
  featured?: boolean;
};

export const addOns: AddOn[] = [
  {
    name: 'Email Newsletter',
    blurb: '2× per month, written + designed in your email platform',
    price: '+$600',
    unit: '/mo',
  },
  {
    name: 'SMS Marketing',
    blurb: 'Campaign copy + scheduling',
    price: '+$400',
    unit: '/mo',
  },
  {
    name: 'Email + SMS Bundle',
    blurb: 'Both services, save $200',
    price: '+$800',
    unit: '/mo',
    featured: true,
  },
  {
    name: 'Influencer Marketing',
    blurb: 'Outreach, coordination, and in-person visits',
    price: '+$900',
    unit: '/mo',
  },
];

export const terms =
  'All packages begin with a one-time onboarding of $500 — brand voice, goals, account setup, first content calendar, and shoot planning. Packages are billed monthly, no long-term contract, cancel any time with 30 days written notice.';
