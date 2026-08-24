export type AboutFact = {
  text: string;
  icon?: 'camera' | 'heart' | 'cancer' | 'drink';
};

export const about = {
  photo: null as string | null,
  factsLeft: [
    { text: '5+ years in social media' },
    { text: 'Strategy, shooting, editing', icon: 'camera' },
    { text: 'Powered by iced lattes', icon: 'drink' },
  ] satisfies AboutFact[],
  factsRight: [
    { text: 'Social media manager + content creator' },
    { text: 'Big on local brands', icon: 'heart' },
    { text: 'OC based, working with small businesses' },
    { text: 'Cancer girly', icon: 'cancer' },
  ] satisfies AboutFact[],
  closing: "Okay, enough about me — let's talk about your socials.",
};
