import React, { useReducer, useEffect } from 'react';
import { BackHandler, Linking } from 'react-native';

import { AuthContext } from '@/store/AuthContext';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

// Store
import authReducer, { initialState } from '@/store/AuthReducer';

// Navigation
import { AuthorizedStack, UnauthorizedStack } from '@/navigation';

// Constants
import linking from '@/constants/deeplink';
import { ROUTES } from '@/constants/route';

const RootNavigation = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Handle deep links
  useEffect(() => {
    const handleDeepLink = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        if (
          url.includes(ROUTES.LOGIN.toLowerCase()) ||
          url.includes(ROUTES.ONBOARDING.toLowerCase())
        ) {
          dispatch({ type: 'SIGN_OUT', token: null });
        } else {
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        }
      }
    };

    handleDeepLink();

    const subscription = Linking.addEventListener('url', ({ url }) => {
      if (
        url.includes(ROUTES.LOGIN.toLowerCase()) ||
        url.includes(ROUTES.ONBOARDING.toLowerCase())
      ) {
        dispatch({ type: 'SIGN_OUT', token: null });
      } else {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
      <NavigationContainer linking={linking}>
        {state.userToken ? (
          <AuthorizedStack />
        ) : (
          <UnauthorizedStack isSignout={state.isSignout} />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default RootNavigation;
