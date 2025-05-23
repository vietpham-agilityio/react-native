import React, { useState } from 'react';

// Components
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  type TextInputProps,
  TouchableOpacity,
} from 'react-native';

// Theme
import { colors, fontSizes, radius } from '@/theme';

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

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.typoMedium,
    fontWeight: '600',
    marginBottom: 6,
    color: colors.text,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: radius.small,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.inputBorderFocused,
  },
  inputError: {
    borderColor: colors.inputBorderError,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.typoLarge,
    color: colors.text,
    paddingTop: 22,
    paddingBottom: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  leftIcon: {
    marginLeft: 12,
  },
  rightIcon: {
    marginHorizontal: 16,
  },
  error: {
    color: colors.error,
    fontSize: fontSizes.typoSmall,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default Input;
