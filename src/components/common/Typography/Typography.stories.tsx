import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Typography from './';

const meta = {
  title: 'Common/Typography',
  component: Typography,
  args: {
    children: 'Sample Text',
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypoXLargeMedium: Story = {
  args: {
    variant: 'typoXLarge',
    weight: 'medium',
    children: 'Typography XLarge - Medium',
  },
};
export const TypoLargeSemiBold: Story = {
  args: {
    variant: 'typoLarge',
    weight: 'semibold',
    children: 'Typography Large - SemiBold',
  },
};
export const TypoLargeMedium: Story = {
  args: {
    variant: 'typoLarge',
    weight: 'medium',
    children: 'Typography Large - Medium',
  },
};
export const TypoLargeRegular: Story = {
  args: {
    variant: 'typoLarge',
    weight: 'regular',
    children: 'Typography Large - Regular',
  },
};
export const TypoMediumBold: Story = {
  args: {
    variant: 'typoMedium',
    weight: 'bold',
    children: 'Typography Medium - Bold',
  },
};
export const TypoMediumSemiBold: Story = {
  args: {
    variant: 'typoMedium',
    weight: 'semibold',
    children: 'Typography Medium - SemiBold',
  },
};
export const TypoMediumMedium: Story = {
  args: {
    variant: 'typoMedium',
    weight: 'medium',
    children: 'Typography Medium - Medium',
  },
};
export const TypoMediumRegular: Story = {
  args: {
    variant: 'typoMedium',
    weight: 'regular',
    children: 'Typography Medium - Regular',
  },
};
export const TypoSmallBold: Story = {
  args: {
    variant: 'typoSmall',
    weight: 'bold',
    children: 'Typography Small - Bold',
  },
};
export const TypoSmallSemiBold: Story = {
  args: {
    variant: 'typoSmall',
    weight: 'semibold',
    children: 'Typography Small - SemiBold',
  },
};
export const TypoSmallMedium: Story = {
  args: {
    variant: 'typoSmall',
    weight: 'medium',
    children: 'Typography Small - Medium',
  },
};
export const TypoSmallRegular: Story = {
  args: {
    variant: 'typoSmall',
    weight: 'regular',
    children: 'Typography Small - Regular',
  },
};
