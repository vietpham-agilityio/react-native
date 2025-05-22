import React from 'react';

import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import {
  LoginScreen,
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
          // headerBackTitle: ' ',
          headerBackVisible: isIOS ? false : true,
          headerShadowVisible: false,
        }}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
