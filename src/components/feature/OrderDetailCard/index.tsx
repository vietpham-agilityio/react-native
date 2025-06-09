import React, { memo, useMemo } from 'react';
import { View } from 'react-native';

// Components
import { Typography } from '@/components/common';

// Styles
import styles from './OrderDetailCard.style';

// Types
import { OrderDetails } from '@/types/models';

// Utils
import {
  caculatorSubtotalOrder,
  caculatorTotalOrder,
} from '@/utils/caculators';

interface OrderDetailCardProps {
  order: OrderDetails;
}

const OrderDetailCard = ({ order }: OrderDetailCardProps) => {
  const { listBooks, shippingFee, deliveryIn, deliveryTime } = order;

  const subtotal = useMemo(
    () => caculatorSubtotalOrder({ listBooks }),
    [listBooks],
  );

  const total = useMemo(
    () => caculatorTotalOrder({ listBooks, shippingFee }),
    [listBooks, shippingFee],
  );

  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        {listBooks.map(({ book, quantity }, idx) => (
          <View key={idx} style={styles.row}>
            <Typography variant="typoMedium" weight="regular">
              {quantity}x {book.title}
            </Typography>
            <Typography variant="typoMedium" weight="regular">
              ${book.price.toFixed(2)}
            </Typography>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Typography variant="typoMedium" weight="medium">
          Subtotal
        </Typography>
        <Typography variant="typoMedium" weight="medium">
          ${subtotal.toFixed(2)}
        </Typography>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Typography variant="typoMedium" weight="medium">
          Shipping
        </Typography>
        <Typography variant="typoMedium" weight="medium">
          ${shippingFee}
        </Typography>
      </View>

      <View style={styles.divider} />

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Typography variant="typoMedium" weight="bold">
            Total Payment
          </Typography>
          <Typography variant="typoMedium" weight="bold" style={styles.total}>
            ${total.toFixed(2)}
          </Typography>
        </View>

        <View style={styles.infoRow}>
          <Typography variant="typoMedium" weight="regular">
            Delivery in
          </Typography>
          <Typography variant="typoMedium" weight="regular">
            {deliveryIn}
          </Typography>
        </View>
        <View style={styles.infoRow}>
          <Typography variant="typoMedium" weight="regular">
            Time
          </Typography>
          <Typography variant="typoMedium" weight="regular">
            {deliveryTime}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default memo(OrderDetailCard);
