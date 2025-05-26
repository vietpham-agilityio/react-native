import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

// Components
import { Typography } from '@/components/common';

// Styles
import styles from './BookCard.style';

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

export default BookCard;
