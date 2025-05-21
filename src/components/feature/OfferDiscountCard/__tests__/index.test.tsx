import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import OfferDiscountCard from '@/components/feature/OfferDiscountCard';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

describe('OfferDiscountCard', () => {
  const mockImage = BOOKS_DATA_MOCK[0].image;
  const mockTitle = 'Special Offer';
  const mockDiscount = 25;

  it('renders title, discount, and image', () => {
    const { getByText } = render(
      <OfferDiscountCard
        title={mockTitle}
        discountPercentage={mockDiscount}
        image={mockImage}
        onPress={() => {}}
      />,
    );
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(`Discount ${mockDiscount}%`)).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <OfferDiscountCard
        title={mockTitle}
        discountPercentage={mockDiscount}
        image={mockImage}
        onPress={onPress}
      />,
    );
    fireEvent.press(getByText('Order Now'));

    expect(onPress).toHaveBeenCalled();
  });
});
