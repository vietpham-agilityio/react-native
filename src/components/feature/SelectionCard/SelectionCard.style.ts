import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: radius.extraSmall,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: 16,
  },
  heading: {
    marginBottom: 16,
    lineHeight: 24,
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 44,
    height: 44,
    marginRight: 16,
    borderRadius: radius.large,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: colors.textDark,
    lineHeight: 20,
  },
  description: {
    color: colors.grayMedium,
    lineHeight: 20,
  },
});

export default styles;
