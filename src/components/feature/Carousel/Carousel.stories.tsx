import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { View } from 'react-native';
import { BookCard, Carousel } from '@/components/feature';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

// Theme
import { colors } from '@/theme';

const meta: Meta<typeof Carousel> = {
  title: 'Feature/Carousel',
  component: Carousel,
  args: {},
  decorators: [
    Story => (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const BookCarousel: Story = {
  render: () => (
    <Carousel>
      {BOOKS_DATA_MOCK.map(({ id, title, price, image }) => (
        <BookCard
          key={id}
          title={title}
          image={image}
          price={price}
          onPress={() => {}}
        />
      ))}
    </Carousel>
  ),
};
