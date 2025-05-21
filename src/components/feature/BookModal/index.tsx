import React, { memo, useCallback } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

// Components
import { BookDetailCard, QuantityControlBar } from '@/components/feature';
import { Button, Heading, RatingStars, Typography } from '@/components/common';

// Theme
import { colors } from '@/theme';

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  modalContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 42,
    alignItems: 'stretch',
  },
  quantityControlBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
    marginBottom: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: colors.textDark,
  },
  reviewWrapper: {
    gap: 8,
  },
  priceText: {
    color: colors.primary,
  },
});

export default memo(BookModal);
