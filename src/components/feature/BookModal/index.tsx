import React, { memo, useCallback } from 'react';
import { Modal, View, TouchableWithoutFeedback, Platform } from 'react-native';

// Components
import { BookDetailCard, QuantityControlBar } from '@/components/feature';
import { Button, Heading, RatingStars, Typography } from '@/components/common';

// Styles
import styles from './BookModal.style';

interface BookModalProps {
  visible: boolean;
  onCloseModal: () => void;
  book: {
    image: any;
    title: string;
    brandLogo: any;
    description: string;
    isFavorite: boolean;
    price: number;
    rating: number;
  };
  quantity: number;
  setQuantity: (quantity: number) => void;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
}

const BookModal = ({
  visible,
  onCloseModal,
  book,
  quantity,
  setQuantity,
  onToggleFavorite,
  onAddToCart,
}: BookModalProps) => {
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
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleCloseModal}>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContent}>
        <BookDetailCard
          image={book.image}
          title={book.title}
          brandLogo={book.brandLogo}
          description={book.description}
          isFavorite={book.isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
        <View style={styles.reviewWrapper}>
          <Heading level={5} style={styles.title}>
            Review
          </Heading>
          <RatingStars rating={book.rating} />
        </View>
        <View style={styles.quantityControlBarWrapper}>
          <QuantityControlBar
            value={quantity}
            onChange={setQuantity}
            min={1}
            max={10}
          />
          <Typography
            variant="typoLarge"
            weight="semibold"
            style={styles.priceText}>
            ${quantity * book.price}
          </Typography>
        </View>
        <View
          style={[
            styles.buttonWrapper,
            Platform.OS === 'ios' && { marginBottom: 8 },
          ]}>
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
    </Modal>
  );
};

export default memo(BookModal);
