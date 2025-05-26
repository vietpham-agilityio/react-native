import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import Carousel, { type CarouselItem } from '../index';
import { View, Text } from 'react-native';

const slides: CarouselItem[] = [
  {
    id: '1',
    item: (
      <View>
        <Text>Slide 1</Text>
      </View>
    ),
  },
  {
    id: '2',
    item: (
      <View>
        <Text>Slide 2</Text>
      </View>
    ),
  },
  {
    id: '3',
    item: (
      <View>
        <Text>Slide 3</Text>
      </View>
    ),
  },
];

describe('Carousel', () => {
  it('renders all children', () => {
    const { getByText } = render(<Carousel listItems={slides} />);
    expect(getByText('Slide 1')).toBeTruthy();
    expect(getByText('Slide 2')).toBeTruthy();
    expect(getByText('Slide 3')).toBeTruthy();
  });

  it('shows the correct active dot on swipe', () => {
    const { getAllByTestId } = render(<Carousel listItems={slides} />);

    const dots = getAllByTestId('carousel-dot');
    expect(dots[0].props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ width: 8, height: 8 }),
      ]),
    );
  });

  it('matches snapshot', () => {
    const tree = render(<Carousel listItems={slides} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
