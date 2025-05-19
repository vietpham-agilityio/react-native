import React from 'react';

// Components
import { View } from 'react-native';
import Input from './index';

// Icons
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Input',
  component: Input,
  args: {
    label: 'Email',
    placeholder: 'Your email',
    value: '',
    onChangeText: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'flex-start', width: '100%' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Your email',
    keyboardType: 'email-address',
    value: '',
  },
};

export const WithPhoneIcon: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '(+1)',
    leftIcon: 'phone',
    keyboardType: 'phone-pad',
    value: '',
  },
};

export const WithPasswordToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Your password',
    value: '',
    secureTextEntry: true,
    rightIcon: 'eye',
    onRightIconPress: () => {},
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Your email',
    error: 'Invalid email address',
    value: '',
  },
};

export const Focused: Story = {
  args: {
    label: 'Name',
    placeholder: 'Your name',
    value: 'Your Name',
  },
};
