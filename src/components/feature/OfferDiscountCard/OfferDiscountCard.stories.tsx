import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import OfferDiscountCard from '@/components/feature/OfferDiscountCard';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof OfferDiscountCard> = {
  title: 'Feature/OfferDiscountCard',
  component: OfferDiscountCard,
  decorators: [
    Story => (
      <View style={{ margin: 20, alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OfferDiscountCard>;

export const Default: Story = {
  args: {
    title: 'Special Offer',
    discountPercentage: 90,
    image: BOOKS_DATA_MOCK[0].image,
    onPress: () => {},
  },
};
