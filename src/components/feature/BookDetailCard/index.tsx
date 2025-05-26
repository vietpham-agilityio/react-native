import React, { useCallback, useState, memo } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

// Components
import { Typography, Heading } from '@/components';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './BookDetailCard.style';

interface BookDetailCardProps {
  image: any;
  title: string;
  brandLogo: any;
  description: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const BookDetailCard = ({
  image,
  title,
  brandLogo,
  description,
  isFavorite,
  onToggleFavorite,
}: BookDetailCardProps) => {
  const [isFavoritedBook, setIsFavoritedBook] = useState(isFavorite);

  const handleToggleFavorite = useCallback(() => {
    setIsFavoritedBook(!isFavoritedBook);
    onToggleFavorite();
  }, [isFavoritedBook, onToggleFavorite]);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} alt={title} />
      </View>
      <View style={styles.contentWrapper}>
        <Heading level={4} style={styles.title}>
          {title}
        </Heading>
        <TouchableWithoutFeedback
          testID="favorite-btn"
          onPress={handleToggleFavorite}
          accessibilityRole="button">
          <Icon
            name="heart"
            size={24}
            color={isFavoritedBook ? colors.primary : colors.grayMedium}
          />
        </TouchableWithoutFeedback>
      </View>
      <Image
        source={brandLogo}
        style={styles.brandLogo}
        resizeMode="contain"
        alt="vendor logo"
      />
      <Typography variant="typoSmall" style={styles.description}>
        {description}
      </Typography>
    </View>
  );
};

export default memo(BookDetailCard);
