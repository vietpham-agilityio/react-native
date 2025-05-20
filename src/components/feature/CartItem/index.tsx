import React, { memo } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Components
import { Typography, QuantityControlBar } from '@/components';

// Theme
import { colors, radius } from '@/theme';

interface CartItemProps {
  image: any;
  title: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const CartItem = ({
  image,
  title,
  price,
  quantity,
  onQuantityChange,
}: CartItemProps) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} />
    <View style={styles.info}>
      <Typography style={styles.title} variant="typoLarge" weight="semibold">
        {title}
      </Typography>
      <View style={styles.row}>
        <QuantityControlBar value={quantity} onChange={onQuantityChange} />
        <Typography style={styles.price} variant="typoLarge" weight="medium">
          ${(price * quantity).toFixed(2)}
        </Typography>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.small,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: radius.small,
    marginRight: 8,
    backgroundColor: colors.grayBackground,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.textDark,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  price: {
    color: colors.primary,
  },
});

export default memo(CartItem);
