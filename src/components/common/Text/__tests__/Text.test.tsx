import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { Text } from '@components/common';

describe('Text Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeTruthy();
  });

  it('passes additional props to Text component', () => {
    const { getByText } = render(
      <Text style={{ color: 'red' }} numberOfLines={2}>
        Multi-line text
      </Text>
    );
    const textElement = getByText('Multi-line text');
    expect(textElement).toBeTruthy();
  });

  it('renders with nested components', () => {
    const { getByText } = render(
      <Text>
        <Text>Nested</Text> Text
      </Text>
    );
    const textElement = getByText('Nested Text');
    expect(textElement).toBeTruthy();
  });
}); 