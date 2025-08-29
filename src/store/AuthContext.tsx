import { createContext, useContext } from 'react';

// Types
import { AuthData } from '@/types/auth';

export const AuthContext = createContext({
  signIn: async (_data: AuthData) => {},
  signOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};
