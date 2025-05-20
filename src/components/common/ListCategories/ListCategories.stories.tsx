import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import ListCategories from './';

const meta: Meta<typeof ListCategories> = {
  title: 'Common/ListCategories',
  component: ListCategories,
};

export default meta;
type Story = StoryObj<typeof ListCategories>;

export const Default: Story = {
  render: () => (
    <View style={{ paddingVertical: 16, backgroundColor: '#fff' }}>
      <ListCategories />
    </View>
  ),
};
