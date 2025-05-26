import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  imageWrapper: {
    alignSelf: 'center',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 240,
    height: 330,
    borderRadius: radius.extraMedium,
    marginBottom: 16,
  },
  title: {
    marginBottom: 12,
    color: colors.textDark,
  },
  brandLogo: {
    height: 32,
    marginBottom: 12,
  },
  description: {
    color: colors.grayMedium,
    marginBottom: 24,
  },
});

export default styles;
