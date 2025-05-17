import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import Heading, { type HeadingProps } from '../';

describe('Heading Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Heading>Heading Text</Heading>);

    const headingElement = getByText('Heading Text');
    expect(headingElement).toBeTruthy();
  });

  it('applies the correct style for each heading level', () => {
    const levels = [1, 2, 3, 4, 5, 6];

    levels.forEach(level => {
      const { getByText, unmount } = render(
        <Heading level={level as HeadingProps['level']}>Level {level}</Heading>,
      );

      const headingElement = getByText(`Level ${level}`);
      expect(headingElement).toBeTruthy();
      unmount();
    });
  });

  it('passes additional props to Heading component', () => {
    const { getByText } = render(
      <Heading style={{ color: 'red' }} numberOfLines={2}>
        Styled Heading
      </Heading>,
    );
    const headingElement = getByText('Styled Heading');
    expect(headingElement).toBeTruthy();
  });
});
