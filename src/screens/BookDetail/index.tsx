import React from 'react';

import { BookModal as BookDetailScreen, StatusBar } from '@/components';

// Constants
import { ROUTES } from '@/constants/route';

// Navigation
import { useNavigation, useRoute } from '@react-navigation/native';

// Types
import { Book } from '@/types/models';

const BookDetail = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();

  const { book } = route.params as { book: Book };
  const { image, title, price, rating, description, vendor } = book;

  const handleAddToCart = () => {
    navigation.goBack();

    setTimeout(() => {
      navigation.navigate(ROUTES.MAIN, { screen: ROUTES.CART });
    }, 300);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar />
      <BookDetailScreen
        image={image}
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
