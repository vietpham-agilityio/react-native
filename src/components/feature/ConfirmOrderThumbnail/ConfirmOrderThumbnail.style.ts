import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.cardBackgroundTertiary,
    borderRadius: radius.extraSmall,
    paddingVertical: 32,
    paddingTop: 24,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.text,
  },
  title: {
    color: colors.primary,
    marginBottom: 16,
  },
  orderNumber: {
    color: colors.text,
  },
});

export default styles;
