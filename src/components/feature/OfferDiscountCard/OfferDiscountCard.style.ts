import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: radius.extraSmall,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  offerInfo: {
    padding: 24,
  },
  title: {
    color: colors.textDark,
  },
  subtitle: {
    color: colors.textDark,
    marginBottom: 14,
  },
  image: {
    width: 100,
    height: 144,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default styles;
