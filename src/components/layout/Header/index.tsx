import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { Heading } from '@/components';

// Theme
import { colors } from '@/theme';
import { NotificationIcon, SearchIcon } from '@/icons';

type HeaderProps = {
  title: string;
  onPressSearch?: () => void;
  onPressNotification?: () => void;
  showSearchIcon?: boolean;
  showNotificationDot?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  onPressSearch,
  onPressNotification,
  showSearchIcon = false,
  showNotificationDot = false,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {showSearchIcon && (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onPressSearch}
          style={styles.iconButton}>
          <SearchIcon color={colors.black} />
        </TouchableOpacity>
      )}
      <Heading level={4} style={styles.title}>
        {title}
      </Heading>
      {showNotificationDot && (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onPressNotification}
          style={styles.iconButton}>
          <NotificationIcon color={colors.black} />
          <View style={styles.dot} testID="notification-dot" />
        </TouchableOpacity>
      )}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.white,
  },
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  dot: {
    position: 'absolute',
    top: 8,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.error,
  },
});

export default Header;
