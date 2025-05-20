import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import VendorCard from '../index';

// Mock
import { VENDOR_DATA_MOCK } from '@/mock/data';

describe('VendorCard', () => {
  const mockOnPress = jest.fn();
  const vendor = VENDOR_DATA_MOCK[0];

  it('renders image and name', () => {
    const { getByTestId } = render(
      <VendorCard
        image={vendor.image}
        name={vendor.name}
        onPress={mockOnPress}
      />,
    );

    expect(getByTestId('vendor-card')).toBeTruthy();
    expect(getByTestId('vendor-card-image')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <VendorCard
        image={vendor.image}
        name={vendor.name}
        onPress={mockOnPress}
      />,
    );
    const touchable = getByTestId('vendor-card');
    fireEvent.press(touchable);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
