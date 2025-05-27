import React from 'react';

// Components
import { View } from 'react-native';
import { Typography } from '@/components/common';

// Styles
import styles from './RatingStars.style';

// Theme
import { colors } from '@/theme';

// Icons
import { StarIcon } from '@/icons';

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  starColor?: string;
}

const RatingStars = ({
  rating,
  maxStars = 5,
  starColor = colors.warning,
}: RatingStarsProps) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(<StarIcon key={i} color={starColor} testID="star-filled" />);
    } else {
      // Empty star
      stars.push(<StarIcon key={i} color={colors.black} testID="star-empty" />);
    }
  }

  return (
    <View style={styles.container}>
      {stars}
      <Typography variant="typoLarge" weight="semibold">
        {`(${rating.toFixed(1)})`}
      </Typography>
    </View>
  );
};

export default RatingStars;
