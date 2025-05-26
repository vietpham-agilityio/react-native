import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

// Styles
import styles from './VendorCard.style';

interface VendorCardProps {
  image: ImageSourcePropType;
  name: string;
  onPress?: () => void;
}

const VendorCard = ({ image, name, onPress }: VendorCardProps) => (
  <TouchableOpacity
    style={styles.card}
    accessibilityRole="button"
    onPress={onPress}
    activeOpacity={0.7}
    testID="vendor-card">
    <Image
      source={image}
      style={styles.logo}
      resizeMode="contain"
      alt={name}
      testID="vendor-card-image"
    />
  </TouchableOpacity>
);

export default VendorCard;
