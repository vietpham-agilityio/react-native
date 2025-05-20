import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import RatingStars from '../index';

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

describe('RatingStars', () => {
  it('renders the correct number of stars', () => {
    const { getAllByTestId } = render(<RatingStars rating={3} maxStars={5} />);
    // Should render 3 filled stars and 2 empty stars
    expect(getAllByTestId('star-filled')).toHaveLength(3);
    expect(getAllByTestId('star-empty')).toHaveLength(2);
  });

  it('formats the rating with one decimal place', () => {
    const { getByText } = render(<RatingStars rating={4} />);
    expect(getByText('(4.0)')).toBeTruthy();
  });

  it('renders custom star color', () => {
    const { getAllByTestId } = render(
      <RatingStars rating={2} maxStars={5} starColor="#FF6347" />,
    );
    expect(getAllByTestId('star-filled')).toHaveLength(2);
    expect(getAllByTestId('star-empty')).toHaveLength(3);
  });

  it('renders the correct number of stars for different maxStars', () => {
    const { getAllByTestId } = render(<RatingStars rating={7} maxStars={10} />);
    expect(getAllByTestId('star-filled')).toHaveLength(7);
    expect(getAllByTestId('star-empty')).toHaveLength(3);
  });
});
