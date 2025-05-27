import React, { useReducer, useEffect } from 'react';
import { BackHandler } from 'react-native';

// Native Stack
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '@/store/AuthContext';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '@/navigation/BottomTabNavigation';

// Screens
import { CheckoutScreen, LoginScreen, OnboardingScreen } from '@/screens';

// Store
import authReducer, { initialState } from '@/store/AuthReducer';

// Routes
import { ROUTES } from '@/constants/route';

// Components
import { NotificationHeaderButton } from '@/components';

const Stack = createStackNavigator({
  screens: {
    [ROUTES.LOGIN]: LoginScreen,
    [ROUTES.ONBOARDING]: OnboardingScreen,
    [ROUTES.MAIN]: BottomTabNavigation,
    [ROUTES.CHECKOUT]: CheckoutScreen,
  },
});

const RootNavigation = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (!state.userToken || state.isSignout) {
          return true; // Prevent default behavior
        }
        return false; // Allow default behavior for other screens
      },
    );

    return () => backHandler.remove();
  }, [state.userToken, state.isSignout]);

  const authContext = {
    signIn: async (data: { email: string; password: string }) => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      console.log(data);
    },
    signOut: () => dispatch({ type: 'SIGN_OUT', token: null }),
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerShadowVisible: false,
          }}>
          {!state.userToken ? (
            <>
              {!state.isSignout && (
                <>
                  <Stack.Screen
                    options={{
                      headerShown: false,
                      gestureEnabled: false,
                      headerLeft: () => null,
                    }}
                    name={ROUTES.ONBOARDING}
                    component={OnboardingScreen}
                  />
                </>
              )}
              <Stack.Screen
                options={{
                  title: '',
                }}
                name={ROUTES.LOGIN}
                component={LoginScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name={ROUTES.MAIN}
                component={BottomTabNavigation}
              />
              <Stack.Screen
                options={{
                  headerTitle: 'Confirm Order',
                  headerShadowVisible: false,
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => <NotificationHeaderButton />,
                }}
                name={ROUTES.CHECKOUT}
                component={CheckoutScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootNavigation;
