import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { ReceivedOrderContent } from '@/components/feature';

describe('ReceivedOrderContent', () => {
  it('renders image, title, and order number', () => {
    const orderNumber = 2930541;
    const { getByText, getByTestId } = render(
      <ReceivedOrderContent orderNumber={orderNumber} />,
    );
    expect(getByTestId('received-order-image')).toBeTruthy();
    expect(getByText('You Received The Order!')).toBeTruthy();
    expect(getByText(`Order #${orderNumber}`)).toBeTruthy();
  });
});
