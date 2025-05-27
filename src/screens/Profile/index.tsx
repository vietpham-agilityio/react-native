import React from 'react';
import { Image, View } from 'react-native';

// Components
import { Button } from '@/components';

// Styles
import styles from './Profile.style';

// Store
import { useAuth } from '@/store/AuthContext';

const ProfileScreen = () => {
  const { signOut } = useAuth();

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
      </View>
    </View>
  );
};

export default ProfileScreen;
