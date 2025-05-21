import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import BookModal from '@/components/feature/BookModal';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

describe('BookModal', () => {
  const mockBook = {
    image: BOOKS_DATA_MOCK[0].image,
    title: BOOKS_DATA_MOCK[0].title,
    brandLogo: BOOKS_DATA_MOCK[0].vendor.image,
    description: BOOKS_DATA_MOCK[0].description,
    isFavorite: false,
    price: BOOKS_DATA_MOCK[0].price,
    rating: BOOKS_DATA_MOCK[0].rating,
  };

  it('renders book details and quantity', () => {
    const { getByText } = render(
      <BookModal
        visible={true}
        onCloseModal={() => {}}
        book={mockBook}
        quantity={2}
        setQuantity={() => {}}
        onToggleFavorite={() => {}}
        onAddToCart={() => {}}
      />,
    );

    expect(getByText('I Talk About Running')).toBeTruthy();
  });

  it('calls setQuantity when quantity changes', () => {
    const setQuantity = jest.fn();
    const { getByTestId } = render(
      <BookModal
        visible={true}
        onCloseModal={() => {}}
        book={mockBook}
        quantity={1}
        setQuantity={setQuantity}
        onToggleFavorite={() => {}}
        onAddToCart={() => {}}
      />,
    );

    fireEvent.press(getByTestId('increase-btn'));
    expect(setQuantity).toHaveBeenCalledWith(2);
  });

  it('calls onToggleFavorite when favorite is pressed', () => {
    const onToggleFavorite = jest.fn();
    const { getByTestId } = render(
      <BookModal
        visible={true}
        onCloseModal={() => {}}
        book={mockBook}
        quantity={1}
        setQuantity={() => {}}
        onToggleFavorite={onToggleFavorite}
        onAddToCart={() => {}}
      />,
    );

    fireEvent.press(getByTestId('favorite-btn'));
    expect(onToggleFavorite).toHaveBeenCalled();
  });

  it('calls onAddToCart when View cart is pressed', () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <BookModal
        visible={true}
        onCloseModal={() => {}}
        book={mockBook}
        quantity={1}
        setQuantity={() => {}}
        onToggleFavorite={() => {}}
        onAddToCart={onAddToCart}
      />,
    );

    fireEvent.press(getByText('View cart'));
    expect(onAddToCart).toHaveBeenCalled();
  });

  it('calls onCloseModal when Continue shopping is pressed', () => {
    const onCloseModal = jest.fn();
    const { getByText } = render(
      <BookModal
        visible={true}
        onCloseModal={onCloseModal}
        book={mockBook}
        quantity={1}
        setQuantity={() => {}}
        onToggleFavorite={() => {}}
        onAddToCart={() => {}}
      />,
    );

    fireEvent.press(getByText('Continue shopping'));
    expect(onCloseModal).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = render(
      <BookModal
        visible={true}
        onCloseModal={() => {}}
        book={mockBook}
        quantity={1}
        setQuantity={() => {}}
        onToggleFavorite={() => {}}
        onAddToCart={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
