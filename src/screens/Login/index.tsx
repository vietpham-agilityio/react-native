import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

// Components
import { Input, Button, Typography, Heading } from '@/components';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './Login.style';

// Store
import { useAuth } from '@/store/AuthContext';

// Icons
import { AppleIcon, EyeFilledIcon, EyeSlashFilledIcon } from '@/icons';

// Utils
import { validateEmail, validatePassword } from '@/utils';

const SignInScreen = () => {
  const { signIn } = useAuth();

  const isIOS = Platform.OS === 'ios';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    handleDismissKeyboard();

    let emailErr = '';
    let passwordErr = '';

    if (!email.trim()) {
      emailErr = 'Email is required';
    } else if (!validateEmail(email)) {
      emailErr = 'Invalid email';
    }

    if (!password.trim()) {
      passwordErr = 'Password is required';
    } else if (!validatePassword(password)) {
      passwordErr = 'Password must be at least 8 characters';
    }

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    // Simulate sign in
    signIn({ email, password });
  };

  const handleSignUp = () => {
    handleDismissKeyboard();
  };

  const handleForgotPassword = () => {
    handleDismissKeyboard();
  };

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback
        onPress={handleDismissKeyboard}
        accessible={false}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {/* Title */}
          <Heading level={3} style={styles.title}>
            Welcome 👋
          </Heading>
          <Typography
            variant="typoLarge"
            weight="regular"
            style={styles.subtitle}>
            Sign to your account
          </Typography>

          {/* Email Input */}
          <Input
            label="Email"
            placeholder="Your email"
            error={emailError}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          {/* Password Input */}
          <Input
            label="Password"
            placeholder="Your password"
            error={passwordError}
            value={password}
            onChangeText={setPassword}
            isSecureText={!showPassword}
            rightIcon={
              showPassword ? (
                <EyeFilledIcon color={colors.grayNeutral} />
              ) : (
                <EyeSlashFilledIcon color={colors.grayNeutral} />
              )
            }
            onRightIconPress={() => setShowPassword(!showPassword)}
            style={styles.input}
          />

          {/* Forgot Password */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPasswordContainer}>
            <Typography
              variant="typoMedium"
              style={styles.forgotPassword}
              weight="semibold">
              Forgot Password?
            </Typography>
          </TouchableOpacity>

          {/* Login Button */}
          <Button
            title="Login"
            size="medium"
            variant="primary"
            onPress={handleLogin}
            style={styles.loginButton}
          />

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Typography
              variant="typoLarge"
              weight="medium"
              style={styles.signupText}>
              Don't have an account?
            </Typography>
            <TouchableOpacity onPress={handleSignUp}>
              <Typography
                variant="typoLarge"
                weight="semibold"
                style={styles.signupLink}>
                Sign Up
              </Typography>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Typography
              variant="typoMedium"
              weight="regular"
              style={styles.orWith}>
              Or with
            </Typography>
            <View style={styles.divider} />
          </View>

          {/* Social Buttons */}
          <Button
            title="Sign in with Google"
            variant="thirdParty"
            size="medium"
            icon={
              <Image
                source={require('@assets/images/vendors/google-icon.webp')}
                style={{ width: 16, height: 16 }}
              />
            }
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
            onPress={handleDismissKeyboard}
          />
          <Button
            title="Sign in with Apple"
            variant="thirdParty"
            size="medium"
            icon={
              <AppleIcon
                style={{
                  marginBottom: 4,
                }}
              />
            }
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
            onPress={handleDismissKeyboard}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
