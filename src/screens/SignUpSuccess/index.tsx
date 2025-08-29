import React, { useCallback } from 'react';
import { View } from 'react-native';

// Components
import { Button, Typography, Heading, StatusBar } from '@/components';

// Styles
import styles from './SignUpSuccess.style';

// Navigation
import { useNavigation, useRoute } from '@react-navigation/native';

// Constants
import { ROUTES } from '@/constants/route';

// Icons
import { MysteryBox } from '@/icons';

// Store
import { useAuth as useAuthContext } from '@/store/AuthContext';

const SignUpSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { signIn } = useAuthContext();

  const { email, password, user, jwt } = route.params as {
    email: string;
    password: string;
    user: any;
    jwt: string;
  };

  const handleGetStarted = useCallback(() => {
    signIn({
      email,
      password,
      token: jwt,
      user,
    });

    navigation.navigate(ROUTES.MAIN);
  }, [navigation, signIn, email, jwt, user, password]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.content}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <MysteryBox />
        </View>

        {/* Heading */}
        <Heading level={3} style={styles.title}>
          Congratulation!
        </Heading>

        {/* Body Text */}
        <Typography
          variant="typoLarge"
          weight="regular"
          style={styles.subtitle}>
          your account is complete, please enjoy the best menu from us.
        </Typography>

        {/* Get Started Button */}
        <Button
          title="Get Started"
          size="medium"
          variant="primary"
          onPress={handleGetStarted}
          style={styles.getStartedButton}
        />
      </View>
    </View>
  );
};

export default SignUpSuccessScreen;
