import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Components
import { AddressCard, SummaryCard, SelectionCard, Button } from '@/components';

// Theme
import { colors, radius } from '@/theme';

const CheckoutScreen = ({ navigation }: { navigation: any }) => {
  const handleChangeAddress = () => {};

  const handleChangeDateAndTime = () => {};

  const handleChangePayment = () => {};

  const handleOrder = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <AddressCard
          address="Utama Street No.20"
          addressDetail="Dumbo Street No.20, Dumbo, New York 10001, United States"
          onChange={handleChangeAddress}
        />
        <SummaryCard
          price={87.1}
          shipping={2}
          total={89.1}
          onSeeDetails={() => {}}
        />
        <SelectionCard
          title="Date and time"
          iconName="calendar"
          label="Date & time"
          description="Choose date and time"
          onPress={handleChangeDateAndTime}
        />
        <SelectionCard
          title="Payment"
          iconName="credit-card"
          label="Payment"
          description="Choose your payment"
          onPress={handleChangePayment}
        />

        <Button
          title="Order"
          size="medium"
          variant="primary"
          onPress={handleOrder}
          style={styles.orderButton}
        />
      </ScrollView>
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
  orderButton: {
    marginTop: 22,
    marginBottom: 34,
    borderRadius: radius.extraLarge,
  },
});

export default CheckoutScreen;
