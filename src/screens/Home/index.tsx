import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import {
  AuthorCard,
  CarouselSection,
  Heading,
  HorizontalList,
  StatusBar,
  Typography,
  VendorCard,
  ListBooksSection,
} from '@/components';

// Styles
import styles from './Home.style';

// Mock
import { AUTHORS_DATA_MOCK, VENDOR_DATA_MOCK } from '@/mock/data';

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
        <CarouselSection handleBookPress={handleBookPress} />
        <View style={styles.sectionsWrapper}>
          {/* Top book week */}
          <ListBooksSection
            title="Top of Week"
            onBookPress={handleBookPress}
            onSeeAllPress={handleClickTopWeekSeeAll}
          />

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
