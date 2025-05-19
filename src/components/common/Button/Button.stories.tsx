import React from 'react';
import { View } from 'react-native';
import Button from './';

// Types
import type { Meta, StoryObj } from '@storybook/react';

// Theme
import { colors, fontSizes } from '@/theme';

const meta = {
  title: 'Common/Button',
  component: Button,
  args: {
    title: 'Button',
    onPress: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center', width: '100%' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    title: 'Button',
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    title: 'Button',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    title: 'Button',
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    title: 'Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    title: 'Button',
  },
};

export const GhostLarge: Story = {
  args: {
    variant: 'ghost',
    size: 'large',
    title: 'Home',
  },
};

export const GhostMedium: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
    title: 'Home',
  },
};

export const GhostSmall: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
    title: 'Home',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Button',
    disabled: true,
  },
};

export const DisabledGhost: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
    title: 'Home',
    disabled: true,
  },
};

export const DisabledStyle: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Disabled',
    disabled: true,
  },
};

export const CustomStyle: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Custom',
    style: { backgroundColor: colors.primary, width: '100%' },
    textStyle: { fontSize: fontSizes.h4 },
  },
};
