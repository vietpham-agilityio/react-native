import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

// Components
import { Typography } from '@/components/common';

// Styles
import styles from './TopicItem.style';

interface TopicItemProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const TopicItem = ({ label, isActive, onPress }: TopicItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    activeOpacity={0.7}>
    <Typography
      variant="typoLarge"
      testID={`topic-item-${label}`}
      weight={isActive ? 'bold' : 'regular'}
      style={[styles.text, isActive && styles.textActive]}>
      {label}
    </Typography>
    {isActive && <View style={styles.underline} />}
  </TouchableOpacity>
);

export default memo(TopicItem);
