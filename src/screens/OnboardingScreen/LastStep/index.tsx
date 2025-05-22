import React from 'react';

import { OnboardingStepScreen } from '@/screens';

const OnboardingLastStep = ({ navigation }: { navigation: any }) => {
  const handleContinue = () => {
    navigation.navigate('Login');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <OnboardingStepScreen
      stepKey="STEP_THREE"
      onSkip={handleSignIn}
      onContinue={handleContinue}
      onSignIn={handleSignIn}
      continueLabel="Get Started"
    />
  );
};

export default OnboardingLastStep;
