import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { ConfirmOrderThumbnail } from '@/components/feature';

describe('ConfirmOrderThumbnail', () => {
  const orderNumber = 2930541;

  it('renders subtitle, title, and order number', () => {
    const { getByText } = render(
      <ConfirmOrderThumbnail
        orderNumber={orderNumber}
        subtitle="Thank you 👋"
      />,
    );
    expect(getByText(/Thank you/)).toBeTruthy();
    expect(getByText('Bring your favorite book to you!')).toBeTruthy();
    expect(getByText(`Order #${orderNumber}`)).toBeTruthy();
  });

  it('renders default subtitle if not provided', () => {
    const { getByText } = render(
      <ConfirmOrderThumbnail orderNumber={orderNumber} />,
    );
    expect(getByText(/Thank you/)).toBeTruthy();
    expect(getByText(`Order #${orderNumber}`)).toBeTruthy();
  });
});
