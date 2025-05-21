import React, { memo } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Components
import { Heading, Typography, Button } from '@/components/common';

// Theme
import { colors, radius } from '@/theme';

interface OfferDiscountCardProps {
  title: string;
  discountPercentage: number;
  image: any;
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: radius.extraSmall,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  offerInfo: {
    padding: 24,
  },
  title: {
    color: colors.textDark,
  },
  subtitle: {
    color: colors.textDark,
    marginBottom: 14,
  },
  image: {
    width: 100,
    height: 144,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default memo(OfferDiscountCard);
