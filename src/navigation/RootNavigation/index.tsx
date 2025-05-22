import React from 'react';

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
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnboardingFirstStep"
        component={OnboardingFirstStep}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
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
    </Stack.Navigator>
  );
};

export default RootNavigation;
