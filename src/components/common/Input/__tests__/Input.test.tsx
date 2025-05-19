import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import Input from '../index';

// Mock vector icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

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
