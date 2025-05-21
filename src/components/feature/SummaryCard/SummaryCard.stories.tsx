import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import SummaryCard from '@/components/feature/SummaryCard';

const meta: Meta<typeof SummaryCard> = {
  title: 'Feature/SummaryCard',
  component: SummaryCard,
  decorators: [
    Story => (
      <View style={{ padding: 24, flex: 1, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SummaryCard>;

export const Default: Story = {
  args: {
    price: 87.1,
    shipping: 2,
    total: 89.1,
    onSeeDetails: () => {},
  },
};
