import { Platform, StyleSheet } from 'react-native';

// Theme
import { colors, radius } from '@/theme';

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: 24,
    paddingBottom: 60,
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
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
  },
  title: {
    color: colors.textDark,
    fontSize: 18,
    marginBottom: 16,
  },
  itemsContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
  },
  itemsDetailContainer: {
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  itemName: {
    color: colors.grayMedium,
    flex: 1,
  },
  itemPrice: {
    color: colors.grayMedium,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryLabel: {
    color: colors.textDark,
    fontSize: 14,
  },
  summaryValue: {
    color: colors.textDark,
  },
  totalValue: {
    color: colors.primary,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.grayLight,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    ...(isIOS && {
      marginBottom: 8,
    }),
  },
});

export default styles;
