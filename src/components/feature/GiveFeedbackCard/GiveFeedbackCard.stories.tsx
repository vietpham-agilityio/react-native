import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import { GiveFeedbackCard } from '@/components/feature';

const meta: Meta<typeof GiveFeedbackCard> = {
  title: 'Feature/GiveFeedbackCard',
  component: GiveFeedbackCard,
  decorators: [
    Story => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GiveFeedbackCard>;

export const Default: Story = {
  args: {
    description:
      'Lorem ipsum dolor sit amet consectetur. Dignissim magna vitae.',
    placeholder: 'Write something for us!',
    onRatingChange: () => {},
  },
};
