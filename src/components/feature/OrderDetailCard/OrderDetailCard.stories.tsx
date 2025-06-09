import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import OrderDetailCard from './index';
import { ORDER_DETAILS_MOCK } from '@/mock/data';

const meta: Meta<typeof OrderDetailCard> = {
  title: 'Feature/OrderDetailCard',
  component: OrderDetailCard,
  decorators: [
    Story => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof OrderDetailCard>;

export const Default: Story = {
  render: () => <OrderDetailCard order={ORDER_DETAILS_MOCK} />,
};
