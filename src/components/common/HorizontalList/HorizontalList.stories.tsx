import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

// Components
import { BookCard, HorizontalList } from '@/components';

const meta = {
  title: 'Common/HorizontalList',
  component: HorizontalList,
  args: {},
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof HorizontalList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: BOOKS_DATA_MOCK,
    renderItem: ({ item }: any) => (
      <BookCard
        image={item.image}
        title={item.title}
        price={item.price}
        onPress={() => {}}
      />
    ),
    keyExtractor: (item: any) => item.id,
    showsHorizontalScrollIndicator: true,
  },
};
