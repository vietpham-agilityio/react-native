export type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type AuthAction = {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
  token: string | null;
};

const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

export const initialState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export default authReducer;
