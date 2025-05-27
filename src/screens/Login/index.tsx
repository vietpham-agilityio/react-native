import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
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

const SignInScreen = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleLogin = () => {
    handleDismissKeyboard();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    let emailErr = '';
    let passwordErr = '';

    if (!trimmedEmail) {
      emailErr = 'Email is required';
    } else if (!validateEmail(trimmedEmail)) {
      emailErr = 'Invalid email';
    }

    if (!trimmedPassword) {
      passwordErr = 'Password is required';
    } else if (!validatePassword(trimmedPassword)) {
      passwordErr = 'Password must be at least 8 characters';
    }

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    // Simulate sign in
    signIn({ email: trimmedEmail, password: trimmedPassword });
  };

  const handleSignUp = () => {
    handleDismissKeyboard();
  };

  const handleForgotPassword = () => {
    handleDismissKeyboard();
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleDismissKeyboard}
      accessible={false}>
      <View style={styles.container}>
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
            !showPassword ? (
              <EyeSlashFilledIcon color={colors.grayNeutral} />
            ) : (
              <EyeFilledIcon color={colors.grayNeutral} />
            )
          }
          onRightIconPress={() => setShowPassword(!showPassword)}
          style={styles.input}
        />

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
