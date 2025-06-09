import React, { useCallback, useState, memo } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Components
import { Heading, Typography } from '@/components/common';

// Theme
import { colors } from '@/theme';

// Icons
import StarLargeIcon from '@/icons/StarLargeIcon';

// Styles
import styles from './GiveFeebackCard.style';

interface GiveFeedbackCardProps {
  description: string;
  rating: number;
  placeholder?: string;
  onRatingChange: (rating: number) => void;
}

const MAX_STARS = 5;

const GiveFeedbackCard = ({
  description,
  onRatingChange,
  placeholder = 'Write something for us!',
}: GiveFeedbackCardProps) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = useCallback(
    (newRating: number) => {
      onRatingChange(newRating);
      setRating(newRating);
    },
    [onRatingChange],
  );

  const renderVoteStars = useCallback(() => {
    return Array.from({ length: MAX_STARS }).map((_, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => handleRatingChange(i + 1)}
        activeOpacity={0.7}
        style={styles.starTouchable}
        testID={`star-${i + 1}`}>
        <StarLargeIcon color={i < rating ? colors.warning : colors.grayLight} />
      </TouchableOpacity>
    ));
  }, [rating, handleRatingChange]);

  return (
    <View style={styles.container}>
      <Heading level={5} style={styles.title}>
        Tell us your feedback 🫶
      </Heading>
      <Typography variant="typoXLarge" style={styles.description}>
        {description}
      </Typography>
      <View style={styles.starsRow}>{renderVoteStars()}</View>
      <Typography
        variant="typoLarge"
        weight="regular"
        style={styles.placeholder}>
        {placeholder}
      </Typography>
    </View>
  );
};

export default memo(GiveFeedbackCard);
