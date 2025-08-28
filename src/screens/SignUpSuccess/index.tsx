import React, { useCallback } from 'react';
import { View } from 'react-native';

// Components
import { Button, Typography, Heading, StatusBar } from '@/components';

// Styles
import styles from './SignUpSuccess.style';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Constants
import { ROUTES } from '@/constants/route';

// Icons
import { MysteryBox } from '@/icons';

const SignUpSuccessScreen = () => {
  const navigation = useNavigation<any>();

  const handleGetStarted = useCallback(() => {
    // Navigate to the main part of the app
    navigation.navigate(ROUTES.MAIN);
  }, [navigation]);

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
