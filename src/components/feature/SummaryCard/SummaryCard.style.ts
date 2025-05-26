import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: radius.extraSmall,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  heading: {
    marginBottom: 16,
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorText: {
    color: colors.textDark,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: 16,
  },
  seeDetailsRow: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
  },
  seeDetailsText: {
    color: colors.primary,
  },
});

export default styles;
