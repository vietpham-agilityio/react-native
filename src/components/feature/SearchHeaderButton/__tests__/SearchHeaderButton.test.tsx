import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import SearchHeaderButton from '@/components/feature/SearchHeaderButton';

describe('SearchHeaderButton', () => {
  it('renders correctly with default props', () => {
    const { getByRole } = render(<SearchHeaderButton />);
    const button = getByRole('button');
    expect(button).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<SearchHeaderButton onPress={onPress} />);
    const button = getByRole('button');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('maintains default styles when custom styles are provided', () => {
    const customStyle = {
      marginLeft: 8,
    };
    const { getByRole } = render(<SearchHeaderButton style={customStyle} />);
    const button = getByRole('button');
    expect(button.props.style).toEqual(
      expect.objectContaining({
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        marginLeft: 8,
        opacity: 1,
        width: 40,
      }),
    );
  });
});
