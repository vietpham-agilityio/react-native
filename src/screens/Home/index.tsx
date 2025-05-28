import React, { useCallback } from 'react';
import { Platform, ScrollView, TouchableOpacity, View } from 'react-native';

// Components
import {
  AuthorCard,
  BookCard,
  Carousel,
  Heading,
  HorizontalList,
  OfferDiscountCard,
  Typography,
  VendorCard,
} from '@/components';

// Styles
import styles from './Home.style';

// Mock
import {
  AUTHORS_DATA_MOCK,
  BOOKS_DATA_MOCK,
  VENDOR_DATA_MOCK,
} from '@/mock/data';

// Types
import { Author, Book, Vendor } from '@/types/models';

// Route
import { ROUTES } from '@/constants/route';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const isIOS = Platform.OS === 'ios';

  const handleClickTopWeekSeeAll = useCallback(() => {
    navigation.navigate(ROUTES.CATEGORY);
  }, [navigation]);

  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(ROUTES.BOOK_DETAIL, { book });
    },
    [navigation],
  );

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          isIOS ? { paddingBottom: 100 } : { paddingBottom: 80 }
        }
        style={styles.carouselSection}>
        <Carousel
          listItems={BOOKS_DATA_MOCK.slice(0, 5).map((book: Book) => {
            const { id, image } = book;

            return {
              id,
              item: (
                <OfferDiscountCard
                  key={id}
                  title="Special Offer"
                  discountPercentage={25}
                  image={image}
                  onPress={() => handleBookPress(book)}
                />
              ),
            };
          })}
        />
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
            <HorizontalList
              data={BOOKS_DATA_MOCK.slice(0, 5)}
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
            <HorizontalList
              data={VENDOR_DATA_MOCK}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.horizontalList}
              renderItem={({ item }: { item: Vendor }) => (
                <VendorCard key={item.id} image={item.image} name={item.name} />
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
            <HorizontalList
              data={AUTHORS_DATA_MOCK.slice(0, 5)}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.horizontalList}
              renderItem={({ item }: { item: Author }) => (
                <AuthorCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  role={item.role}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
