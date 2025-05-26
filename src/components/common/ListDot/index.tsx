import React from 'react';
import { View, ViewStyle } from 'react-native';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './ListDot.style';

interface ListDotProps {
  count: number;
  activeIndex: number;
  testID?: string;
  style?: ViewStyle;
}

const ListDot = ({ count, activeIndex, testID, style }: ListDotProps) => (
  <View style={styles.dotsContainer}>
    {Array.from({ length: count }).map((_, idx) => {
      const isActive = idx === activeIndex;

      return (
        <View
          key={idx}
          testID={testID}
          style={[
            style,
            styles.dot,
            {
              width: isActive ? 8 : 4,
              height: isActive ? 8 : 4,
              backgroundColor: isActive ? colors.primary : colors.primaryLight,
            },
          ]}
        />
      );
    })}
  </View>
);

export default ListDot;
