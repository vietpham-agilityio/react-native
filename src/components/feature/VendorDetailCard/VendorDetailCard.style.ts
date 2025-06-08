import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    alignItems: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: colors.cardBackgroundLight,
    borderRadius: radius.extraSmall,
  },
  logo: {
    width: 90,
    height: 62,
  },
  name: {
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'left',
    color: colors.text,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
});

export default styles;
