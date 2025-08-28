const MAIN_ROUTES = {
  HOME: 'Home',
  CATEGORY: 'Category',
  CART: 'Cart',
  PROFILE: 'Profile',
};

const ROOT_ROUTES = {
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  ONBOARDING: 'Onboarding',
  MAIN: 'Main',
  CHECKOUT: 'Checkout',
  BOOK_DETAIL: 'BookDetail',
  GUSTER_PAYMENT_DETAIL: 'GusterPaymentDetail',
  SELECT_PAYMENT_METHOD: 'SelectPaymentMethod',
  SELECT_DELIVERY_DATETIME: 'SelectDeliveryDateTime',
};

export const ROUTES = {
  ...MAIN_ROUTES,
  ...ROOT_ROUTES,
};
