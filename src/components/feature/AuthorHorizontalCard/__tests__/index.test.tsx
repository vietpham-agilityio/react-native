import React from 'react';
import { render } from '@testing-library/react-native';

// Component
import { AuthorHorizontalCard } from '@/components/feature';

// Mock
import { AUTHORS_DATA_MOCK } from '@/mock/data';

describe('AuthorHorizontalCard', () => {
  it('renders author name, description, and avatar', () => {
    const { getByText, getByTestId } = render(
      <AuthorHorizontalCard
        image={AUTHORS_DATA_MOCK[0].image}
        name={AUTHORS_DATA_MOCK[0].name}
        description={AUTHORS_DATA_MOCK[0].role}
      />,
    );
    expect(getByText(AUTHORS_DATA_MOCK[0].name)).toBeTruthy();
    expect(getByText(AUTHORS_DATA_MOCK[0].role)).toBeTruthy();
    expect(getByTestId('avatar-image')).toBeTruthy();
  });
});
