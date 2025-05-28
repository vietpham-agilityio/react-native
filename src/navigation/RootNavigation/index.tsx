import React, { useReducer, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { AuthContext } from '@/store/AuthContext';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

// Store
import authReducer, { initialState } from '@/store/AuthReducer';

// Navigation
import { AuthorizedStack, UnauthorizedStack } from '@/navigation';

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
