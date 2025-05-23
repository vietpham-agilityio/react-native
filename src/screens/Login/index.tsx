import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// Components
import { Input, Button, Typography, Heading } from '@/components';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Theme
import { colors, radius } from '@/theme';

const SignInScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    handleDismissKeyboard();
    navigation.navigate('Main');
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
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          rightIcon={showPassword ? 'eye-off' : 'eye'}
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
              style={{ width: 20, height: 20 }}
            />
          }
          style={styles.socialButton}
          textStyle={styles.socialButtonText}
          onPress={handleLogin}
        />
        <Button
          title="Sign in with Apple"
          variant="thirdParty"
          size="medium"
          icon={
            <Icon
              name="apple"
              size={24}
              color={colors.textDark}
              style={{ paddingBottom: 1 }}
            />
          }
          style={styles.socialButton}
          textStyle={styles.socialButtonText}
          onPress={handleLogin}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  title: {
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.grayMedium,
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    color: colors.primary,
  },
  loginButton: {
    marginVertical: 24,
    borderRadius: radius.extraLarge,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: colors.grayMedium,
  },
  signupLink: {
    marginLeft: 4,
    color: colors.primary,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
  },
  orWith: {
    marginHorizontal: 8,
    color: colors.grayMedium,
  },
  socialButton: {
    marginBottom: 12,
  },
  socialButtonText: {
    color: colors.textDark,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default SignInScreen;
