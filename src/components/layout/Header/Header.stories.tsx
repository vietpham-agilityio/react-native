import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '@/components/layout/Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  args: {
    title: 'Home',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithNotificationDot: Story = {
  args: {
    showNotificationDot: true,
  },
};

export const WithSearchIcon: Story = {
  args: {
    ...WithNotificationDot.args,
    showSearchIcon: true,
  },
};
