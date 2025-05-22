import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

// Components
import { Button, ListDot, Typography, Heading } from '@/components';

// Constants
import { LIST_ONBOARDING_STEPS } from '@/constants/listData';

// Theme
import { colors } from '@/theme';

interface OnBoardingStepScreenProps {
  stepKey: keyof typeof LIST_ONBOARDING_STEPS;
  onSkip: () => void;
  onContinue: () => void;
  onSignIn: () => void;
  continueLabel?: string;
}

const OnBoardingStepScreen = ({
  stepKey,
  onSkip,
  onContinue,
  onSignIn,
  continueLabel = 'Continue',
}: OnBoardingStepScreenProps) => {
  const isIOS = Platform.OS === 'ios';

  const step = LIST_ONBOARDING_STEPS[stepKey];
  const stepKeys = Object.keys(LIST_ONBOARDING_STEPS);
  const activeIndex = stepKeys.indexOf(stepKey);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        {/* Skip Button */}
        <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
          <Typography
            variant="typoMedium"
            weight="medium"
            style={styles.skipText}>
            Skip
          </Typography>
        </TouchableOpacity>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={step.image}
            style={
              isIOS
                ? styles.illustrationSizeIOS
                : styles.illustrationSizeAndroid
            }
            resizeMode="contain"
          />
          <View style={styles.contentContainer}>
            {step.title && (
              <Heading
                level={3}
                style={[
                  styles.heading,
                  { marginBottom: stepKey === 'STEP_THREE' ? 44 : 12 },
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

        <ListDot
          count={stepKeys.length}
          activeIndex={activeIndex}
          style={styles.dotContainer}
        />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            title={continueLabel}
            variant="primary"
            size="small"
            onPress={onContinue}
            style={styles.button}
          />
          <Button
            title="Sign in"
            variant="secondary"
            size="small"
            onPress={onSignIn}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  skipButton: {
    backgroundColor: colors.white,
    width: 60,
    padding: 16,
  },
  skipText: {
    color: '#6C4AB6',
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  illustrationSizeIOS: {
    width: 320,
    height: 320,
  },
  illustrationSizeAndroid: {
    width: 350,
    height: 350,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  heading: {
    marginTop: 14,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: colors.grayMedium,
  },
  dotContainer: {
    marginTop: 28,
    marginBottom: 32,
  },
  buttonContainer: {
    marginBottom: 4,
    gap: 8,
  },
  button: {
    height: 56,
    borderRadius: 12,
  },
});

export default OnBoardingStepScreen;
