import React from 'react';

// Theme
import { radius } from '@/theme';

// Components
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const Avatar = ({ source, size = 40, style }: AvatarProps) => {
  return (
    <Image
      source={source}
      testID="avatar-image"
      style={[
        { width: size, height: size, borderRadius: radius.extraLarge },
        style,
      ]}
    />
  );
};

export default Avatar;
