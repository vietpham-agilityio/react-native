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
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  optionButton: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayLight,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonSelected: {
    borderColor: colors.primary,
  },
  optionButtonDisabled: {
    borderColor: colors.grayLight,
    backgroundColor: colors.grayLight,
  },
  optionText: {
    color: colors.textDark,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    fontWeight: 'bold',
  },
  optionTextSelected: {
    color: colors.primary,
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 16,
  },
  confirmButton: {
    width: '100%',
  },
});

export default styles;
