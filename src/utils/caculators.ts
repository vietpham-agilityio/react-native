import { OrderBookItem } from '@/types/models';

export const caculatorSubtotalOrder = ({
  listBooks,
}: {
  listBooks: OrderBookItem[];
}) => listBooks.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

export const caculatorTotalOrder = ({
  listBooks,
  shippingFee,
}: {
  listBooks: OrderBookItem[];
  shippingFee: number;
}) => caculatorSubtotalOrder({ listBooks }) + shippingFee;
