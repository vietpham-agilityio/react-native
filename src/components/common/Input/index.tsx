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
          name={leftIcon}
          size={22}
          color="#B8B8B8"
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
            color="#B8B8B8"
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
          placeholderTextColor="#B8B8B8"
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
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FAFAFA',
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: '#54408C',
  },
  inputError: {
    borderColor: '#E57373',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  leftIcon: {
    marginLeft: 12,
  },
  rightIcon: {
    marginHorizontal: 16,
  },
  error: {
    color: '#E57373',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default Input;
