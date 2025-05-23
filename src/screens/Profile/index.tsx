import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Components
import { Header } from '@/components';

// Theme
import { colors } from '@/theme';

const ProfileScreen = () => (
  <View>
    <Header title="Profile" showSearchIcon showNotificationDot />
    <View style={styles.screenContainer}>
      <Image
        source={require('@assets/images/profile-not-implement.png')}
        style={styles.profileImage}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    paddingTop: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profileImage: {
    width: '50%',
    height: 200,
    alignSelf: 'center',
    marginTop: 24,
  },
});

export default ProfileScreen;
