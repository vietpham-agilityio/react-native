import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: radius.small,
    padding: 8,
    gap: 16,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: radius.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleDisabled: {
    backgroundColor: colors.grayLight,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
  },
  textDisabled: {
    color: colors.grayMedium,
  },
  textPrimary: {
    color: colors.textDark,
  },
  value: {
    minWidth: 24,
    textAlign: 'center',
  },
});

export default styles;
