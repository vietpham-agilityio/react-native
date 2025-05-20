import { Meta, StoryObj } from '@storybook/react';

// Components
import QuantityControlBar from '@/components/feature/QuantityControlBar';
import { View } from 'react-native';

const meta: Meta<typeof QuantityControlBar> = {
  title: 'Feature/QuantityControlBar',
  component: QuantityControlBar,
  args: {
    value: 1,
    min: 1,
    max: 10,
    onChange: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center', width: 120 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof QuantityControlBar>;

export const Default: Story = {
  args: {
    value: 1,
  },
};

export const AtMin: Story = {
  args: {
    value: 1,
    min: 1,
  },
};

export const AtMax: Story = {
  args: {
    value: 10,
    max: 10,
  },
};
