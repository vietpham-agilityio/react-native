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
  isCategory?: boolean;
  onPress: () => void;
}

const BookCard = ({
  image,
  title,
  price,
  isCategory,
  onPress,
}: BookCardProps) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.7}
    onPress={onPress}
    accessibilityRole="button">
    <Image
      source={image}
      style={[
        styles.cover,
        isCategory ? styles.coverCategory : styles.coverBook,
      ]}
      alt={title}
      accessibilityRole="image"
      testID="book-image"
    />
    <Typography
      style={styles.title}
      variant={isCategory ? 'typoLarge' : 'typoMedium'}
      weight="medium">
      {title}
    </Typography>
    <Typography
      style={styles.price}
      variant={isCategory ? 'typoMedium' : 'typoSmall'}
      weight="bold">
      ${price.toFixed(2)}
    </Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  cover: {
    borderRadius: radius.small,
    marginBottom: 8,
    backgroundColor: colors.grayBackground,
    resizeMode: 'cover',
  },
  coverBook: {
    width: 130,
    height: 150,
  },
  coverCategory: {
    width: 160,
    height: 160,
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
