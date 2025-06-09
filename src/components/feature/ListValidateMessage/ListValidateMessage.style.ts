import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  label: {
    color: colors.grayNeutral,
  },
});

export default styles;
