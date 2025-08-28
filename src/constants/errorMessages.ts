export const ERROR_MESSAGES = {
  // Name validation
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',

  // Email validation
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Invalid email',

  // Password validation
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_REQUIREMENTS: 'Password does not meet all requirements',
} as const;
