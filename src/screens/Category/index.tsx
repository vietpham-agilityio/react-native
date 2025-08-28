import React, { useCallback } from 'react';
import { View } from 'react-native';

// Components
import {
  ListCategories,
  BookCard,
  HorizontalList,
  StatusBar,
  BookSkeleton,
  ErrorFeedback,
  Typography,
} from '@/components';

// Styles
import styles from './Category.style';

// Constant
import { ROUTES } from '@/constants/route';

// Hooks
import { useBooks } from '@/hooks';

// Types
import { Book } from '@/types/models';

// Utils
import { extractImageUrl } from '@/utils';

const CategoryScreen = ({ navigation }: { navigation: any }) => {
  const { data: books, error, isLoading } = useBooks();

  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(ROUTES.BOOK_DETAIL, { book });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: Book }) => {
      const { id, title, price } = item;
      return (
        <BookCard
          key={id}
          image={{ uri: extractImageUrl(item.coverImage) }}
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

  if (isLoading) {
    return <BookSkeleton />;
  }

  if (error) {
    return <ErrorFeedback error={error} />;
  }

  if (!books || books.length === 0) {
    return <Typography>No books found</Typography>;
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <ListCategories />
        <HorizontalList
          data={books}
          numColumns={2}
          windowSize={8}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.row}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default CategoryScreen;
