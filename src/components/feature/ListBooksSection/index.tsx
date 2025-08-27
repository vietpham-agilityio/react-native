import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

// Components
import {
  BookCard,
  Heading,
  HorizontalList,
  Typography,
  ErrorFeedback,
} from '@/components';

// Hooks
import { useBooks } from '@/hooks';

// Types
import { Book } from '@/types/models';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './ListBooksSection.style';

interface ListBooksSectionProps {
  title: string;
  onBookPress: (book: Book) => void;
  onSeeAllPress?: () => void;
  showSeeAll?: boolean;
}

const ListBooksSection = ({
  title,
  onBookPress,
  onSeeAllPress,
  showSeeAll = true,
}: ListBooksSectionProps) => {
  const { data: books, isLoading, error } = useBooks();
  const keyExtractor = useCallback((item: Book) => item.id, []);

  const isDisabled = useMemo(() => !!error || isLoading, [error, isLoading]);

  const renderItem = useCallback(
    ({ item }: { item: Book }) => {
      const { id, image, title: bookTitle, price } = item;

      return (
        <BookCard
          key={id}
          image={image}
          title={bookTitle}
          price={price}
          onPress={() => onBookPress(item)}
        />
      );
    },
    [onBookPress],
  );

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Heading level={5}>{title}</Heading>
        {showSeeAll && onSeeAllPress && (
          <TouchableOpacity
            onPress={onSeeAllPress}
            disabled={isDisabled}
            activeOpacity={0.7}>
            <Typography
              variant="typoMedium"
              weight="bold"
              style={[
                styles.seeAllText,
                isDisabled && styles.seeAllTextDisabled,
              ]}>
              See all
            </Typography>
          </TouchableOpacity>
        )}
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.primary} />
      ) : error ? (
        <ErrorFeedback error={error} />
      ) : (
        <HorizontalList
          data={books}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.horizontalList}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ListBooksSection;
