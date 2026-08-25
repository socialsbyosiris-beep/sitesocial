export type Callout = {
  side: 'left' | 'right';
  text: string;
  icon?: 'stars' | 'camera' | 'drink' | 'heart' | 'wave' | 'cancer';
  underline?: boolean;
};

export const about = {
  photo: '/about/osiris-photo.webp',
  photoAlt: 'Osiris, social media manager and content creator',
  callouts: [
    { side: 'left', icon: 'stars', text: '5+ years in social media' },
    { side: 'left', icon: 'camera', text: 'Strategy, shooting, editing' },
    { side: 'left', icon: 'drink', text: 'Powered by iced lattes' },
    { side: 'right', underline: true, text: 'Social media manager + content creator' },
    { side: 'right', icon: 'heart', text: 'Big on local brands' },
    { side: 'right', icon: 'wave', text: 'OC based, working with small businesses' },
    { side: 'right', icon: 'cancer', text: 'Cancer baby' },
  ] satisfies Callout[],
  closing: "Okay, enough about me — let's talk about your socials.",
};
