import React, { memo, useCallback } from 'react';

import {
  View,
  TouchableWithoutFeedback,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

// Hooks
import { usePlatform } from '@/hooks';

// Gestures
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

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
  const translateY = useSharedValue(0);

  const screenHeight = Dimensions.get('window').height;

  const { isIOS } = usePlatform();

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

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      // Only allow dragging down
      translateY.value = Math.max(event.translationY, 0);
    })
    .onEnd(event => {
      if (event.translationY > screenHeight * 0.2) {
        // Close modal if dragged down more than 20% of screen height
        translateY.value = withTiming(screenHeight, { duration: 300 }, () => {
          runOnJS(handleCloseModal)();
          translateY.value = 0;
        });
      } else {
        // Snap back to original position
        translateY.value = withSpring(0);
      }
    });

  // Animated style for modal content
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.absoluteOverlay}>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.modalContent, animatedStyle]}>
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
          <View style={[styles.buttonWrapper, isIOS && { marginBottom: 8 }]}>
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
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default memo(BookModal);
