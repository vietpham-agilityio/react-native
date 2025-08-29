export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_VALIDATE_RULES = [
  {
    id: 'min-8-characters',
    label: 'Minimum 8 characters',
    validate: (val: string) => val.length >= 8,
  },
  {
    id: 'atleast-1-number',
    label: 'At least 1 number (0-9)',
    validate: (val: string) => /\d/.test(val),
  },
  {
    id: 'case-letters',
    label: 'At least lowercase and uppercase letters',
    validate: (val: string) => /[a-z]/.test(val) && /[A-Z]/.test(val),
  },
];
