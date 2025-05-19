import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import AuthorCard from '../index';

// Mock data
import { AUTHORS_DATA_MOCK } from '@/mock/data';

// Mock vector icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('AuthorCard', () => {
  const mockOnPress = jest.fn();

  it('renders image, name, and role', () => {
    const { getByText, getByTestId } = render(
      <AuthorCard
        image={AUTHORS_DATA_MOCK[0].image}
        name={AUTHORS_DATA_MOCK[0].name}
        role={AUTHORS_DATA_MOCK[0].role}
        onPress={mockOnPress}
      />,
    );

    expect(getByText(AUTHORS_DATA_MOCK[0].name)).toBeTruthy();
    expect(getByText(AUTHORS_DATA_MOCK[0].role)).toBeTruthy();
    expect(getByTestId('author-image')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByRole } = render(
      <AuthorCard
        image={AUTHORS_DATA_MOCK[0].image}
        name={AUTHORS_DATA_MOCK[0].name}
        role={AUTHORS_DATA_MOCK[0].role}
        onPress={mockOnPress}
      />,
    );
    const touchable = getByRole('button');

    fireEvent.press(touchable);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
