import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';

// Components
import SearchHeaderButton from '@/components/feature/SearchHeaderButton';

// Theme
import { colors } from '@/theme';

const meta: Meta<typeof SearchHeaderButton> = {
  title: 'Feature/SearchHeaderButton',
  component: SearchHeaderButton,
  decorators: [
    Story => (
      <View style={{ padding: 24, backgroundColor: '#fff', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPress: { action: 'pressed' },
    iconColor: {
      control: 'color',
      description: 'Color of the search icon',
    },
    style: {
      control: 'object',
      description: 'Additional styles for the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchHeaderButton>;

export const Default: Story = {
  args: {
    iconColor: colors.black,
  },
};

export const CustomColor: Story = {
  args: {
    iconColor: colors.primary,
  },
};

export const CustomStyle: Story = {
  args: {
    iconColor: colors.black,
    style: {
      marginLeft: 8,
      backgroundColor: colors.grayLight,
      borderRadius: 20,
    },
  },
};
