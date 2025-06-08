import { Meta, StoryObj } from '@storybook/react';

// Component
import AuthorHorizontalCard from './index';

// Mock
import { AUTHORS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof AuthorHorizontalCard> = {
  title: 'Feature/AuthorHorizontalCard',
  component: AuthorHorizontalCard,
};

export default meta;
type Story = StoryObj<typeof AuthorHorizontalCard>;

export const Default: Story = {
  args: {
    image: AUTHORS_DATA_MOCK[0].image,
    name: AUTHORS_DATA_MOCK[0].name,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
};
