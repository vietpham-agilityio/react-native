import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import RatingStars from './index';

const meta: Meta<typeof RatingStars> = {
  title: 'Common/RatingStars',
  component: RatingStars,
  argTypes: {
    rating: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    maxStars: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    starSize: { control: { type: 'number', min: 8, max: 64, step: 1 } },
    starColor: { control: 'color' },
  },
  args: {
    rating: 3,
    maxStars: 5,
    starSize: 24,
    starColor: '#FFD700',
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};

export const FourStars: Story = {
  args: {
    rating: 4.0,
  },
};

export const CustomColor: Story = {
  args: {
    rating: 5,
    starColor: '#FF6347',
  },
};

export const TenStars: Story = {
  args: {
    rating: 7,
    maxStars: 10,
    starSize: 20,
  },
};
