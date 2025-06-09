import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { OrderDetailCard } from '@/components/feature';

// Mock
import { ORDER_DETAILS_MOCK } from '@/mock/data';

// Utils
import {
  caculatorSubtotalOrder,
  caculatorTotalOrder,
} from '@/utils/caculators';

describe('OrderDetailCard', () => {
  it('renders all book items with correct quantity, title, and price', () => {
    const { getByText } = render(
      <OrderDetailCard order={ORDER_DETAILS_MOCK} />,
    );

    ORDER_DETAILS_MOCK.listBooks.forEach(item => {
      expect(getByText(`${item.quantity}x ${item.book.title}`)).toBeTruthy();
      expect(getByText(`$${item.book.price.toFixed(2)}`)).toBeTruthy();
    });
  });

  it('renders correct subtotal, shipping, and total', () => {
    const { getByText } = render(
      <OrderDetailCard order={ORDER_DETAILS_MOCK} />,
    );
    const subtotal = caculatorSubtotalOrder({
      listBooks: ORDER_DETAILS_MOCK.listBooks,
    });
    const total = caculatorTotalOrder({
      listBooks: ORDER_DETAILS_MOCK.listBooks,
      shippingFee: ORDER_DETAILS_MOCK.shippingFee,
    });

    expect(getByText(`$${subtotal.toFixed(2)}`)).toBeTruthy();
    expect(getByText(`$${ORDER_DETAILS_MOCK.shippingFee}`)).toBeTruthy();
    expect(getByText(`$${total.toFixed(2)}`)).toBeTruthy();
  });

  it('renders delivery in and time info', () => {
    const { getByText } = render(
      <OrderDetailCard order={ORDER_DETAILS_MOCK} />,
    );
    expect(getByText(ORDER_DETAILS_MOCK.deliveryIn)).toBeTruthy();
    expect(getByText(ORDER_DETAILS_MOCK.deliveryTime)).toBeTruthy();
  });
});
