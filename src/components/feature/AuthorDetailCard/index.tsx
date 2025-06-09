import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

// Components
import { Avatar, Typography, Heading, RatingStars } from '@/components/common';

// Styles
import styles from './AuthorDetailCard.style';

interface AuthorDetailCardProps {
  avatar: ImageSourcePropType;
  name: string;
  role: string;
  rating: number;
  about: string;
}

const AuthorDetailCard = ({
  avatar,
  name,
  role,
  rating,
  about,
}: AuthorDetailCardProps) => {
  return (
    <View style={styles.container}>
      <Avatar source={avatar} size={120} />
      <Typography variant="typoLarge" style={styles.role}>
        {role}
      </Typography>
      <Heading level={4} style={styles.name}>
        {name}
      </Heading>
      <View style={styles.rating}>
        <RatingStars rating={rating} isShowRating={true} />
      </View>
      <View>
        <Typography variant="typoLarge" weight="bold" style={styles.aboutLabel}>
          About
        </Typography>
        <Typography variant="typoLarge" style={styles.aboutText}>
          {about}
        </Typography>
      </View>
    </View>
  );
};

export default AuthorDetailCard;
