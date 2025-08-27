import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

export default StyleSheet.create({
  errorContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.error,
  },
});
