import React, { memo, ReactNode, useRef, useState } from 'react';
import { View, FlatList, Dimensions, ViewToken } from 'react-native';

// Styles
import styles from './Carousel.style';

// Components
import { ListDot } from '@/components';

const { width } = Dimensions.get('window');

export interface CarouselItem {
  id: string;
  item: ReactNode;
}

interface CarouselProps {
  listItems: CarouselItem[];
  style?: object;
}

const Item = ({ item }: { item: CarouselItem }) => {
  return (
    <View style={{ width: width - 48, alignItems: 'center' }}>{item.item}</View>
  );
};

const Carousel = ({ listItems, style }: CarouselProps) => {
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
        horizontal
        pagingEnabled
        testID="carousel-list"
        data={listItems}
        renderItem={({ item }: { item: CarouselItem }) => <Item item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <ListDot
        count={listItems.length}
        activeIndex={activeIndex}
        testID="carousel-dot"
      />
    </View>
  );
};

export default memo(Carousel);
