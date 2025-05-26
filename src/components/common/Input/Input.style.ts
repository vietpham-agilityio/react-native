import { StyleSheet } from 'react-native';

// Theme
import { colors, fontSizes, radius } from '@/theme';

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.typoMedium,
    fontWeight: '600',
    marginBottom: 6,
    color: colors.text,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: radius.small,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.inputBorderFocused,
  },
  inputError: {
    borderColor: colors.inputBorderError,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.typoLarge,
    color: colors.text,
    paddingTop: 22,
    paddingBottom: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  leftIcon: {
    marginLeft: 12,
  },
  rightIcon: {
    marginHorizontal: 16,
  },
  error: {
    color: colors.error,
    fontSize: fontSizes.typoSmall,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default styles;
