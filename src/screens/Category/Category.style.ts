import { Platform, StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingTop: 38,
    paddingBottom: isIOS ? 250 : 170,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
