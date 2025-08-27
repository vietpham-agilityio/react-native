import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 0,
    backgroundColor: colors.white,
    paddingBottom: Platform.OS === 'ios' ? 30 : 90,
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
    ...(isIOS && {
      marginBottom: 8,
    }),
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
