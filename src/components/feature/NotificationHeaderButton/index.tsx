import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// Icons
import { NotificationIcon } from '@/icons';

// Theme
import { colors } from '@/theme';

// Types
interface NotificationHeaderButtonProps {
  onPress?: () => void;
  showBadge?: boolean;
  badgeColor?: string;
  iconColor?: string;
}

const NotificationHeaderButton = ({
  onPress,
  showBadge = true,
  badgeColor = colors.error,
  iconColor = colors.black,
}: NotificationHeaderButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={{
        marginRight: 16,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <NotificationIcon color={iconColor} testID="notification-icon" />
      {showBadge && (
        <View
          testID="notification-badge"
          style={{
            position: 'absolute',
            top: 8,
            right: 11,
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: badgeColor,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default NotificationHeaderButton;
