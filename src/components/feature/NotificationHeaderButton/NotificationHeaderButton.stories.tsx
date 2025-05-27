import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';

// Components
import NotificationButton from './index';

// Theme
import { colors } from '@/theme';

const meta: Meta<typeof NotificationButton> = {
  title: 'Feature/NotificationButton',
  component: NotificationButton,
  decorators: [
    Story => (
      <View style={{ padding: 24, backgroundColor: '#fff', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPress: { action: 'pressed' },
    showBadge: {
      control: 'boolean',
      description: 'Show or hide the notification badge',
    },
    badgeColor: {
      control: 'color',
      description: 'Color of the notification badge',
    },
    iconColor: {
      control: 'color',
      description: 'Color of the notification icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Default: Story = {
  args: {
    showBadge: true,
    badgeColor: colors.error,
    iconColor: colors.black,
  },
};

export const WithoutBadge: Story = {
  args: {
    showBadge: false,
    iconColor: colors.black,
  },
};

export const CustomColors: Story = {
  args: {
    showBadge: true,
    badgeColor: colors.primary,
    iconColor: colors.primary,
  },
};
