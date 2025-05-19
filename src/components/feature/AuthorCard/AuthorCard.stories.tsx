import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ScrollView, View } from 'react-native';
import AuthorCard from './';

// Mock data
import { AUTHORS_DATA_MOCK } from '@/mock/data';

const meta = {
  title: 'Feature/AuthorCard',
  component: AuthorCard,
  args: {
    ...AUTHORS_DATA_MOCK[0],
    onPress: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center', width: '100%' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AuthorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AuthorCardSingle: Story = {
  render: () => <AuthorCard {...AUTHORS_DATA_MOCK[0]} onPress={() => {}} />,
};

export const AuthorList: Story = {
  render: () => (
    <ScrollView horizontal>
      {AUTHORS_DATA_MOCK.map(({ id, image, name, role }) => (
        <View style={{ marginHorizontal: 8 }} key={id}>
          <AuthorCard
            image={image}
            name={name}
            role={role}
            onPress={() => {}}
          />
        </View>
      ))}
    </ScrollView>
  ),
};
