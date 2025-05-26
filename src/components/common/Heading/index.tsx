import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

// Styles
import styles from './Heading.style';

export interface HeadingProps extends RNTextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ level = 1, style, ...props }: HeadingProps) => {
  const headingStyle = styles[`h${level}` as keyof typeof styles];

  return <RNText style={[headingStyle, styles.base, style]} {...props} />;
};

export default Heading;
