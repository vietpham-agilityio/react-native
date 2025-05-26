import React, { memo, useCallback } from 'react';

import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
} from 'react-native';

// Styles
import styles from './Button.style';

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'thirdParty';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  icon?: React.ReactNode;
}

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) => {
  const getContainerStyle = useCallback(() => {
    let containerStyle = [
      styles.container,
      styles[variant],
      styles[size],
    ] as ViewStyle[];

    if (disabled) {
      containerStyle.push(styles.disabled);
    }

    if (style) {
      if (Array.isArray(style)) {
        containerStyle.push(...style);
      } else {
        containerStyle.push(style);
      }
    }

    return containerStyle;
  }, [style, variant, size, disabled]);

  const getTextStyle = useCallback(() => {
    let baseStyle = [
      styles.text,
      styles[`${variant}Text`],
      styles[`${size}Text`],
    ] as TextStyle[];

    if (disabled) {
      baseStyle.push(styles.disabledText);
    }

    if (textStyle) {
      if (Array.isArray(textStyle)) {
        baseStyle.push(...textStyle);
      } else {
        baseStyle.push(textStyle);
      }
    }

    return baseStyle;
  }, [textStyle, variant, size, disabled]);

  return (
    <TouchableOpacity
      style={getContainerStyle()}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
