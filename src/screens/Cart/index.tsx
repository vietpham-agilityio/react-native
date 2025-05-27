import React from 'react';
import { View, ScrollView } from 'react-native';

// Components
import { Button, CartItem } from '@/components';

// Styles
import styles from './Cart.style';

// Mock
import { BOOKS_DATA_MOCK } from '@/mock/data';

const CartScreen = ({ navigation }: { navigation: any }) => {
  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const handleContinueShopping = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {BOOKS_DATA_MOCK.slice(0, 2).map(({ id, image, title, price }) => (
          <CartItem
            key={id}
            image={image}
            title={title}
            price={price}
            quantity={2}
            onQuantityChange={() => {}}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Checkout"
          size="medium"
          variant="primary"
          onPress={handleCheckout}
          style={styles.button}
        />
        <Button
          title="Continue shopping"
          size="medium"
          variant="secondary"
          onPress={handleContinueShopping}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default CartScreen;
