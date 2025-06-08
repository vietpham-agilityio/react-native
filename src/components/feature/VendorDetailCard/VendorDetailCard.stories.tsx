import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import VendorDetailCard from './index';
import { VENDOR_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof VendorDetailCard> = {
  title: 'Feature/VendorDetailCard',
  component: VendorDetailCard,
  args: {
    image: VENDOR_DATA_MOCK[0].image,
    name: VENDOR_DATA_MOCK[0].name,
    rating: 4,
  },
  decorators: [
    Story => (
      <View
        style={{
          padding: 24,
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FiveStars: Story = {
  args: {
    name: VENDOR_DATA_MOCK[0].name,
    rating: 5,
  },
};

export const ThreeStars: Story = {
  args: {
    name: VENDOR_DATA_MOCK[0].name,
    rating: 3,
  },
};
