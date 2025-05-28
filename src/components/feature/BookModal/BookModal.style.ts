import { Dimensions, StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  absoluteOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: screenHeight,
    width: screenWidth,
    zIndex: 2,
    justifyContent: 'flex-end',
  },
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
    paddingHorizontal: 24,
    paddingBottom: 38,
    alignItems: 'stretch',
  },
  gestureBar: {
    height: 5,
    width: 56,
    marginVertical: 20,
    backgroundColor: colors.grayLight,
    borderRadius: radius.extraSmall,
    alignSelf: 'center',
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
