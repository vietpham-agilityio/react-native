import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'body' | 'title' | 'caption';
}

export const Text: React.FC<TextProps> = ({ variant = 'body', style, ...props }) => {
  return (
    <RNText
      style={[styles[variant], style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  caption: {
    fontSize: 12,
    color: '#666',
  },
});
