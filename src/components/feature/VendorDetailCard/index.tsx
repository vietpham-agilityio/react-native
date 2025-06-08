import React, { memo } from 'react';

import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import { Typography, RatingStars } from '@/components/common';

// Styles
import styles from './VendorDetailCard.style';

interface VendorDetailCardProps {
  image: ImageSourcePropType;
  name: string;
  rating?: number;
  onPress?: () => void;
}

const VendorDetailCard = ({
  image,
  name,
  rating = 4,
  onPress,
}: VendorDetailCardProps) => (
  <TouchableOpacity
    style={styles.card}
    accessibilityRole="button"
    onPress={onPress}
    activeOpacity={0.7}
    testID="vendor-detail-card">
    <View style={styles.logoContainer}>
      <Image
        source={image}
        style={styles.logo}
        resizeMode="contain"
        alt={name}
        testID="vendor-detail-card-image"
      />
    </View>
    <Typography variant="typoLarge" weight="medium" style={styles.name}>
      {name}
    </Typography>
    <View style={styles.starsContainer}>
      <RatingStars rating={rating} isSmall isShowRating={false} />
    </View>
  </TouchableOpacity>
);

export default memo(VendorDetailCard);
