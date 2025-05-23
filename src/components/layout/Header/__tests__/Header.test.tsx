import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import Header from '@/components/layout/Header';

describe('Header', () => {
  it('renders the home title', () => {
    const { getByText } = render(<Header title="Home" />);
    expect(getByText('Home')).toBeTruthy();
  });

  it('calls onPressSearch when search icon is pressed', () => {
    const onPressSearch = jest.fn();
    const { getByRole } = render(
      <Header title="Home" showSearchIcon onPressSearch={onPressSearch} />,
    );
    fireEvent.press(getByRole('button'));

    expect(onPressSearch).toHaveBeenCalled();
  });

  it('calls onPressNotification when notification icon is pressed', () => {
    const onPressNotification = jest.fn();
    const { getByRole } = render(
      <Header
        title="Home"
        showNotificationDot
        onPressNotification={onPressNotification}
      />,
    );
    fireEvent.press(getByRole('button'));

    expect(onPressNotification).toHaveBeenCalled();
  });

  it('shows notification dot when showNotificationDot is true', () => {
    const { getByTestId } = render(<Header title="Home" showNotificationDot />);
    expect(getByTestId('notification-dot')).toBeTruthy();
  });
});
