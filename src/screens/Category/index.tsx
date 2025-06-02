import React, { useCallback } from 'react';
import { View } from 'react-native';

// Components
import { ListCategories, BookCard, HorizontalList } from '@/components';

// Styles
import styles from './Category.style';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

// Constant
import { ROUTES } from '@/constants/route';

// Types
import { Book } from '@/types/models';

const CategoryScreen = ({ navigation }: { navigation: any }) => {
  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(ROUTES.BOOK_DETAIL, { book });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: Book }) => {
      const { id, image, title, price } = item;
      return (
        <BookCard
          key={id}
          image={image}
          title={title}
          price={price}
          isCategory
          onPress={() => handleBookPress(item)}
        />
      );
    },
    [handleBookPress],
  );

  const keyExtractor = useCallback((item: Book) => item.id, []);

  return (
    <View>
      <View style={styles.container}>
        <ListCategories />
        <HorizontalList
          data={BOOKS_DATA_MOCK}
          numColumns={2}
          windowSize={8}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.row}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
