import React, { memo, useMemo } from 'react';

import { View } from 'react-native';

// Components
import { Heading, Typography } from '@/components';

// Styles
import styles from './PaymentDetailSheet.style';

interface PaymentItem {
  name: string;
  price: number;
}

interface PaymentDetailSheetProps {
  items: PaymentItem[];
  shipping: number;
}

const PaymentDetailSheet = ({ items, shipping }: PaymentDetailSheetProps) => {
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  );
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  return (
    <View style={styles.sheetContainer}>
      <View style={styles.gestureBar} />
      <Heading level={5} style={styles.title}>
        Payment Details
      </Heading>
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <View style={styles.summaryRow}>
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={styles.summaryLabel}>
              Price
            </Typography>
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={styles.summaryValue}>
              ${subtotal.toFixed(2)}
            </Typography>
          </View>
          <View style={styles.itemsDetailContainer}>
            {items.map((item, index) => (
              <View key={index} style={styles.itemRow}>
                <Typography
                  variant="typoMedium"
                  weight="regular"
                  style={styles.itemName}>
                  {item.name}
                </Typography>
                <Typography
                  variant="typoMedium"
                  weight="regular"
                  style={styles.itemPrice}>
                  ${item.price.toFixed(2)}
                </Typography>
              </View>
            ))}
          </View>
        </View>

        <View>
          {/* Shipping */}
          <View style={styles.summaryRow}>
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={styles.summaryLabel}>
              Shipping
            </Typography>
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={styles.summaryValue}>
              ${shipping}
            </Typography>
          </View>
          {/* Total Payment */}
          <View style={styles.totalRow}>
            <Typography
              variant="typoLarge"
              weight="semibold"
              style={styles.summaryLabel}>
              Total Payment
            </Typography>
            <Typography
              variant="typoLarge"
              weight="bold"
              style={styles.summaryLabel}>
              ${total.toFixed(2)}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(PaymentDetailSheet);
