import React from 'react';

import { OnboardingStepScreen } from '@/screens';

const OnboardingSecondStep = ({ navigation }: { navigation: any }) => {
  const handleContinue = () => {
    navigation.navigate('OnboardingLastStep');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <OnboardingStepScreen
      stepKey="STEP_TWO"
      onSkip={handleSignIn}
      onContinue={handleContinue}
      onSignIn={handleSignIn}
      continueLabel="Continue"
    />
  );
};

export default OnboardingSecondStep;
