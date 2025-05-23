import React, { memo, ReactNode, useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ViewToken,
} from 'react-native';

// Components
import { ListDot } from '@/components';

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
          <View style={{ width: width - 48, alignItems: 'center' }}>
            {item}
          </View>
        )}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <ListDot
        count={children.length}
        activeIndex={activeIndex}
        testID="carousel-dot"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default memo(Carousel);
