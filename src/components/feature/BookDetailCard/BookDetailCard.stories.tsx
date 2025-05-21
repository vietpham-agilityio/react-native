import { Meta, StoryObj } from '@storybook/react';

// Components
import { BookDetailCard } from '@/components';

// Mock data
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof BookDetailCard> = {
  title: 'Feature/BookDetailCard',
  component: BookDetailCard,
};

export default meta;
type Story = StoryObj<typeof BookDetailCard>;

export const BookDetailWithFavorite: Story = {
  args: {
    image: BOOKS_DATA_MOCK[0].image,
    title: BOOKS_DATA_MOCK[0].title,
    brandLogo: BOOKS_DATA_MOCK[0].vendor.image,
    description: BOOKS_DATA_MOCK[0].description,
    isFavorite: true,
    onToggleFavorite: () => {},
  },
};

export const BookDetailWithoutFavorite: Story = {
  args: {
    image: BOOKS_DATA_MOCK[1].image,
    title: BOOKS_DATA_MOCK[1].title,
    brandLogo: BOOKS_DATA_MOCK[1].vendor.image,
    description: BOOKS_DATA_MOCK[1].description,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
};
