import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import ListDot from '@/components/common/ListDot';

// Theme
import { colors } from '@/theme';

describe('ListDot', () => {
  it('renders the correct number of dots', () => {
    const { getAllByTestId } = render(
      <ListDot count={4} activeIndex={2} testID="dot" />,
    );
    expect(getAllByTestId('dot')).toHaveLength(4);
  });

  it('highlights the correct active dot', () => {
    const { getAllByTestId } = render(
      <ListDot count={3} activeIndex={1} testID="dot" />,
    );
    const dots = getAllByTestId('dot');

    expect(dots[1].props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: colors.primary,
        }),
      ]),
    );

    expect(dots[0].props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: colors.primaryLight,
        }),
      ]),
    );
  });
});
