import { StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  illustrationContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    color: colors.textDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.grayMedium,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  getStartedButton: {
    width: '100%',
    borderRadius: radius.extraLarge,
  },
});

export default styles;
