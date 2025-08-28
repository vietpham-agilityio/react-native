import React, { useCallback } from 'react';

// Components
import {
  HorizontalList,
  ErrorFeedback,
  BookSkeleton,
  Typography,
} from '@/components/common';
import { BookCard } from '@/components';

// Hooks
import { useBooks } from '@/hooks/useBooks';

// Types
import { Book } from '@/types/models';

// Styles
import styles from '@/screens/Home/Home.style';

import { extractImageUrl } from '@/utils';

const BookList = ({
  handleBookPress,
}: {
  handleBookPress: (book: Book) => void;
}) => {
  const { data: books, isLoading, error } = useBooks();

  const renderBookItem = useCallback(
    ({ item }: { item: Book }) => {
      return (
        <BookCard
          key={item.id}
          image={{ uri: extractImageUrl(item.coverImage) }}
          title={item.title}
          price={item.price}
          onPress={() => handleBookPress(item)}
        />
      );
    },
    [handleBookPress],
  );

  if (isLoading) {
    return <BookSkeleton />;
  }

  if (error) {
    return <ErrorFeedback error={error} />;
  }

  if (!books || books.length === 0) {
    return <Typography>No books data</Typography>;
  }

  return (
    <HorizontalList
      data={books}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.horizontalList}
      renderItem={renderBookItem}
    />
  );
};

export default BookList;
