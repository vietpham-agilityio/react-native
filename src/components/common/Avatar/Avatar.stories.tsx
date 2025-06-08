import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Component
import { Avatar } from '@/components/common';

// Mock
import { AUTHORS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof Avatar> = {
  title: 'Common/Avatar',
  component: Avatar,
  decorators: [
    Story => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    source: AUTHORS_DATA_MOCK[0].image,
    size: 64,
  },
};

export const AvatarWithCustomSize: Story = {
  args: {
    source: AUTHORS_DATA_MOCK[2].image,
    size: 100,
  },
};
