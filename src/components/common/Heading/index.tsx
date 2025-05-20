import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

// Theme
import { colors, fontSizes } from '@/theme';

export interface HeadingProps extends RNTextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ level = 1, style, ...props }: HeadingProps) => {
  const headingStyle = styles[`h${level}` as keyof typeof styles];

  return <RNText style={[headingStyle, styles.base, style]} {...props} />;
};

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

export default Heading;
