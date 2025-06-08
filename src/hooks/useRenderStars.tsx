import React from 'react';

// Icons
import { StarIcon, StarSmallIcon } from '@/icons';

// Theme
import { colors } from '@/theme';

interface UseRenderStarsProps {
  rating: number;
  maxStars: number;
  starColor?: string;
  isSmall?: boolean;
}

const useRenderStars = ({
  rating,
  maxStars,
  starColor = colors.warning,
  isSmall = false,
}: UseRenderStarsProps) => {
  const stars = [];

  const StarIconComponent = isSmall ? StarSmallIcon : StarIcon;

  for (let i = 1; i <= maxStars; i++) {
    i <= Math.floor(rating)
      ? // Full star
        stars.push(
          <StarIconComponent key={i} color={starColor} testID="star-filled" />,
        )
      : // Empty star
        stars.push(
          <StarIconComponent
            key={i}
            color={colors.black}
            testID="star-empty"
          />,
        );
  }

  return stars;
};

export default useRenderStars;
