import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

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
    color: '#333',
  },
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 18,
  },
  h6: {
    fontSize: 16,
  },
});

export default Heading;
