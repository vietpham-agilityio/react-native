import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import NotificationHeaderButton from '@/components/feature/NotificationHeaderButton';

describe('NotificationHeaderButton', () => {
  it('renders correctly with default props', () => {
    const { getByRole } = render(<NotificationHeaderButton />);
    const button = getByRole('button');

    expect(button).toBeTruthy();
  });

  it('shows badge by default', () => {
    const { getByTestId } = render(<NotificationHeaderButton />);
    const badge = getByTestId('notification-badge');

    expect(badge).toBeTruthy();
  });

  it('hides badge when showBadge is false', () => {
    const { queryByTestId } = render(
      <NotificationHeaderButton showBadge={false} />,
    );
    const badge = queryByTestId('notification-badge');

    expect(badge).toBeNull();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <NotificationHeaderButton onPress={onPress} />,
    );
    const button = getByRole('button');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
