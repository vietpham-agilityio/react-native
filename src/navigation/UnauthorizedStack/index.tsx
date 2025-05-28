import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { LoginScreen, OnboardingScreen } from '@/screens';

// Constants
import { ROUTES } from '@/constants/route';
import { HEADER_TITLE } from '@/constants/header';

const Stack = createStackNavigator();

const UnauthorizedStack = ({ isSignout }: { isSignout: boolean }) => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerShadowVisible: false,
    }}>
    {!isSignout && (
      <Stack.Screen
        name={ROUTES.ONBOARDING}
        component={OnboardingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
    )}
    <Stack.Screen
      name={ROUTES.LOGIN}
      component={LoginScreen}
      options={{ headerTitle: HEADER_TITLE.LOGIN }}
    />
  </Stack.Navigator>
);

export default UnauthorizedStack;
