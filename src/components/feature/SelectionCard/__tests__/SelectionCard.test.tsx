import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import SelectionCard from '@/components/feature/SelectionCard';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

describe('SelectionCard', () => {
  it('renders title, label, and description', () => {
    const { getByText } = render(
      <SelectionCard
        title="Date and time"
        iconName="calendar"
        label="Date & time"
        description="Choose date and time"
        onPress={() => {}}
      />,
    );

    expect(getByText('Date and time')).toBeTruthy();
    expect(getByText('Date & time')).toBeTruthy();
    expect(getByText('Choose date and time')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <SelectionCard
        title="Payment"
        iconName="credit-card"
        label="Payment method"
        description="Choose your payment"
        onPress={onPress}
      />,
    );
    fireEvent.press(getByText('Payment method'));

    expect(onPress).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = render(
      <SelectionCard
        title="Date and time"
        iconName="calendar"
        label="Date & time"
        description="Choose date and time"
        onPress={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
