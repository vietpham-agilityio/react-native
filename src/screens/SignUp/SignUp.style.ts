import { Platform, StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
    paddingTop: 16,
  },
  scrollContent: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 60 : 40,
  },
  title: {
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.grayMedium,
    marginBottom: 24,
  },
  passwordValidation: {
    marginBottom: 16,
  },
  registerButton: {
    marginBottom: 24,
    marginTop: 8,
    borderRadius: radius.extraLarge,
  },
  signupContentContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signinText: {
    color: colors.grayMedium,
  },
  signinLink: {
    marginLeft: 4,
    color: colors.primary,
    fontWeight: '600',
  },
  termsContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  termsText: {
    color: colors.grayMedium,
    textAlign: 'center',
  },
  termsLink: {
    color: colors.primary,
    marginTop: 4,
    fontWeight: '600',
  },
});

export default styles;
