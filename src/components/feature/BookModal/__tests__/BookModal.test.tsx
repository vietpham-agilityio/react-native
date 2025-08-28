import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import BookModal from '@/components/feature/BookModal';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

jest.mock('react-native-gesture-handler', () => ({
  Gesture: {
    Pan: () => ({
      onUpdate: jest.fn().mockReturnThis(),
      onEnd: jest.fn().mockReturnThis(),
    }),
  },
  GestureDetector: ({ children }: { children: React.ReactNode }) => children,
  GestureHandlerRootView: ({ children }: { children: React.ReactNode }) =>
    children,
}));

const WrapperTestWithProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <GestureHandlerRootView>{children}</GestureHandlerRootView>;

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
      <WrapperTestWithProvider>
        <BookModal
          onCloseModal={() => {}}
          image={mockBook.image}
          title={mockBook.title}
          brandLogo={mockBook.brandLogo}
          description={mockBook.description}
          isFavorite={mockBook.isFavorite}
          price={mockBook.price}
          rating={mockBook.rating}
          initialQuantity={2}
          setQuantity={() => {}}
          onToggleFavorite={() => {}}
          onAddToCart={() => {}}
        />
      </WrapperTestWithProvider>,
    );

    expect(getByText('I Talk About Running')).toBeTruthy();
  });

  it('calls setQuantity when quantity changes', () => {
    const setQuantity = jest.fn();
    const { getByTestId } = render(
      <WrapperTestWithProvider>
        <BookModal
          onCloseModal={() => {}}
          image={mockBook.image}
          title={mockBook.title}
          brandLogo={mockBook.brandLogo}
          description={mockBook.description}
          isFavorite={mockBook.isFavorite}
          price={mockBook.price}
          rating={mockBook.rating}
          initialQuantity={2}
          setQuantity={setQuantity}
          onToggleFavorite={() => {}}
          onAddToCart={() => {}}
        />
      </WrapperTestWithProvider>,
    );

    fireEvent.press(getByTestId('increase-btn'));
    expect(setQuantity).toHaveBeenCalledWith(3);
  });

  it('calls onToggleFavorite when favorite is pressed', () => {
    const onToggleFavorite = jest.fn();
    const { getByTestId } = render(
      <WrapperTestWithProvider>
        <BookModal
          onCloseModal={() => {}}
          image={mockBook.image}
          title={mockBook.title}
          brandLogo={mockBook.brandLogo}
          description={mockBook.description}
          isFavorite={mockBook.isFavorite}
          price={mockBook.price}
          rating={mockBook.rating}
          initialQuantity={1}
          setQuantity={() => {}}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={() => {}}
        />
      </WrapperTestWithProvider>,
    );

    fireEvent.press(getByTestId('favorite-btn'));
    expect(onToggleFavorite).toHaveBeenCalled();
  });

  it('calls onAddToCart when View cart is pressed', () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <WrapperTestWithProvider>
        <BookModal
          onCloseModal={() => {}}
          image={mockBook.image}
          title={mockBook.title}
          brandLogo={mockBook.brandLogo}
          description={mockBook.description}
          isFavorite={mockBook.isFavorite}
          price={mockBook.price}
          rating={mockBook.rating}
          initialQuantity={1}
          setQuantity={() => {}}
          onToggleFavorite={() => {}}
          onAddToCart={onAddToCart}
        />
      </WrapperTestWithProvider>,
    );

    fireEvent.press(getByText('View cart'));
    expect(onAddToCart).toHaveBeenCalled();
  });

  it('calls onCloseModal when Continue shopping is pressed', () => {
    const onCloseModal = jest.fn();
    const { getByText } = render(
      <WrapperTestWithProvider>
        <BookModal
          onCloseModal={onCloseModal}
          image={mockBook.image}
          title={mockBook.title}
          brandLogo={mockBook.brandLogo}
          description={mockBook.description}
          isFavorite={mockBook.isFavorite}
          price={mockBook.price}
          rating={mockBook.rating}
          initialQuantity={1}
          setQuantity={() => {}}
          onToggleFavorite={() => {}}
          onAddToCart={() => {}}
        />
      </WrapperTestWithProvider>,
    );

    fireEvent.press(getByText('Continue shopping'));
    expect(onCloseModal).toHaveBeenCalled();
  });
});
