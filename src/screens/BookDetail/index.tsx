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
        visible={true}
        image={book.image}
        title={book.title}
        brandLogo={book.vendor.image}
        description={book.description}
        isFavorite={false}
        price={book.price}
        rating={book.rating}
        onCloseModal={handleClose}
        onAddToCart={handleAddToCart}
        onToggleFavorite={() => {}}
        quantity={1}
        setQuantity={() => {}}
      />
    </>
  );
};

export default BookDetail;
