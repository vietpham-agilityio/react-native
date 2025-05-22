import ListDot from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ListDot',
  component: ListDot,
  args: {
    count: 3,
    activeIndex: 0,
  },
} satisfies Meta<typeof ListDot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 3,
    activeIndex: 0,
  },
};

export const FiveDotsThirdActive: Story = {
  args: {
    count: 5,
    activeIndex: 2,
  },
};
