// Base colors
const baseColors = {
  purple: {
    primary: '#54408C',
    accent: '#7B6F97',
  },
  gray: {
    100: '#FAFAFA',
    200: '#F9F9F9',
    300: '#FAF9FD',
    400: '#E8E8E8',
    500: '#B8B8B8',
    600: '#A6A6A6',
    700: '#B3B3B3',
    800: '#333',
    900: '#222',
    1000: '#121212',
  },
  red: {
    error: '#E57373',
  },
  white: '#fff',
};

const colors = {
  // Theme colors
  primary: baseColors.purple.primary,
  secondary: baseColors.gray[300],
  background: baseColors.gray[300],
  accent: baseColors.purple.accent,

  // Text colors
  text: baseColors.gray[900],
  textDark: baseColors.gray[1000],
  textLight: baseColors.gray[800],

  // Gray variations
  gray: baseColors.gray[700],
  grayLight: baseColors.gray[400],
  grayNeutral: baseColors.gray[500],
  grayMedium: baseColors.gray[600],
  grayBackground: '#eee',

  // Borders
  border: baseColors.gray[700],
  borderLight: baseColors.gray[400],

  // Status colors
  error: baseColors.red.error,
  white: baseColors.white,

  // Input colors
  inputBackground: baseColors.gray[200],
  inputBorder: baseColors.gray[100],
  inputBorderFocused: baseColors.purple.primary,
  inputBorderError: baseColors.red.error,
};

export default colors;
