import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  modalContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 42,
    alignItems: 'stretch',
  },
  quantityControlBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
    marginBottom: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: colors.textDark,
  },
  reviewWrapper: {
    gap: 8,
  },
  priceText: {
    color: colors.primary,
  },
});

export default styles;
