import React, { useReducer } from 'react';
import { Platform } from 'react-native';

// Native Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const isIOS = Platform.OS === 'ios';

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
        <Stack.Navigator>
          {!state.userToken ? (
            <>
              {!state.isSignout && (
                <>
                  <Stack.Screen
                    options={{
                      headerShown: false,
                    }}
                    name={ROUTES.ONBOARDING}
                    component={OnboardingScreen}
                  />
                </>
              )}
              <Stack.Screen
                options={{
                  headerTitle: '',
                  headerBackVisible: isIOS ? false : true,
                  headerShadowVisible: false,
                }}
                name={ROUTES.LOGIN}
                component={LoginScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{ headerShown: false }}
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
