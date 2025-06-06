import React from 'react';

// Styles
import styles from './RootLayout.style';

// Components
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle="dark-content" />
    {children}
  </SafeAreaView>
);

export default RootLayout;
