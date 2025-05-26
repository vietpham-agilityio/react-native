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
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: radius.large,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    marginTop: 14,
  },
  info: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  label: {
    color: colors.textDark,
    lineHeight: 24,
  },
  address: {
    color: colors.grayMedium,
    lineHeight: 20,
  },
  changeBtn: {
    marginTop: 16,
    maxWidth: 100,
  },
});

export default styles;
