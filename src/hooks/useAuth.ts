import { useMutation } from '@tanstack/react-query';

// API
import { apiClient } from '@/services/api';

// Types
import {
  LoginCredentials,
  SignupCredentials,
  StrapiAuthResponse,
  ErrorResponse,
} from '@/types/auth';

// Constants
import { API_ROUTES } from '@/constants/endpoint';

export const useAuth = () => {
  const login = useMutation<
    StrapiAuthResponse,
    ErrorResponse,
    LoginCredentials
  >({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiClient.post<StrapiAuthResponse>(
        API_ROUTES.LOGIN,
        {
          body: credentials,
        },
      );

      return response;
    },
  });

  const signUp = useMutation<
    StrapiAuthResponse,
    ErrorResponse,
    SignupCredentials
  >({
    mutationFn: async (credentials: SignupCredentials) => {
      const response = await apiClient.post<StrapiAuthResponse>(
        API_ROUTES.SIGNUP,
        {
          body: credentials,
        },
      );

      return response;
    },
  });

  return {
    login,
    signUp,
  };
};
