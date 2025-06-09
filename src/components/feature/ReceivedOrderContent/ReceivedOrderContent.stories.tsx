import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import { ReceivedOrderContent } from '@/components/feature';

const meta: Meta<typeof ReceivedOrderContent> = {
  title: 'Feature/ReceivedOrderContent',
  component: ReceivedOrderContent,
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
type Story = StoryObj<typeof ReceivedOrderContent>;

export const Default: Story = {
  args: {
    orderNumber: 2930541,
  },
};
