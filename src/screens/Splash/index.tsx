import React from 'react';

// Components
import { View } from 'react-native';
import { Heading } from '@/components';

// Icons
import { BazerIcon } from '@/icons';

// Styles
import { styles } from './Splash.style';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <BazerIcon />
        <Heading level={1} style={styles.brandText}>
          Bazer.
        </Heading>
      </View>
    </View>
  );
};

export default SplashScreen;
