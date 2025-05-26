const MAIN_ROUTES = {
  HOME: 'Home',
  CATEGORY: 'Category',
  CART: 'Cart',
  PROFILE: 'Profile',
};

const ROOT_ROUTES = {
  LOGIN: 'Login',
  ONBOARDING: 'Onboarding',
  MAIN: 'Main',
  CHECKOUT: 'Checkout',
};

export const ROUTES = {
  ...MAIN_ROUTES,
  ...ROOT_ROUTES,
};
