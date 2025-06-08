import React from 'react';

// Components
import { View } from 'react-native';
import { Typography } from '@/components/common';

// Styles
import styles from './RatingStars.style';

// Theme
import { colors } from '@/theme';

// Hooks
import { useRenderStars } from '@/hooks';

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  starColor?: string;
  isSmall?: boolean;
  isShowRating?: boolean;
}

const RatingStars = ({
  rating,
  isSmall = false,
  maxStars = 5,
  starColor = colors.warning,
  isShowRating = true,
}: RatingStarsProps) => {
  const stars = useRenderStars({ rating, maxStars, starColor, isSmall });

  return (
    <View style={styles.container}>
      {stars}
      {isShowRating && (
        <Typography variant="typoLarge" weight="semibold">
          {`(${rating.toFixed(1)})`}
        </Typography>
      )}
    </View>
  );
};

export default RatingStars;
