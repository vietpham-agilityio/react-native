import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import Carousel from '../index';
import { View, Text } from 'react-native';

const slides = [
  <View key="1">
    <Text>Slide 1</Text>
  </View>,
  <View key="2">
    <Text>Slide 2</Text>
  </View>,
  <View key="3">
    <Text>Slide 3</Text>
  </View>,
];

describe('Carousel', () => {
  it('renders all children', () => {
    const { getByText } = render(<Carousel>{slides}</Carousel>);
    expect(getByText('Slide 1')).toBeTruthy();
    expect(getByText('Slide 2')).toBeTruthy();
    expect(getByText('Slide 3')).toBeTruthy();
  });

  it('shows the correct active dot on swipe', () => {
    const { getAllByTestId } = render(<Carousel>{slides}</Carousel>);

    const dots = getAllByTestId('carousel-dot');
    expect(dots[0].props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ width: 8, height: 8 }),
      ]),
    );
  });

  //   it('changes active dot when swiped', () => {
  //     const { getByTestId, getAllByTestId } = render(
  //       <Carousel>{slides}</Carousel>,
  //     );
  //     const flatList = getByTestId('carousel-list');

  //     fireEvent.scroll(flatList, {
  //       nativeEvent: {
  //         contentOffset: { x: -400, y: 0 },
  //         contentSize: { width: 1200, height: 200 },
  //         layoutMeasurement: { width: 400, height: 200 },
  //       },
  //     });

  //     const dots = getAllByTestId('carousel-dot');
  //     expect(dots[1].props.style).toEqual(
  //       expect.arrayContaining([
  //         expect.objectContaining({ width: 8, height: 8 }),
  //       ]),
  //     );
  //   });

  it('matches snapshot', () => {
    const tree = render(<Carousel>{slides}</Carousel>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
