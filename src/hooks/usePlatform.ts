import { useCallback } from 'react';
import { Platform } from 'react-native';

const usePlatform = () => {
  const isIOS = useCallback(() => Platform.OS === 'ios', []);
  const isAndroid = useCallback(() => Platform.OS === 'android', []);

  return { isIOS: isIOS(), isAndroid: isAndroid() };
};

export default usePlatform;
