import React from 'react';

import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Bottom Tab Navigation
import BottomTabNavigation from '../BottomTabNavigation';

// Screens
import {
  CheckoutScreen,
  LoginScreen,
  CartScreen,
  HomeScreen,
  OnboardingFirstStep,
  OnboardingLastStep,
  OnboardingSecondStep,
} from '@/screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const isIOS = Platform.OS === 'ios';

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={BottomTabNavigation}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnboardingFirstStep"
        component={OnboardingFirstStep}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnboardingSecondStep"
        component={OnboardingSecondStep}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnboardingLastStep"
        component={OnboardingLastStep}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerBackVisible: isIOS ? false : true,
          headerShadowVisible: false,
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Confirm Order',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Checkout"
        component={CheckoutScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'My Cart',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
