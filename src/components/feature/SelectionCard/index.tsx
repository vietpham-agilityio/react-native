import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// Components
import { Typography, Heading } from '@/components/common';

// Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './SelectionCard.style';

interface SelectionCardProps {
  title: string;
  iconName: string;
  label: string;
  description: string;
  onPress: () => void;
}

const SelectionCard = ({
  title,
  iconName,
  label,
  description,
  onPress,
}: SelectionCardProps) => (
  <View style={styles.container}>
    <Heading level={5} style={styles.heading}>
      {title}
    </Heading>
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconCircle}>
        <Icon name={iconName} size={24} color={colors.primary} />
      </View>
      <View style={styles.info}>
        <Typography variant="typoLarge" weight="bold" style={styles.label}>
          {label}
        </Typography>
        <Typography variant="typoMedium" style={styles.description}>
          {description}
        </Typography>
      </View>
      <Icon name="chevron-right" size={24} color={colors.textDark} />
    </TouchableOpacity>
  </View>
);

export default SelectionCard;
