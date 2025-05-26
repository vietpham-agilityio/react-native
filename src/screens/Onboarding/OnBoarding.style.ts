import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  skipButton: {
    backgroundColor: colors.white,
    width: 60,
    padding: 16,
  },
  skipText: {
    color: '#6C4AB6',
  },
  carouselContainer: {
    flex: 1,
    marginBottom: 32,
    justifyContent: 'flex-end',
  },
  illustrationContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  illustration: {
    position: 'absolute',
    top: '28%',
    zIndex: 1,
  },
  illustrationSizeIOS: {
    width: 320,
    height: 320,
  },
  illustrationSizeAndroid: {
    width: 350,
    height: 350,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  heading: {
    marginTop: 14,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: colors.grayMedium,
  },
  buttonContainer: {
    marginBottom: 4,
    gap: 8,
  },
  button: {
    height: 56,
    borderRadius: 12,
  },
});

export default styles;
