import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import { ConfirmOrderThumbnail } from '@/components/feature';

const meta: Meta<typeof ConfirmOrderThumbnail> = {
  title: 'Feature/ConfirmOrderThumbnail',
  component: ConfirmOrderThumbnail,
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
type Story = StoryObj<typeof ConfirmOrderThumbnail>;

export const Default: Story = {
  args: {
    orderNumber: 2930541,
  },
};

export const Subtitle: Story = {
  args: {
    ...Default.args,
    subtitle: 'Confirm your order',
  },
};
