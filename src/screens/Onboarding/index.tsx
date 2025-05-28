import React, { useCallback } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

// Components
import { Button, Typography, Heading, Carousel } from '@/components';

// Constants
import { LIST_ONBOARDING_STEPS } from '@/constants/listData';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './OnBoarding.style';

// Route
import { ROUTES } from '@/constants/route';

interface OnboardingScreenProps {
  navigation: any;
}

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const isIOS = Platform.OS === 'ios';

  const handleSkipOnboarding = useCallback(
    () => navigation.navigate(ROUTES.LOGIN),
    [navigation],
  );

  const handleSignIn = useCallback(
    () => navigation.navigate(ROUTES.LOGIN),
    [navigation],
  );

  const carouselItems = Object.entries(LIST_ONBOARDING_STEPS).map(
    ([key, step]) => ({
      id: key,
      item: (
        <View style={styles.illustrationContainer}>
          <Image
            source={step.image}
            style={[
              // styles.illustration,
              isIOS
                ? styles.illustrationSizeIOS
                : styles.illustrationSizeAndroid,
            ]}
            resizeMode="contain"
          />
          <View style={styles.contentContainer}>
            {step.title && (
              <Heading
                level={3}
                style={[
                  styles.heading,
                  { paddingHorizontal: key === 'STEP_ONE' ? 32 : 0 },
                  { marginBottom: key === 'STEP_THREE' ? 44 : 12 },
                ]}>
                {step.title}
              </Heading>
            )}
            <Typography
              variant="typoLarge"
              weight="regular"
              style={[
                styles.description,
                !isIOS && { fontSize: 18, marginHorizontal: 10 },
              ]}>
              {step.description}
            </Typography>
          </View>
        </View>
      ),
    }),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        {/* Skip Button */}
        <TouchableOpacity
          onPress={handleSkipOnboarding}
          style={styles.skipButton}>
          <Typography
            variant="typoMedium"
            weight="medium"
            style={styles.skipText}>
            Skip
          </Typography>
        </TouchableOpacity>

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel listItems={carouselItems} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            variant="primary"
            size="small"
            onPress={handleSignIn}
            style={styles.button}
          />
          <Button
            title="Sign in"
            variant="secondary"
            size="small"
            onPress={handleSignIn}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
