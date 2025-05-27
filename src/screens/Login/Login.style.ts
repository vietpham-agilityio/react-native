import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  scrollContent: {
    justifyContent: 'center',
    paddingBottom: 100,
  },
  title: {
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.grayMedium,
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  forgotPasswordContainer: {
    width: '40%',
  },
  forgotPassword: {
    color: colors.primary,
  },
  loginButton: {
    marginVertical: 24,
    borderRadius: radius.extraLarge,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: colors.grayMedium,
  },
  signupLink: {
    marginLeft: 4,
    color: colors.primary,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
  },
  orWith: {
    marginHorizontal: 8,
    color: colors.grayMedium,
  },
  socialButton: {
    marginBottom: 12,
  },
  socialButtonText: {
    color: colors.textDark,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default styles;
