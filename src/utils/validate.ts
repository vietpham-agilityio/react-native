import { EMAIL_REGEX, PASSWORD_VALIDATE_RULES } from '@/constants/regex';

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string) => {
  return PASSWORD_VALIDATE_RULES.every(rule => rule.validate(password));
};

export const isPasswordValid = (password: string): boolean => {
  return PASSWORD_VALIDATE_RULES.every(rule => rule.validate(password));
};
