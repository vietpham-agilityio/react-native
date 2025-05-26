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

interface AuthorCardProps {
  image: ImageSourcePropType;
  name: string;
  role: string;
  onPress?: () => void;
}

const AuthorCard = ({ image, name, role, onPress }: AuthorCardProps) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button">
    <Image
      source={image}
      style={styles.avatar}
      alt={name}
      accessibilityRole="image"
      testID="author-image"
    />
    <Typography style={styles.name} variant="typoLarge" weight="medium">
      {name}
    </Typography>
    <Typography style={styles.role} variant="typoMedium" weight="regular">
      {role}
    </Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  avatar: {
    width: 102,
    height: 102,
    borderRadius: radius.large,
    marginBottom: 14,
    backgroundColor: colors.grayBackground,
  },
  name: {
    color: colors.textDark,
    marginBottom: 4,
  },
  role: {
    color: colors.grayMedium,
  },
});

export default AuthorCard;
