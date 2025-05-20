import React, { memo, ReactNode, useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ViewToken,
} from 'react-native';

// Theme
import { colors } from '@/theme';

const { width } = Dimensions.get('window');

interface CarouselProps {
  children: ReactNode[];
  style?: object;
}

const Carousel = ({ children, style }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index ?? 0);
      }
    },
  );

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={children}
        testID="carousel-list"
        renderItem={({ item }) => (
          <View style={{ width, alignItems: 'center' }}>{item}</View>
        )}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <View style={styles.dotsContainer}>
        {children.map((_, idx) => {
          const isActive = idx === activeIndex;

          return (
            <View
              key={idx}
              testID="carousel-dot"
              style={[
                styles.dot,
                {
                  width: isActive ? 8 : 4,
                  height: isActive ? 8 : 4,
                  backgroundColor: isActive
                    ? colors.primary
                    : colors.primaryLight,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    borderRadius: 6,
    marginHorizontal: 4,
  },
});

export default memo(Carousel);
