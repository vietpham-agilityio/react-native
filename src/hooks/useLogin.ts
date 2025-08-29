// React Query
import { useMutation } from '@tanstack/react-query';
import { ToastAndroid, Platform, Alert } from 'react-native';

// API
import { apiClient } from '@/services/api';

// Store
import { useAuth } from '@/store/AuthContext';

// Types
import { LoginCredentials, StrapiAuthResponse, LoginError } from '@/types/auth';

export const useLogin = () => {
  const { signIn } = useAuth();

  const loginMutation = useMutation<
    StrapiAuthResponse,
    LoginError,
    LoginCredentials
  >({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiClient.post<StrapiAuthResponse>('auth/local', {
        body: credentials,
      });
      return response;
    },
    onSuccess: data => {
      signIn({
        email: data.user.email,
        password: '',
        token: data.jwt,
        user: data.user,
      });

      // Show success toast
      if (Platform.OS === 'android') {
        ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
      } else {
        Alert.alert('Success', 'Login successful!');
      }
    },
    onError: error => {
      let errorMessage = 'Login failed. Please try again.';

      if (error instanceof Error && error.message) {
        const extractedJson = error.message.match(/\{.*\}/);
        if (extractedJson) {
          const parsedError = JSON.parse(extractedJson[0]);
          errorMessage = parsedError?.error?.message || errorMessage;
        }
      }

      if (Platform.OS === 'android') {
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      } else {
        Alert.alert('Login Failed', errorMessage);
      }
    },
  });

  const login = async (email: string, password: string) => {
    return loginMutation.mutateAsync({
      identifier: email,
      password,
    });
  };

  return {
    login,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
    isError: loginMutation.isError,
  };
};
