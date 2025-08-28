import React from 'react';
import { View } from 'react-native';

// Components
import Skeleton from '../Skeleton';

// Styles
import styles from './BookSkeleton.style';

const BookSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* Book Image */}
      <Skeleton width={120} height={160} borderRadius={12} />

      {/* Book Title */}
      <Skeleton width={100} height={16} borderRadius={4} style={styles.title} />

      {/* Book Price */}
      <Skeleton width={60} height={14} borderRadius={4} style={styles.price} />
    </View>
  );
};

export default BookSkeleton;
