import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ScrollView, View } from 'react-native';
import BookCard from './index';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta = {
  title: 'Feature/BookCard',
  component: BookCard,
  args: {
    ...BOOKS_DATA_MOCK[0],
    onPress: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center', width: '100%' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BookCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BookCardSingle: Story = {
  args: {
    ...BOOKS_DATA_MOCK[0],
    onPress: () => {},
  },
};

export const BookCardCategorySingle: Story = {
  args: {
    ...BookCardSingle,
    isCategory: true,
  },
};

export const BookCardList: Story = {
  render: () => (
    <ScrollView horizontal>
      {BOOKS_DATA_MOCK.map(book => (
        <View style={{ marginRight: 16 }} key={book.id}>
          <BookCard
            image={book.image}
            title={book.title}
            price={book.price}
            onPress={() => {}}
          />
        </View>
      ))}
    </ScrollView>
  ),
};

export const BookCardCategoryList: Story = {
  render: () => (
    <ScrollView horizontal>
      {BOOKS_DATA_MOCK.map(book => (
        <View style={{ marginRight: 16 }} key={book.id}>
          <BookCard
            isCategory
            image={book.image}
            title={book.title}
            price={book.price}
            onPress={() => {}}
          />
        </View>
      ))}
    </ScrollView>
  ),
};
