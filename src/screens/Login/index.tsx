import React, { useCallback, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Components
import { Input, Button, Typography, Heading, StatusBar } from '@/components';

// Theme
import { colors } from '@/theme';

// Constants
import { ROUTES } from '@/constants/route';

// Styles
import styles from './Login.style';

// Icons
import { AppleIcon, EyeFilledIcon, EyeSlashFilledIcon } from '@/icons';

// Hooks
import { usePlatform, useFormValidation, useAuth } from '@/hooks';

// Store
import { useAuth as useAuthContext } from '@/store/AuthContext';

// Utils
import { showToast } from '@/utils';

const SignInScreen = () => {
  const navigation = useNavigation<any>();

  const { isIOS } = usePlatform();
  const { validateForm } = useFormValidation();
  const { login } = useAuth();
  const { mutateAsync: loginMutation, isPending: isLoginPending } = login;
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleLogin = useCallback(async () => {
    handleDismissKeyboard();

    const { emailError, passwordError, isValid } = validateForm({
      email,
      password,
    });

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);

    if (!isValid) {
      return;
    }

    loginMutation(
      {
        identifier: email,
        password,
      },
      {
        onSuccess: data => {
          // Auto-login after successful login
          signIn({
            email: data.user.email,
            password: '',
            token: data.jwt,
            user: data.user,
          });
        },
        onError: (error: any) => {
          // Handle login errors
          let errorMessage = 'Login failed. Please try again.';

          if (error instanceof Error && error.message) {
            const extractedJson = error.message.match(/\{.*\}/);
            if (extractedJson) {
              const parsedError = JSON.parse(extractedJson[0]);
              errorMessage = parsedError?.error?.message || errorMessage;
            }
          }

          showToast.error(errorMessage);
        },
      },
    );
  }, [
    email,
    password,
    loginMutation,
    signIn,
    handleDismissKeyboard,
    validateForm,
  ]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleSignUp = useCallback(() => {
    handleDismissKeyboard();
    navigation.navigate(ROUTES.SIGNUP);
  }, [handleDismissKeyboard, navigation]);

  const handleForgotPassword = useCallback(() => {
    handleDismissKeyboard();
  }, [handleDismissKeyboard]);

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar />
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
            error={emailErrorMessage}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <Input
            label="Password"
            placeholder="Your password"
            error={passwordErrorMessage}
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
            onRightIconPress={handleTogglePassword}
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
            disabled={isLoginPending}
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
                style={styles.googleIcon}
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
            icon={<AppleIcon style={styles.appleIcon} />}
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
