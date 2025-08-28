import React from 'react';
import { View } from 'react-native';

// Components
import Skeleton from '../Skeleton';

// Styles
import styles from './CarouselSkeleton.style';

const CarouselSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* Carousel Item */}
      <View style={styles.carouselItem}>
        {/* Background Image */}
        <Skeleton width="100%" height={200} borderRadius={16} />

        {/* Overlay Content */}
        <View style={styles.overlay}>
          <Skeleton
            width={120}
            height={24}
            borderRadius={6}
            style={styles.title}
          />
          <Skeleton
            width={80}
            height={16}
            borderRadius={4}
            style={styles.subtitle}
          />
        </View>
      </View>
    </View>
  );
};

export default CarouselSkeleton;
