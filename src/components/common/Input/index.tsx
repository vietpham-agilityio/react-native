import React, { useState } from 'react';

// Components
import {
  View,
  TextInput,
  Text,
  type TextInputProps,
  TouchableOpacity,
} from 'react-native';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './Input.style';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isSecureText?: boolean;
  onRightIconPress?: () => void;
}

const Input = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  isSecureText,
  style,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const renderLeftIcon = () => {
    if (leftIcon) {
      return (
        <View testID="left-icon" style={styles.leftIcon}>
          {leftIcon}
        </View>
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return (
        <TouchableOpacity
          testID="right-icon"
          activeOpacity={0.8}
          onPress={() => {
            onRightIconPress && onRightIconPress();
            isSecureText && setShowPassword(!showPassword);
          }}
          style={styles.rightIcon}>
          {rightIcon}
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}>
        {renderLeftIcon()}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.grayNeutral}
          secureTextEntry={isSecureText && !showPassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {renderRightIcon()}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
