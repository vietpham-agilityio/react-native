import React from 'react';
import { ActivityIndicator } from 'react-native';

// Components
import { HorizontalList, Typography } from '@/components/common';
import { BookCard } from '@/components';

// Hooks
import { useBooks } from '@/hooks/useBooks';

// Types
import { Book } from '@/types/models';

// Theme
import { colors } from '@/theme';

// Styles
import styles from '@/screens/Home/Home.style';

import { BOOKS_DATA_MOCK } from '@/mock/data';

const BookList = ({
  handleBookPress,
}: {
  handleBookPress: (book: Book) => void;
}) => {
  const { data: books = [], isLoading, error } = useBooks();

  if (isLoading) {
    return (
      <>
        <ActivityIndicator size="small" color={colors.primary} />
      </>
    );
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  const booksData = books.map(book => ({
    ...book,
    image: book.image || BOOKS_DATA_MOCK[Number(book.id) - 1].image,
  }));

  return (
    <HorizontalList
      data={booksData}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.horizontalList}
      renderItem={({ item }: { item: Book }) => (
        <BookCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          onPress={() => handleBookPress(item)}
        />
      )}
    />
  );
};

export default BookList;
