import { StyleSheet } from 'react-native';

// Theme
import { colors } from '@/theme';

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    paddingTop: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profileImage: {
    width: '50%',
    height: 200,
    alignSelf: 'center',
    marginTop: 24,
  },
  buttonNotification: {
    gap: 16,
  },
});

export default styles;
