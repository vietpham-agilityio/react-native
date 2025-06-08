import React from 'react';
import { render } from '@testing-library/react-native';

// Component
import { Avatar } from '@/components/common';

// Mock
import { AUTHORS_DATA_MOCK } from '@/mock/data';

// Test
describe('Avatar', () => {
  it('renders with default size', () => {
    const { getByTestId } = render(
      <Avatar source={AUTHORS_DATA_MOCK[0].image} />,
    );
    const image = getByTestId('avatar-image');
    expect(image.props.style[0].width).toBe(40);
    expect(image.props.style[0].height).toBe(40);
  });

  it('renders with custom size', () => {
    const { getByTestId } = render(
      <Avatar source={AUTHORS_DATA_MOCK[0].image} size={80} />,
    );
    const image = getByTestId('avatar-image');
    expect(image.props.style[0].width).toBe(80);
    expect(image.props.style[0].height).toBe(80);
  });

  it('applies custom style', () => {
    const { getByTestId } = render(
      <Avatar source={AUTHORS_DATA_MOCK[0].image} style={{ borderWidth: 2 }} />,
    );
    const image = getByTestId('avatar-image');
    expect(image.props.style[1].borderWidth).toBe(2);
  });
});
