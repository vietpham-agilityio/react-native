import React from 'react';
import { View } from 'react-native';

// Components
import Skeleton from '../Skeleton';

// Styles
import styles from './BookSkeleton.style';

const BookSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* Book Image - Match BookCard dimensions */}
      <Skeleton width={130} height={150} borderRadius={8} />

      {/* Book Title */}
      <Skeleton width={110} height={16} borderRadius={4} style={styles.title} />

      {/* Book Price */}
      <Skeleton width={70} height={14} borderRadius={4} style={styles.price} />
    </View>
  );
};

export default BookSkeleton;
