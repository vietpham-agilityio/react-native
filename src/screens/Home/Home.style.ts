import { Platform, StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  carouselSection: {
    paddingTop: 16,
  },
  sectionsWrapper: {
    marginTop: 26,
    gap: 32,
  },
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
  horizontalList: {
    gap: 16,
  },
  scrollViewContentContainer: {
    paddingBottom: Platform.OS === 'android' ? 80 : 100,
  },
});

export default styles;
