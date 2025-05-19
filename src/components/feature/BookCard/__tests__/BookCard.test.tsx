import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import BookCard from '../index';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

// Mock vector icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('BookCard', () => {
  const mockImage = BOOKS_DATA_MOCK[0].image;
  const mockTitle = BOOKS_DATA_MOCK[0].title;
  const mockPrice = BOOKS_DATA_MOCK[0].price;
  const mockOnPress = jest.fn();

  it('renders image, title, and price', () => {
    const { getByText, getByTestId } = render(
      <BookCard
        image={mockImage}
        title={mockTitle}
        price={mockPrice}
        onPress={mockOnPress}
      />,
    );

    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(`$${mockPrice.toFixed(2)}`)).toBeTruthy();
    expect(getByTestId('book-image')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByRole } = render(
      <BookCard
        image={mockImage}
        title={mockTitle}
        price={mockPrice}
        onPress={mockOnPress}
      />,
    );
    const touchable = getByRole('button');
    fireEvent.press(touchable);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
