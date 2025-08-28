import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  carouselItem: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    gap: 8,
  },
  title: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  subtitle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default styles;
