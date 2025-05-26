import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 0,
    gap: 16,
  },
  orderButton: {
    marginTop: 22,
    marginBottom: 34,
    borderRadius: radius.extraLarge,
  },
});

export default styles;
