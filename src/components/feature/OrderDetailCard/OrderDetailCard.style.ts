import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: radius.extraSmall,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  rowContainer: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
    marginVertical: 16,
  },
  total: {
    color: colors.primary,
  },
});

export default styles;
