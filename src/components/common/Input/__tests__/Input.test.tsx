import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import Input from '../index';

describe('Input Component', () => {
  it('renders label and placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <Input
        label="Email"
        placeholder="Your email"
        value=""
        onChangeText={() => {}}
      />,
    );

    expect(getByText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Your email')).toBeTruthy();
  });

  it('renders left icon', () => {
    const { getByTestId } = render(<Input leftIcon="email" label="Email" />);

    expect(getByTestId('left-icon')).toBeTruthy();
  });

  it('trigger press event on right icon', () => {
    const onRightIconPress = jest.fn();
    const { getByTestId } = render(
      <Input
        rightIcon="eye"
        label="Email"
        onRightIconPress={onRightIconPress}
      />,
    );

    fireEvent.press(getByTestId('right-icon'));

    expect(onRightIconPress).toHaveBeenCalled();
  });

  it('shows error message', () => {
    const { getByText } = render(
      <Input
        label="Email"
        error="Invalid email"
        value=""
        onChangeText={() => {}}
      />,
    );

    expect(getByText('Invalid email')).toBeTruthy();
  });

  it('enforces numeric input for phone', () => {
    let value = '';
    const { getByPlaceholderText } = render(
      <Input
        label="Phone"
        placeholder="(+1)"
        leftIcon="phone"
        value={value}
        onChangeText={text => (value = text.replace(/[^0-9]/g, ''))}
        keyboardType="phone-pad"
      />,
    );
    const input = getByPlaceholderText('(+1)');

    fireEvent.changeText(input, 'abc123');
    expect(value).toBe('123');
  });
});
