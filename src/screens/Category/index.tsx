import React, { useCallback, useState } from 'react';
import { View, Platform } from 'react-native';

// Components
import {
  ListCategories,
  BookCard,
  BookModal,
  HorizontalList,
} from '@/components';

// Styles
import styles from './Category.style';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const CategoryScreen = ({ navigation }: { navigation: any }) => {
  const isIOS = Platform.OS === 'ios';
  const [isBookDetailModalVisible, setIsBookDetailModalVisible] =
    useState(false);

  const [selectedBook, setSelectedBook] = useState<any | null>(
    BOOKS_DATA_MOCK[0],
  );

  const handleBookPress = useCallback((book: any) => {
    setSelectedBook(book);
    setIsBookDetailModalVisible(true);
  }, []);

  const handleAddToCart = useCallback(() => {
    setIsBookDetailModalVisible(false);
    navigation.navigate('Cart');
  }, [navigation]);

  const handleCloseModal = useCallback(() => {
    setIsBookDetailModalVisible(false);
  }, []);

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
      <BookModal
        visible={isBookDetailModalVisible}
        onCloseModal={handleCloseModal}
        book={{
          image: selectedBook.image,
          title: selectedBook.title,
          brandLogo: selectedBook.vendor.image,
          description: selectedBook.description,
          isFavorite: false,
          price: selectedBook.price,
          rating: selectedBook.rating,
        }}
        onAddToCart={handleAddToCart}
        onToggleFavorite={() => {}}
        quantity={1}
        setQuantity={() => {}}
      />
    </View>
  );
};

export default CategoryScreen;
