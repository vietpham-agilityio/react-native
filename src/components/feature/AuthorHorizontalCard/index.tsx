import React from 'react';
import { View, ImageSourcePropType } from 'react-native';

// Components
import { Avatar, Heading, Typography } from '@/components/common';

// Styles
import styles from './AuthorHorizontalCard.style';

interface AuthorHorizontalCardProps {
  image: ImageSourcePropType;
  name: string;
  description: string;
}

const AuthorHorizontalCard = ({
  image,
  name,
  description,
}: AuthorHorizontalCardProps) => {
  return (
    <View style={styles.container}>
      <Avatar source={image} size={68} />
      <View style={styles.info}>
        <Heading level={5}>{name}</Heading>
        <Typography
          variant="typoMedium"
          weight="regular"
          style={styles.description}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

export default AuthorHorizontalCard;
