import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 2,
  },
  text: {
    color: colors.grayMedium,
  },
  textActive: {
    color: colors.black,
  },
  underline: {
    marginTop: 2,
    width: 8,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
});

export default styles;
