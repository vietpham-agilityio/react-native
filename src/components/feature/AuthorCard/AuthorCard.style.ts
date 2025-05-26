import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  avatar: {
    width: 102,
    height: 102,
    borderRadius: radius.large,
    marginBottom: 14,
    backgroundColor: colors.grayBackground,
  },
  name: {
    color: colors.textDark,
    marginBottom: 4,
  },
  role: {
    color: colors.grayMedium,
  },
});

export default styles;
