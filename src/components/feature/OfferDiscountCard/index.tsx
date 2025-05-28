import React, { memo } from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

// Components
import { Heading, Typography, Button } from '@/components/common';

// Styles
import styles from './OfferDiscountCard.style';

interface OfferDiscountCardProps {
  title: string;
  discountPercentage: number;
  image: ImageSourcePropType;
  onPress: () => void;
}

const OfferDiscountCard = ({
  title,
  discountPercentage,
  image,
  onPress,
}: OfferDiscountCardProps) => (
  <View style={styles.container}>
    <View style={styles.offerInfo}>
      <View>
        <Heading level={4} style={styles.title}>
          {title}
        </Heading>
        <Typography variant="typoMedium" style={styles.subtitle}>
          Discount {discountPercentage}%
        </Typography>
      </View>
      <Button
        title="Order Now"
        size="small"
        variant="primary"
        onPress={onPress}
        textStyle={styles.buttonText}
      />
    </View>
    <Image source={image} style={styles.image} resizeMode="cover" />
  </View>
);

export default memo(OfferDiscountCard);
