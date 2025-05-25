import React, { useState, useEffect } from 'react';

// Dev Settings
import { DevSettings } from 'react-native';

// Bottom Sheet
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import RootNavigation from '@navigation/RootNavigation';

const App = () => {
  const [showStorybook, setShowStorybook] = useState(false);

  useEffect(() => {
    // Add a dev menu item to toggle Storybook
    if (__DEV__) {
      DevSettings.addMenuItem('Toggle Storybook', () => {
        setShowStorybook((prev: any) => !prev);
      });
    }
  }, []);

  if (showStorybook && __DEV__) {
    const StorybookUI = require('./.storybook').default;
    return (
      <BottomSheetModalProvider>
        <StorybookUI />
      </BottomSheetModalProvider>
    );
  }

  return (
    <BottomSheetModalProvider>
      <RootNavigation />
    </BottomSheetModalProvider>
  );
};

export default App;
