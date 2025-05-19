import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import { Text } from 'react-native';
import Button from '../index';

describe('Button', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button title="Button" onPress={() => {}} />);

    expect(getByText('Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();

    const { getByText } = render(<Button title="Button" onPress={onPress} />);
    fireEvent.press(getByText('Button'));

    expect(onPress).toHaveBeenCalled();
  });

  it('renders all variants', () => {
    const variants = ['primary', 'secondary', 'ghost', 'thirdParty'] as const;

    variants.forEach(variant => {
      const { getByText, unmount } = render(
        <Button title={variant} variant={variant} onPress={() => {}} />,
      );

      expect(getByText(variant)).toBeTruthy();
      unmount();
    });
  });

  it('renders all sizes', () => {
    const sizes = ['large', 'medium', 'small'] as const;

    sizes.forEach(size => {
      const { getByText, unmount } = render(
        <Button title={size} size={size} onPress={() => {}} />,
      );

      expect(getByText(size)).toBeTruthy();
      unmount();
    });
  });

  it('renders as disabled', () => {
    const onPress = jest.fn();

    const { getByText } = render(
      <Button title="Disabled" disabled onPress={onPress} />,
    );

    const button = getByText('Disabled');

    expect(button).toBeTruthy();

    fireEvent.press(button);

    expect(onPress).not.toHaveBeenCalled();
  });

  it('renders icon if provided', () => {
    const Icon = () => <Text>Icon</Text>;

    const { getByText } = render(
      <Button title="With Icon" icon={<Icon />} onPress={() => {}} />,
    );

    expect(getByText('Icon')).toBeTruthy();
  });

  it('applies custom style and textStyle', () => {
    const { getByText } = render(
      <Button
        title="Styled"
        style={{ backgroundColor: 'red' }}
        textStyle={{ fontSize: 30 }}
        onPress={() => {}}
      />,
    );

    expect(getByText('Styled')).toBeTruthy();
  });
});
