import React from 'react';
import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

// Theme
import { colors, radius } from '@/theme';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: radius.small,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15,
    shadowColor: colors.grayMedium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  logo: {
    width: 70,
    height: 50,
  },
});

export default VendorCard;
