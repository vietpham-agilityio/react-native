import React from 'react';
import { View, ScrollView } from 'react-native';

// Components
import {
  AddressCard,
  SummaryCard,
  SelectionCard,
  Button,
  StatusBar,
} from '@/components';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Constants
import { ROUTES } from '@/constants/route';

// Icons
import { CalendarIcon, CreditCardIcon } from '@/icons';

// Styles
import styles from './Checkout.style';

// Theme
import { colors } from '@/theme';

const CheckoutScreen = () => {
  const navigation = useNavigation<any>();

  const handleChangeAddress = () => {};

  const handleChangeDateAndTime = () => {};

  const handleChangePayment = () => {};

  const handleOrder = () => {};

  const handleSeeDetails = () => {
    navigation.navigate(ROUTES.GUSTER_PAYMENT_DETAIL, {
      items: MOCK_PAYMENT_DETAILS,
      total: total + 2,
    });
  };

  const MOCK_PAYMENT_DETAILS = [
    {
      name: 'Squid Sweet and Sour Salad',
      price: 19.99,
    },
    {
      name: 'Japan Hainanese Sashimi',
      price: 39.99,
    },
    {
      name: 'Black Pepper Beef Lumpia',
      price: 27.12,
    },
  ];
  const total = MOCK_PAYMENT_DETAILS.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <StatusBar />
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
            price={total}
            shipping={2}
            total={total + 2}
            onSeeDetails={handleSeeDetails}
          />
          <SelectionCard
            title="Date and time"
            rightIcon={<CalendarIcon color={colors.primary} />}
            label="Date & time"
            description="Choose date and time"
            onPress={handleChangeDateAndTime}
          />
          <SelectionCard
            title="Payment"
            rightIcon={<CreditCardIcon color={colors.primary} />}
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
    </>
  );
};

export default CheckoutScreen;
