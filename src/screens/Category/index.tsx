import React, { useCallback, useState } from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';

// Components
import { Header, ListCategories, BookCard, BookModal } from '@/components';

// Theme
import { colors } from '@/theme';

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
      <Header title="Category" showSearchIcon showNotificationDot />
      <View style={styles.container}>
        <ListCategories />
        <FlatList
          data={BOOKS_DATA_MOCK}
          numColumns={2}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: isIOS ? 250 : 170 },
          ]}
          columnWrapperStyle={styles.row}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingTop: 38,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default CategoryScreen;
