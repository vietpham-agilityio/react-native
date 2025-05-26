import React from 'react';
import { FlatList, StyleProp, ViewStyle, FlatListProps } from 'react-native';

interface HorizontalListProps<ItemT> {
  data: ItemT[];
  renderItem: FlatListProps<ItemT>['renderItem'];
  numColumns?: number;
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
