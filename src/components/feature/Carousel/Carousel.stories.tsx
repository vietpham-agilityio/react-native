import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Carousel, OfferDiscountCard } from '@/components/feature';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof Carousel> = {
  title: 'Feature/Carousel',
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const BookCarousel: Story = {
  render: () => (
    <Carousel>
      {BOOKS_DATA_MOCK.map(({ id, image }) => (
        <OfferDiscountCard
          key={id}
          title="Special Offer"
          discountPercentage={25}
          image={image}
          onPress={() => {}}
        />
      ))}
    </Carousel>
  ),
};
