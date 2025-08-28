import React, { useCallback, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Components
import {
  Input,
  Button,
  Typography,
  Heading,
  StatusBar,
  ListValidateMessage,
} from '@/components';

// Theme
import { colors } from '@/theme';

// Constants
import { ROUTES } from '@/constants/route';

// Styles
import styles from './SignUp.style';

// Store
import { useAuth } from '@/store/AuthContext';

// Icons
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/icons';

// Hooks
import { usePlatform, useFormValidation } from '@/hooks';

const SignUpScreen = () => {
  const navigation = useNavigation<any>();

  const { signIn } = useAuth();
  const { isIOS } = usePlatform();
  const { validateForm } = useFormValidation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleSignUp = useCallback(() => {
    handleDismissKeyboard();

    const { nameError, emailError, passwordError, isValid } = validateForm({
      name,
      email,
      password,
    });

    setNameErrorMessage(nameError);
    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);

    if (!isValid) {
      return;
    }

    // Simulate sign up
    signIn({ email, password });
  }, [name, email, password, signIn, handleDismissKeyboard, validateForm]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleSignIn = useCallback(() => {
    handleDismissKeyboard();
    navigation.navigate(ROUTES.LOGIN);
  }, [handleDismissKeyboard, navigation]);

  const handleTermsAndPolicy = useCallback(() => {
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
            Sign Up
          </Heading>
          <Typography
            variant="typoLarge"
            weight="regular"
            style={styles.subtitle}>
            Create account and choose favorite menu
          </Typography>

          {/* Name Input */}
          <Input
            label="Name"
            placeholder="Your name"
            error={nameErrorMessage}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

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

          {/* Password Validation Rules */}
          {password.length > 0 && (
            <View style={styles.passwordValidation}>
              <ListValidateMessage value={password} />
            </View>
          )}

          {/* Register Button */}
          <Button
            title="Register"
            size="medium"
            variant="primary"
            onPress={handleSignUp}
            style={styles.registerButton}
          />
          <View style={styles.signupContentContainer}>
            {/* Sign In Link */}
            <View style={styles.signinContainer}>
              <Typography
                variant="typoLarge"
                weight="medium"
                style={styles.signinText}>
                Have an account?
              </Typography>
              <TouchableOpacity onPress={handleSignIn}>
                <Typography
                  variant="typoLarge"
                  weight="semibold"
                  style={styles.signinLink}>
                  Sign In
                </Typography>
              </TouchableOpacity>
            </View>

            {/* Terms and Policy */}
            <View style={styles.termsContainer}>
              <Typography
                variant="typoMedium"
                weight="regular"
                style={styles.termsText}>
                By clicking Register, you agree to our
              </Typography>
              <TouchableOpacity onPress={handleTermsAndPolicy}>
                <Typography
                  variant="typoMedium"
                  weight="semibold"
                  style={styles.termsLink}>
                  Terms and Data Policy.
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
