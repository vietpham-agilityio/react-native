import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  signIn: async (data: { email: string; password: string }) => {
    console.log(data);
  },
  signOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};
