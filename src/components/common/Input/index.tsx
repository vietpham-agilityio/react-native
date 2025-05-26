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

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
}

const Input = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
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
        <Icon
          testID="left-icon"
          name={leftIcon}
          size={22}
          color={colors.grayNeutral}
          style={styles.leftIcon}
        />
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return (
        <TouchableOpacity
          testID="right-icon"
          onPress={() => {
            if (onRightIconPress) {
              onRightIconPress();
            }
            if (rightIcon === 'eye' || rightIcon === 'eye-off') {
              setShowPassword(!showPassword);
            }
          }}
          style={styles.rightIcon}>
          <Icon
            name={rightIcon === 'eye' && !showPassword ? 'eye' : 'eye-off'}
            size={22}
            color={colors.grayNeutral}
          />
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
          secureTextEntry={secureTextEntry && !showPassword}
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
