import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { AuthorDetailCard } from '@/components/feature';

// Mock
import { AUTHORS_DATA_MOCK } from '@/mock/data';

describe('AuthorDetailCard', () => {
  it('renders avatar, name, role, rating, and about', () => {
    const { getByText, getByTestId } = render(
      <AuthorDetailCard
        avatar={AUTHORS_DATA_MOCK[0].image}
        name={AUTHORS_DATA_MOCK[0].name}
        role={AUTHORS_DATA_MOCK[0].role}
        rating={4.0}
        about={AUTHORS_DATA_MOCK[0].description}
      />,
    );
    expect(getByTestId('avatar-image')).toBeTruthy();
    expect(getByText(AUTHORS_DATA_MOCK[0].name)).toBeTruthy();
    expect(getByText(AUTHORS_DATA_MOCK[0].role)).toBeTruthy();
    expect(getByText('(4.0)')).toBeTruthy();
    expect(getByText(AUTHORS_DATA_MOCK[0].description)).toBeTruthy();
  });
});
