import React, { memo, useCallback } from 'react';

import { View, ImageSourcePropType } from 'react-native';

// Components
import {
  BookDetailCard,
  QuantityControlBar,
  Button,
  Heading,
  RatingStars,
  Typography,
} from '@/components';

// Styles
import styles from './BookModal.style';

interface BookModalProps {
  image: ImageSourcePropType;
  title: string;
  brandLogo: ImageSourcePropType;
  description: string;
  isFavorite: boolean;
  price: number;
  rating: number;
  initialQuantity: number;
  onCloseModal: () => void;
  setQuantity: (quantity: number) => void;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
}

const BookModal = ({
  image,
  title,
  brandLogo,
  description,
  isFavorite,
  price,
  rating,
  initialQuantity,
  setQuantity,
  onCloseModal,
  onToggleFavorite,
  onAddToCart,
}: BookModalProps) => {
  // Handlers
  const handleAddToCart = useCallback(() => {
    onAddToCart();
  }, [onAddToCart]);

  const handleCloseModal = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  const handleToggleFavorite = useCallback(() => {
    onToggleFavorite();
  }, [onToggleFavorite]);

  return (
    <View style={styles.container}>
      <View style={styles.gestureBar} />
      <BookDetailCard
        image={image}
        title={title}
        brandLogo={brandLogo}
        description={description}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <View style={styles.reviewWrapper}>
        <Heading level={5} style={styles.title}>
          Review
        </Heading>
        <RatingStars rating={rating} />
      </View>
      <View style={styles.quantityControlBarWrapper}>
        <QuantityControlBar
          value={initialQuantity}
          onChange={setQuantity}
          min={1}
          max={10}
        />
        <Typography
          variant="typoLarge"
          weight="semibold"
          style={styles.priceText}>
          ${initialQuantity * price}
        </Typography>
      </View>
      <View style={[styles.buttonWrapper]}>
        <Button
          title="Continue shopping"
          onPress={handleCloseModal}
          size="medium"
          variant="primary"
        />
        <Button
          title="View cart"
          onPress={handleAddToCart}
          size="medium"
          variant="secondary"
        />
      </View>
    </View>
  );
};

export default memo(BookModal);
