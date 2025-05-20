import { Meta, StoryObj } from '@storybook/react';

// Components
import { TopicItem } from '@/components/common';

// Data
import { LIST_TOPICS } from '@/constants/listData';

const meta: Meta<typeof TopicItem> = {
  title: 'Common/TopicItem',
  component: TopicItem,
  args: {
    label: 'All',
    isActive: false,
  },
};

export default meta;
type Story = StoryObj<typeof TopicItem>;

export const Active: Story = {
  args: {
    label: LIST_TOPICS[1].label,
    isActive: true,
    onPress: () => {},
  },
};

export const Inactive: Story = {
  args: {
    label: LIST_TOPICS[0].label,
    isActive: false,
    onPress: () => {},
  },
};
