import { useCallback } from 'react';

// Utils
import { validateEmail } from '@/utils';

// Constants
import { ERROR_MESSAGES } from '@/constants/errorMessages';

interface ValidationResult {
  nameError: string;
  emailError: string;
  passwordError: string;
  isValid: boolean;
}

interface ValidationParams {
  name?: string;
  email: string;
  password: string;
}

export const useFormValidation = () => {
  const validateForm = useCallback(
    ({ name = '', email, password }: ValidationParams): ValidationResult => {
      let nameError = '';
      let emailError = '';
      let passwordError = '';

      if (!name.trim()) {
        nameError = ERROR_MESSAGES.NAME_REQUIRED;
      } else if (name.trim().length < 2) {
        nameError = ERROR_MESSAGES.NAME_MIN_LENGTH;
      }

      // Email validation
      if (!email.trim()) {
        emailError = ERROR_MESSAGES.EMAIL_REQUIRED;
      } else if (!validateEmail(email)) {
        emailError = ERROR_MESSAGES.EMAIL_INVALID;
      }

      // Password validation
      if (!password.trim()) {
        passwordError = ERROR_MESSAGES.PASSWORD_REQUIRED;
      }

      const isValid = !nameError && !emailError && !passwordError;

      return {
        nameError,
        emailError,
        passwordError,
        isValid,
      };
    },
    [],
  );

  return {
    validateForm,
  };
};
