import React from 'react';
import { StatusBar as RNStatusBar, StatusBarStyle } from 'react-native';

// Theme
import { colors } from '@/theme';

interface StatusBarProps {
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
  translucent?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({
  barStyle = 'dark-content',
  backgroundColor = colors.white,
  translucent = false,
}) => {
  return (
    <RNStatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      translucent={translucent}
    />
  );
};

export default StatusBar;
