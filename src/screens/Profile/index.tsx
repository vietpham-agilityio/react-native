import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

// Components
import { Button } from '@/components';

// Styles
import styles from './Profile.style';

// Store
import { useAuth } from '@/store/AuthContext';

// Notification
import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { colors } from '@/theme';

const ProfileScreen = () => {
  const { signOut } = useAuth();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const handleDisplayNotifications = async () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);

    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      id: '1',
      title: 'Bazer Books',
      body: 'You have a new notification',
      android: {
        channelId,
        smallIcon: 'brand',
        color: colors.primary,
        pressAction: {
          id: 'mark-as-read',
        },
      },
    });
  };

  const handleCancelNotification = async () => {
    await notifee.cancelNotification('1');
  };

  const handleOnCreateTriggerNotification = async () => {
    try {
      const date = new Date(Date.now() + 10 * 1000); // 10 seconds from now

      const timeTrigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime(),
      };

      await notifee.createTriggerNotification(
        {
          id: '2',
          title: 'Bazer Books',
          body: 'Time to send daily email report',
          android: {
            channelId: 'default',
            smallIcon: 'brand',
            color: colors.primary,
          },
        },
        timeTrigger,
      );
    } catch (error) {
      console.log('Error creating trigger notification', error);
    }
  };

  useEffect(() => {
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      switch (type) {
        case EventType.PRESS:
          console.log('Press', detail.notification);
          await notifee.cancelNotification('1');
          break;
        case EventType.DISMISSED:
          console.log('Dismissed', detail.notification);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <View>
      <View style={styles.screenContainer}>
        <Image
          source={require('@assets/images/profile-not-implement.png')}
          style={styles.profileImage}
        />
        <Button
          title="Sign Out"
          variant="primary"
          size="medium"
          onPress={signOut}
        />
        <View style={styles.buttonNotification}>
          <Button
            title="Display Notifications"
            variant="secondary"
            size="small"
            onPress={handleDisplayNotifications}
          />
        </View>
        <View style={styles.buttonNotification}>
          <Button
            title="Cancel Notification"
            variant="primary"
            size="small"
            onPress={handleCancelNotification}
          />
          <Button
            title="Create Trigger Notification"
            variant="primary"
            size="small"
            onPress={handleOnCreateTriggerNotification}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
