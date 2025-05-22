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
import { Button, ListDot, Typography } from '@/components';

// Constants
import { LIST_ONBOARDING_STEPS } from '@/constants/listData';

// Styles
import { colors } from '@/theme';

const OnboardingFirstStep = ({ navigation }: { navigation: any }) => {
  const isIOS = Platform.OS === 'ios';

  const handleSkipOnboarding = () => navigation.navigate('Login');
  const handleContinue = () => navigation.navigate('OnboardingSecondStep');
  const handleSignIn = () => navigation.navigate('Login');

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

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={LIST_ONBOARDING_STEPS.STEP_ONE.image}
            style={[
              styles.illustration,
              isIOS
                ? styles.illustrationSizeIOS
                : styles.illustrationSizeAndroid,
            ]}
            resizeMode="contain"
          />
          {/* Description */}
          <Typography
            variant="typoLarge"
            weight="regular"
            style={[
              styles.description,
              isIOS ? { marginHorizontal: 26 } : { marginHorizontal: 56 },
            ]}>
            {LIST_ONBOARDING_STEPS.STEP_ONE.description}
          </Typography>
        </View>

        <ListDot
          count={Object.keys(LIST_ONBOARDING_STEPS).length}
          activeIndex={Object.keys(LIST_ONBOARDING_STEPS).indexOf('STEP_ONE')}
          style={styles.dotContainer}
        />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            variant="primary"
            size="small"
            onPress={handleContinue}
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
  skipText: { color: '#6C4AB6' },

  illustrationContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    position: 'absolute',
    top: '28%',
    zIndex: 1,
  },
  illustrationSizeIOS: {
    width: 320,
    height: 320,
  },
  illustrationSizeAndroid: {
    width: 350,
    height: 350,
  },
  description: {
    position: 'absolute',
    textAlign: 'center',
    color: colors.grayMedium,
    bottom: 0,
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

export default OnboardingFirstStep;
