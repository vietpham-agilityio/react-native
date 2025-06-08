import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import { VendorDetailCard } from '@/components/feature';

// Mock
import { VENDOR_DATA_MOCK } from '@/mock/data';

describe('VendorDetailCard', () => {
  it('renders vendor name and image', () => {
    const { getByText, getByTestId } = render(
      <VendorDetailCard
        image={VENDOR_DATA_MOCK[0].image}
        name="Test Vendor"
        rating={4}
      />,
    );
    expect(getByText('Test Vendor')).toBeTruthy();
    expect(getByTestId('vendor-detail-card-image')).toBeTruthy();
  });

  it('renders the correct number of filled stars for rating', () => {
    const { getAllByTestId } = render(
      <VendorDetailCard
        image={VENDOR_DATA_MOCK[0].image}
        name="Test Vendor"
        rating={3}
      />,
    );
    expect(getAllByTestId('star-filled')).toHaveLength(3);
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <VendorDetailCard
        image={VENDOR_DATA_MOCK[0].image}
        name="Test Vendor"
        onPress={onPress}
      />,
    );
    fireEvent.press(getByTestId('vendor-detail-card'));
    expect(onPress).toHaveBeenCalled();
  });

  it('renders with default rating if not provided', () => {
    const { getAllByTestId } = render(
      <VendorDetailCard image={VENDOR_DATA_MOCK[0].image} name="Test Vendor" />,
    );
    expect(getAllByTestId('star-filled')).toHaveLength(4);
  });
});
