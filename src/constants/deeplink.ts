import { LinkingOptions, NavigationState } from '@react-navigation/native';
import { ROUTES } from '@/constants/route';

const linking: LinkingOptions<NavigationState> = {
  prefixes: ['bazerbooks://', 'https://bazerbooks.com'],
  config: {
    screens: {
      [ROUTES.MAIN]: {
        screens: {
          [ROUTES.HOME]: 'home',
          [ROUTES.CATEGORY]: 'category',
          [ROUTES.CART]: 'cart',
          [ROUTES.PROFILE]: 'profile',
        },
      },
      [ROUTES.CHECKOUT]: 'checkout',
      [ROUTES.LOGIN]: 'login',
      [ROUTES.ONBOARDING]: 'onboarding',
    },
  },
};

export default linking;
