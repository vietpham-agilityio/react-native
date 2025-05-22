import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

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

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    borderRadius: 6,
    marginHorizontal: 4,
  },
});

export default ListDot;
