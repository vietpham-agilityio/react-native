import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginBottom: 24,
  },
  content: {
    marginTop: 24,
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: colors.text,
  },
  orderNumber: {
    color: colors.grayMedium,
  },
});

export default styles;
