import React from 'react';
import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

// Components
import { Typography } from '@/components/common';

// Theme
import { colors, radius } from '@/theme';

interface BookCardProps {
  image: ImageSourcePropType;
  title: string;
  price: number;
  onPress: () => void;
}

const BookCard = ({ image, title, price, onPress }: BookCardProps) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.7}
    onPress={onPress}
    accessibilityRole="button">
    <Image
      source={image}
      style={styles.cover}
      alt={title}
      accessibilityRole="image"
      testID="book-image"
    />
    <Typography style={styles.title} variant="typoMedium" weight="medium">
      {title}
    </Typography>
    <Typography style={styles.price} variant="typoSmall" weight="bold">
      ${price.toFixed(2)}
    </Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  cover: {
    width: 130,
    height: 150,
    borderRadius: radius.small,
    marginBottom: 8,
    backgroundColor: colors.grayBackground,
    resizeMode: 'cover',
  },
  title: {
    color: colors.textDark,
    marginBottom: 4,
  },
  price: {
    color: colors.primary,
  },
});

export default BookCard;
