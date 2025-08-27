import { Meta, StoryObj } from '@storybook/react';

// Components
import BookModal from './';

// Mock data
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof BookModal> = {
  title: 'Feature/BookModal',
  component: BookModal,
};

export default meta;
type Story = StoryObj<typeof BookModal>;

export const Default: Story = {
  args: {
    onCloseModal: () => {},
    image: BOOKS_DATA_MOCK[0].image,
    title: BOOKS_DATA_MOCK[0].title,
    brandLogo: BOOKS_DATA_MOCK[0].vendor.image,
    description: BOOKS_DATA_MOCK[0].description,
    price: BOOKS_DATA_MOCK[0].price,
    isFavorite: false,
    rating: BOOKS_DATA_MOCK[0].rating,
    quantity: 2,
    setQuantity: () => {},
    onToggleFavorite: () => {},
    onAddToCart: () => {},
  },
};
