import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Components
import { Typography, Heading } from '@/components/common';

// Icons
import { ArrowRightIcon } from '@/icons';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './SelectionCard.style';

interface SelectionCardProps {
  title: string;
  rightIcon: React.ReactNode;
  label: string;
  description: string;
  onPress: () => void;
}

const SelectionCard = ({
  title,
  rightIcon,
  label,
  description,
  onPress,
}: SelectionCardProps) => (
  <View style={styles.container}>
    <Heading level={5} style={styles.heading}>
      {title}
    </Heading>
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconCircle}>{rightIcon}</View>
      <View style={styles.info}>
        <Typography variant="typoLarge" weight="bold" style={styles.label}>
          {label}
        </Typography>
        <Typography variant="typoMedium" style={styles.description}>
          {description}
        </Typography>
      </View>
      <ArrowRightIcon color={colors.textDark} />
    </TouchableOpacity>
  </View>
);

export default SelectionCard;
