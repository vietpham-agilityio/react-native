import React from 'react';
import { FlatList, StyleProp, ViewStyle, FlatListProps } from 'react-native';

interface HorizontalListProps<ItemT> {
  data: ItemT[];
  renderItem: FlatListProps<ItemT>['renderItem'];
  numColumns?: number;
  windowSize?: number;
  maxToRenderPerBatch?: number;
  columnWrapperStyle?: StyleProp<ViewStyle>;
  keyExtractor: (item: ItemT, index: number) => string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
}

const HorizontalList = <ItemT,>({
  data,
  renderItem,
  numColumns,
  windowSize = 6,
  maxToRenderPerBatch = 10,
  keyExtractor,
  columnWrapperStyle,
  contentContainerStyle,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
}: HorizontalListProps<ItemT>) => {
  return (
    <FlatList
      data={data}
      {...(numColumns ? { numColumns } : { horizontal: true })}
      maxToRenderPerBatch={maxToRenderPerBatch}
      windowSize={windowSize}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      columnWrapperStyle={columnWrapperStyle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default HorizontalList;
