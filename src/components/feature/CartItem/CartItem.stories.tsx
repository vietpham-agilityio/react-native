import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';

// Components
import CartItem from './index';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof CartItem> = {
  title: 'Feature/CartItem',
  component: CartItem,
  decorators: [
    Story => (
      <View style={{ padding: 24, backgroundColor: '#fff', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    image: BOOKS_DATA_MOCK[0].image,
    title: BOOKS_DATA_MOCK[0].title,
    price: BOOKS_DATA_MOCK[0].price,
    quantity: 6,
    onQuantityChange: () => {},
  },
};
