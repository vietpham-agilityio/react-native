import React, { useCallback } from 'react';
import { View, Platform } from 'react-native';

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
  const isIOS = Platform.OS === 'ios';

  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(ROUTES.BOOK_DETAIL, { book });
    },
    [navigation],
  );

  return (
    <View>
      <View style={styles.container}>
        <ListCategories />
        <HorizontalList
          data={BOOKS_DATA_MOCK}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: isIOS ? 250 : 170 },
          ]}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <BookCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              isCategory
              onPress={() => handleBookPress(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
