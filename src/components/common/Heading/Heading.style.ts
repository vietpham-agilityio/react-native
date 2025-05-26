import { StyleSheet } from 'react-native';

// Theme
import { colors, fontSizes } from '@/theme';

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: colors.textLight,
  },
  h1: {
    fontSize: fontSizes.h1,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  h4: {
    fontSize: fontSizes.h4,
  },
  h5: {
    fontSize: fontSizes.h5,
  },
  h6: {
    fontSize: fontSizes.h6,
  },
});

export default styles;
