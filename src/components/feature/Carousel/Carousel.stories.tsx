import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { View } from 'react-native';
import { Carousel, OfferDiscountCard } from '@/components/feature';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

// Types
import { Book } from '@/types/models';

const meta: Meta<typeof Carousel> = {
  title: 'Feature/Carousel',
  component: Carousel,
  decorators: [
    Story => (
      <View style={{ paddingHorizontal: 24 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const BookCarousel: Story = {
  render: () => (
    <Carousel
      listItems={BOOKS_DATA_MOCK.slice(0, 5).map((book: Book) => {
        const { id, image } = book;

        return {
          id,
          item: (
            <OfferDiscountCard
              key={id}
              title="Special Offer"
              discountPercentage={25}
              image={image}
              onPress={() => {}}
            />
          ),
        };
      })}
    />
  ),
};
