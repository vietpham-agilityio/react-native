import React, { memo, useCallback } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 8,
    paddingHorizontal: 24,
  },

  // Variants
  primary: {
    backgroundColor: '#54408C',
  },
  secondary: {
    backgroundColor: '#FAF9FD',
  },
  ghost: {
    backgroundColor: '#FAF9FD',
  },
  thirdParty: {
    backgroundColor: '#D6E4DE',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },

  // Sizes
  large: {
    marginVertical: 12,
    height: 72,
  },
  medium: {
    height: 48,
    paddingHorizontal: 24,
  },
  small: {
    height: 40,
    paddingHorizontal: 20,
  },

  // Disabled
  disabled: {
    backgroundColor: '#FAF9FD',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    opacity: 0.5,
  },
  disabledText: {
    color: '#A6A6A6',
  },

  // Text
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#54408C',
  },
  ghostText: {
    color: '#B3B3B3',
  },
  thirdPartyText: {
    color: '#222',
  },
  largeText: {
    fontSize: 24,
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 12,
  },
});

export default memo(Button);
