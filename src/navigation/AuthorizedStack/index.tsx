import React, { useCallback } from 'react';

// Navigation Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from '@/navigation/BottomTabNavigation';

// Screen
import { CheckoutScreen, PaymentDetail, SelectPaymentMethod } from '@/screens';

// Components
import { NotificationHeaderButton } from '@/components';

// Constants
import { ROUTES } from '@/constants/route';
import { HEADER_TITLE } from '@/constants/header';

// Screens
import BookDetail from '@/screens/BookDetail';

const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {
  const CheckoutHeaderRight = useCallback(
    () => <NotificationHeaderButton />,
    [],
  );

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={ROUTES.MAIN}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.BOOK_DETAIL}
        component={BookDetail}
        options={{
          headerShown: false,
          presentation: 'formSheet',
          sheetAllowedDetents: 'fitToContents',
          animation: 'slide_from_bottom',
          sheetCornerRadius: 24,
        }}
      />
      <Stack.Screen
        name={ROUTES.GUSTER_PAYMENT_DETAIL}
        component={PaymentDetail}
        options={{
          headerShown: false,
          presentation: 'formSheet',
          sheetAllowedDetents: 'fitToContents',
          animation: 'slide_from_bottom',
          sheetCornerRadius: 24,
        }}
      />
      <Stack.Screen
        name={ROUTES.SELECT_PAYMENT_METHOD}
        component={SelectPaymentMethod}
        options={{
          headerShown: false,
          presentation: 'formSheet',
          sheetAllowedDetents: 'fitToContents',
          animation: 'slide_from_bottom',
          sheetCornerRadius: 24,
        }}
      />
      <Stack.Screen
        name={ROUTES.CHECKOUT}
        component={CheckoutScreen}
        options={{
          headerTitle: HEADER_TITLE.CHECKOUT,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: CheckoutHeaderRight,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
