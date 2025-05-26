import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingTop: 38,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
