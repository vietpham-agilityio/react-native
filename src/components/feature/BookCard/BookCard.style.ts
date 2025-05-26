import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  cover: {
    borderRadius: radius.small,
    marginBottom: 8,
    backgroundColor: colors.grayBackground,
    resizeMode: 'cover',
  },
  coverBook: {
    width: 130,
    height: 150,
  },
  coverCategory: {
    width: 160,
    height: 160,
  },
  title: {
    color: colors.textDark,
    marginBottom: 4,
  },
  price: {
    color: colors.primary,
  },
});

export default styles;
