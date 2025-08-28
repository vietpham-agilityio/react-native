import React, { useMemo } from 'react';

import { BookModal as BookDetailScreen, StatusBar } from '@/components';

// Constants
import { ROUTES } from '@/constants/route';

// Navigation
import { useNavigation, useRoute } from '@react-navigation/native';

// Types
import { Book } from '@/types/models';

// Utils
import { extractImageUrl } from '@/utils';

const BookDetail = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();

  const { book } = route.params as { book: Book };
  const { title, price, rating, description } = book;

  // Provide fallback vendor since Strapi data doesn't include vendor
  const vendor = book.vendor || {
    id: '1',
    name: 'Default Vendor',
    image: require('@assets/images/vendors/ware-house.webp'),
  };

  const handleAddToCart = () => {
    navigation.goBack();

    setTimeout(() => {
      navigation.navigate(ROUTES.MAIN, { screen: ROUTES.CART });
    }, 300);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const image = useMemo(
    () => extractImageUrl(book.coverImage),
    [book.coverImage],
  );

  return (
    <>
      <StatusBar />
      <BookDetailScreen
        image={{ uri: image || '' }}
        title={title}
        brandLogo={vendor.image}
        description={description}
        isFavorite={false}
        price={price}
        rating={rating}
        onCloseModal={handleClose}
        onAddToCart={handleAddToCart}
        onToggleFavorite={() => {}}
        initialQuantity={1}
        setQuantity={() => {}}
      />
    </>
  );
};

export default BookDetail;
