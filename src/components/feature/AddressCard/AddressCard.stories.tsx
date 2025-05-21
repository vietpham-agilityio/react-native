import { Meta, StoryObj } from '@storybook/react';
import AddressCard from '@/components/feature/AddressCard';
import { View } from 'react-native';

const meta: Meta<typeof AddressCard> = {
  title: 'Feature/AddressCard',
  component: AddressCard,
  decorators: [
    Story => (
      <View style={{ padding: 24, flex: 1, width: '100%' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddressCard>;

export const Default: Story = {
  args: {
    address: 'Utama Street No.20',
    addressDetail: 'Dumbo Street No.20, Dumbo, New York 10001, United States',
    onChange: () => {},
  },
};
