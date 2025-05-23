import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import {
  AuthorCard,
  BookCard,
  BookModal,
  Carousel,
  Header,
  Heading,
  OfferDiscountCard,
  Typography,
  VendorCard,
} from '@/components';

// Theme
import { colors } from '@/theme';

// Mock
import {
  AUTHORS_DATA_MOCK,
  BOOKS_DATA_MOCK,
  VENDOR_DATA_MOCK,
} from '@/mock/data';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const isIOS = Platform.OS === 'ios';

  const [isBookDetailModalVisible, setIsBookDetailModalVisible] =
    useState(false);

  const [selectedBook, setSelectedBook] = useState<any | null>(
    BOOKS_DATA_MOCK[0],
  );

  const handleClickTopWeekSeeAll = useCallback(() => {
    navigation.navigate('Category');
  }, [navigation]);

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
    <View style={styles.screenContainer}>
      <Header title="Home" showSearchIcon showNotificationDot />
      <ScrollView
        style={styles.carouselSection}
        contentContainerStyle={
          isIOS ? { paddingBottom: 100 } : { paddingBottom: 80 }
        }
        showsVerticalScrollIndicator={false}>
        <Carousel>
          {BOOKS_DATA_MOCK.slice(0, 5).map(book => (
            <OfferDiscountCard
              key={book.id}
              title="Special Offer"
              discountPercentage={25}
              image={book.image}
              onPress={() => handleBookPress(book)}
            />
          ))}
        </Carousel>
        <View style={styles.sectionsWrapper}>
          {/* Top book week */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Heading level={5}>Top of Week</Heading>
              <TouchableOpacity
                onPress={handleClickTopWeekSeeAll}
                activeOpacity={0.8}>
                <Typography
                  variant="typoMedium"
                  weight="bold"
                  style={styles.seeAllText}>
                  See all
                </Typography>
              </TouchableOpacity>
            </View>
            <FlatList
              data={BOOKS_DATA_MOCK.slice(0, 5)}
              horizontal
              keyExtractor={item => item.id}
              contentContainerStyle={styles.horizontalList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <BookCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  onPress={() => handleBookPress(item)}
                />
              )}
            />
          </View>

          {/* Best vendors */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Heading level={5}>Best Vendors</Heading>
              <Typography
                variant="typoMedium"
                weight="bold"
                style={styles.seeAllText}>
                See all
              </Typography>
            </View>
            <FlatList
              data={VENDOR_DATA_MOCK}
              horizontal
              keyExtractor={item => item.id}
              contentContainerStyle={styles.horizontalList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <VendorCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  onPress={() => {}}
                />
              )}
            />
          </View>

          {/* Authors */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Heading level={5}>Authors</Heading>
              <Typography
                variant="typoMedium"
                weight="bold"
                style={styles.seeAllText}>
                See all
              </Typography>
            </View>
            <FlatList
              data={AUTHORS_DATA_MOCK.slice(0, 5)}
              horizontal
              keyExtractor={item => item.id}
              contentContainerStyle={styles.horizontalList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <AuthorCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  role={item.role}
                  onPress={() => {}}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
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
  screenContainer: {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  carouselSection: {
    paddingTop: 16,
  },
  sectionsWrapper: {
    marginTop: 26,
    gap: 32,
  },
  sectionContainer: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllText: {
    color: colors.primary,
  },
  horizontalList: {
    gap: 16,
  },
});

export default HomeScreen;
