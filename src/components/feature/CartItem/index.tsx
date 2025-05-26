import React, { memo } from 'react';
import { View, Image } from 'react-native';

// Components
import { Typography, QuantityControlBar } from '@/components';

// Styles
import styles from './CartItem.style';

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

export default memo(CartItem);
