import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import SummaryCard from '@/components/feature/SummaryCard';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

describe('SummaryCard', () => {
  const price = 87.1;
  const shipping = 2;
  const total = 89.1;

  it('renders price, shipping, and total', () => {
    const { getByText } = render(
      <SummaryCard
        price={price}
        shipping={shipping}
        total={total}
        onSeeDetails={() => {}}
      />,
    );

    expect(getByText('Price')).toBeTruthy();
    expect(getByText('Shipping')).toBeTruthy();
    expect(getByText('Total Payment')).toBeTruthy();
    expect(getByText('$87.10')).toBeTruthy();
    expect(getByText('$2')).toBeTruthy();
    expect(getByText('$89.10')).toBeTruthy();
  });

  it('calls onSeeDetails when See details is pressed', () => {
    const onSeeDetails = jest.fn();
    const { getByText } = render(
      <SummaryCard
        price={price}
        shipping={shipping}
        total={total}
        onSeeDetails={onSeeDetails}
      />,
    );
    fireEvent.press(getByText('See details'));
    expect(onSeeDetails).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = render(
      <SummaryCard
        price={price}
        shipping={shipping}
        total={total}
        onSeeDetails={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
