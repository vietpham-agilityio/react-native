import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

// Components
import { Typography } from '@/components/common';

// Styles
import styles from './AuthorCard.style';

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

export default AuthorCard;
