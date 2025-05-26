import { StyleSheet } from 'react-native';

// Theme
import { colors, fontSizes, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.medium,
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  ghost: {
    backgroundColor: colors.secondary,
  },
  thirdParty: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  large: {
    height: 56,
  },
  medium: {
    height: 48,
    paddingHorizontal: 24,
  },
  small: {
    height: 36,
    paddingHorizontal: 20,
  },

  disabled: {
    backgroundColor: colors.secondary,
    borderColor: colors.borderLight,
    borderWidth: 1,
    opacity: 0.5,
  },
  disabledText: {
    color: colors.grayMedium,
  },

  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.primary,
  },
  ghostText: {
    color: colors.grayMedium,
  },
  thirdPartyText: {
    color: colors.textDark,
  },
  largeText: {
    fontSize: fontSizes.h3,
  },
  mediumText: {
    fontSize: fontSizes.h5,
  },
  smallText: {
    fontSize: fontSizes.h6,
  },
  icon: {
    marginRight: 14,
  },
});

export default styles;
