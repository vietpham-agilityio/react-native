import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAllText: {
    color: colors.primary,
  },
  seeAllTextDisabled: {
    opacity: 0.5,
  },
  horizontalList: {
    gap: 16,
  },
});

export default styles;
