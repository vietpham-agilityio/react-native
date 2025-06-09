import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  role: {
    color: colors.text,
    marginTop: 8,
    marginBottom: 10,
  },
  name: {
    color: colors.text,
    textAlign: 'center',
  },
  rating: {
    marginTop: 24,
    marginBottom: 22,
  },
  aboutLabel: {
    textAlign: 'left',
    color: colors.text,
    marginBottom: 8,
  },
  aboutText: {
    color: colors.grayMedium,
    textAlign: 'left',
  },
});

export default styles;
