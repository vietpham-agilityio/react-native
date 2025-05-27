import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import BookDetailCard from '@/components/feature/BookDetailCard';

// Mock data
import { BOOKS_DATA_MOCK } from '@/mock/data';

describe('BookDetailCard', () => {
  const mockImage = BOOKS_DATA_MOCK[0].image;
  const mockTitle = BOOKS_DATA_MOCK[0].title;
  const mockBrandLogo = BOOKS_DATA_MOCK[0].vendor.image;
  const mockDescription = BOOKS_DATA_MOCK[0].description;

  it('renders image, title, brand logo, and description', () => {
    const { getByText } = render(
      <BookDetailCard
        image={mockImage}
        title={mockTitle}
        brandLogo={mockBrandLogo}
        description={mockDescription}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />,
    );
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(mockDescription)).toBeTruthy();
  });

  it('calls onToggleFavorite when heart is pressed', () => {
    const onToggleFavorite = jest.fn();
    const { getByRole } = render(
      <BookDetailCard
        image={mockImage}
        title={mockTitle}
        brandLogo={mockBrandLogo}
        description={mockDescription}
        isFavorite={false}
        onToggleFavorite={onToggleFavorite}
      />,
    );

    const heart = getByRole('button');
    fireEvent.press(heart);

    expect(onToggleFavorite).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = render(
      <BookDetailCard
        image={mockImage}
        title={mockTitle}
        brandLogo={mockBrandLogo}
        description={mockDescription}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
