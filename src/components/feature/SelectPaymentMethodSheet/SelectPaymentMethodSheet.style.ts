import { Platform, StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 24 : 60,
    backgroundColor: colors.white,
  },
  gestureBar: {
    height: 5,
    width: 56,
    marginVertical: 20,
    backgroundColor: colors.grayLight,
    borderRadius: radius.extraSmall,
    alignSelf: 'center',
  },
  title: {
    color: colors.textDark,
    fontSize: 18,
    marginBottom: 24,
  },
  container: {
    gap: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 12,
  },
  paymentOptionSelected: {
    borderColor: colors.primary,
  },
  paymentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentText: {
    color: colors.textDark,
  },
});

export default styles;
