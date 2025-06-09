import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackgroundTertiary,
    borderRadius: radius.extraSmall,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    color: colors.primary,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
    gap: 4,
  },
  starTouchable: {
    padding: 4,
  },
  placeholder: {
    color: colors.text,
    textAlign: 'center',
  },
});

export default styles;
