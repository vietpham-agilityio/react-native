import React from 'react';

// Navigation Stack
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from '@/navigation/BottomTabNavigation';

// Screen
import { CheckoutScreen } from '@/screens';

// Components
import { NotificationHeaderButton } from '@/components';

// Constants
import { ROUTES } from '@/constants/route';
import { HEADER_TITLE } from '@/constants/header';

const Stack = createStackNavigator();

const AuthorizedStack = () => (
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
      name={ROUTES.CHECKOUT}
      component={CheckoutScreen}
      options={{
        headerTitle: HEADER_TITLE.CHECKOUT,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        headerRight: () => <NotificationHeaderButton />,
      }}
    />
  </Stack.Navigator>
);

export default AuthorizedStack;
