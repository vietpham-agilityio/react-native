import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 0,
    gap: 16,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    gap: 16,
    paddingTop: 8,
    paddingBottom: 34,
  },
  button: {
    borderRadius: radius.extraLarge,
  },
});

export default styles;
