import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import CartItem from '@/components/feature/CartItem';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

jest.mock('react-native-gesture-handler', () =>
  require('react-native-gesture-handler/jestSetup'),
);

describe('CartItem', () => {
  const mockImage = BOOKS_DATA_MOCK[0].image;
  const mockTitle = BOOKS_DATA_MOCK[0].title;
  const mockPrice = BOOKS_DATA_MOCK[0].price;

  it('renders title, price, and quantity', () => {
    const { getByText } = render(
      <CartItem
        image={mockImage}
        title={mockTitle}
        price={mockPrice}
        quantity={2}
        onQuantityChange={() => {}}
      />,
    );
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(`$${(mockPrice * 2).toFixed(2)}`)).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
  });

  it('calls onQuantityChange when quantity changes', () => {
    const onQuantityChange = jest.fn();

    const { getByTestId } = render(
      <CartItem
        image={mockImage}
        title={mockTitle}
        price={mockPrice}
        quantity={1}
        onQuantityChange={onQuantityChange}
      />,
    );

    fireEvent.press(getByTestId('increase-btn'));
    expect(onQuantityChange).toHaveBeenCalledWith(2);
  });

  it('matches snapshot', () => {
    const tree = render(
      <CartItem
        image={mockImage}
        title={mockTitle}
        price={mockPrice}
        quantity={1}
        onQuantityChange={() => {}}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
