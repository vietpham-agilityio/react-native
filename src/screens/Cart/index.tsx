import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Components
import { Button, CartItem } from '@/components';

// Theme
import { colors, radius } from '@/theme';

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
        {BOOKS_DATA_MOCK.map(({ image, title, price }) => (
          <CartItem
            key={title}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 0,
    gap: 16,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    gap: 16,
    paddingTop: 8,
    paddingBottom: 34,
  },
  button: {
    borderRadius: radius.extraLarge,
  },
});

export default CartScreen;
