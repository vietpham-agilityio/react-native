import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

// Components
import {
  AuthorCard,
  BookCard,
  Carousel,
  Heading,
  HorizontalList,
  OfferDiscountCard,
  StatusBar,
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
  const handleClickTopWeekSeeAll = useCallback(() => {
    navigation.navigate(ROUTES.CATEGORY);
  }, [navigation]);

  const handleBookPress = useCallback(
    (book: Book) => {
      navigation.navigate(ROUTES.BOOK_DETAIL, { book });
    },
    [navigation],
  );

  const keyExtractor = useCallback(
    (item: Book | Author | Vendor) => item.id,
    [],
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
          onPress={() => handleBookPress(item)}
        />
      );
    },
    [handleBookPress],
  );

  const renderVendorItem = useCallback(({ item }: { item: Vendor }) => {
    const { id, image, name } = item;
    return <VendorCard key={id} image={image} name={name} />;
  }, []);

  const renderAuthorItem = useCallback(({ item }: { item: Author }) => {
    const { id, image, name, role } = item;
    return <AuthorCard key={id} image={image} name={name} role={role} />;
  }, []);

  return (
    <View style={styles.screenContainer}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContentContainer}
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
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.horizontalList}
              renderItem={renderItem}
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
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.horizontalList}
              renderItem={renderVendorItem}
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
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.horizontalList}
              renderItem={renderAuthorItem}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
