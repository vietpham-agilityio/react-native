if (__DEV__) {
  require('./ReactotronConfig');
}
import './gesture-handler';
import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

// Dev Settings
import { DevSettings } from 'react-native';

// Bottom Sheet
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// Messaging
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

// Navigation
import RootNavigation from '@navigation/RootNavigation';

// Theme
import { colors } from '@/theme';

const App = () => {
  const [showStorybook, setShowStorybook] = useState(false);

  // Test Firebase configuration with notification permissions
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Android Notification permission granted');
        } else {
          console.log('Android Notification permission denied');
        }
      } catch (err) {
        console.warn('Error requesting notification permission:', err);
      }
    }
  };

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();

      if (fcmToken) {
        console.log('FCM Token:', fcmToken);
      } else {
        console.log('No FCM Token');
      }
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };

  // Create notification channel for Android
  const createNotificationChannel = async () => {
    if (Platform.OS === 'android') {
      await notifee.createChannel({
        id: 'app_notification',
        name: 'App Notification',
        importance: AndroidImportance.HIGH,
      });
    }
  };

  useEffect(() => {
    // Add a dev menu item to toggle Storybook
    if (__DEV__) {
      DevSettings.addMenuItem('Toggle Storybook', () => {
        setShowStorybook((prev: any) => !prev);
      });
    }

    getFcmToken();
    requestNotificationPermission();
    createNotificationChannel();

    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      await notifee.displayNotification({
        title: remoteMessage.notification?.title || 'New Message',
        body: remoteMessage.notification?.body || 'No body',
        android: {
          channelId: 'app_notification',
          smallIcon: 'brand',
          color: colors.primary,
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'app_notification',
          },
        },
      });
    });

    // Handle background or quit state messages
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
      // TODO: Navigate to specific screen based on notification data
    });

    // Handle token refresh
    const unsubscribeTokenRefresh = messaging().onTokenRefresh(async token => {
      console.log('FCM Token refreshed:', token);
    });

    // Check for initial notification
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Initial notification:', remoteMessage.notification);
        }
      });

    return () => {
      unsubscribe();
      unsubscribeTokenRefresh();
    };
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
