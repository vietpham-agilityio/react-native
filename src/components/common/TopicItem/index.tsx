import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

// Components
import { Typography } from '@/components/common';
import { colors } from '@/theme';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 2,
  },
  text: {
    color: colors.grayMedium,
  },
  textActive: {
    color: colors.black,
  },
  underline: {
    marginTop: 2,
    width: 8,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
});

export default memo(TopicItem);
