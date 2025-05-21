import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import SelectionCard from '@/components/feature/SelectionCard';

const meta: Meta<typeof SelectionCard> = {
  title: 'Feature/SelectionCard',
  component: SelectionCard,
  decorators: [
    Story => (
      <View style={{ padding: 24, flex: 1, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SelectionCard>;

export const DateTimeSelectionCard: Story = {
  args: {
    title: 'Date and time',
    iconName: 'calendar',
    label: 'Date & time',
    description: 'Choose date and time',
    onPress: () => {},
  },
};

export const PaymentSelectionCard: Story = {
  args: {
    title: 'Payment',
    iconName: 'credit-card',
    label: 'Payment',
    description: 'Choose your payment',
    onPress: () => {},
  },
};
