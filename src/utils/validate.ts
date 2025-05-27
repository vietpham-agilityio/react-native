import { EMAIL_REGEX } from '@/constants/regex';

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};
