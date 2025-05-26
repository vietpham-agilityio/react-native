import { ImageSourcePropType } from 'react-native';

export const LIST_TOPICS = [
  { id: 'all', label: 'All' },
  { id: 'novels', label: 'Novels' },
  { id: 'selflove', label: 'Self Love' },
  { id: 'science', label: 'Science' },
  { id: 'romance', label: 'Romance' },
];

export const LIST_ONBOARDING_STEPS: Record<
  string,
  {
    title: string;
    description: string;
    image: ImageSourcePropType;
  }
> = {
  STEP_ONE: {
    title: 'Now reading books will be easier',
    description:
      'Discover new worlds, join a vibrant reading community. Start your reading adventure effortlessly with us.',
    image: require('@assets/images/onBoarding/on-boarding-step-one.webp'),
  },
  STEP_TWO: {
    title: 'Your Bookish Soulmate Awaits',
    description:
      'Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.',
    image: require('@assets/images/onBoarding/on-boarding-step-two.webp'),
  },
  STEP_THREE: {
    title: 'Start Your Adventure',
    description:
      "Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let's go!",
    image: require('@assets/images/onBoarding/on-boarding-step-three.webp'),
  },
};
