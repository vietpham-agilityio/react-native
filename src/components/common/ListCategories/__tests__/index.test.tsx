import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import ListCategories from '@/components/common/ListCategories';

// Constants
import { LIST_TOPICS } from '@/constants/listData';

describe('ListCategories', () => {
  it('renders all topics', () => {
    const { getByTestId } = render(<ListCategories />);
    LIST_TOPICS.forEach(topic => {
      expect(getByTestId(`topic-item-${topic.label}`)).toBeTruthy();
    });
  });

  it('switches active topic on press', () => {
    const { getByTestId } = render(<ListCategories />);

    const first = getByTestId(`topic-item-${LIST_TOPICS[0].label}`);
    const second = getByTestId(`topic-item-${LIST_TOPICS[1].label}`);

    expect(first.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Bold',
        }),
      ]),
    );

    expect(second.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Regular',
        }),
      ]),
    );

    fireEvent.press(second);

    expect(first.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Regular',
        }),
      ]),
    );

    expect(second.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Bold',
        }),
      ]),
    );
  });
});
