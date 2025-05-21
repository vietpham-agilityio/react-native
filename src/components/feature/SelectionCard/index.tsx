import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Components
import { Typography, Heading } from '@/components/common';

// Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors, radius } from '@/theme';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: radius.extraSmall,
    borderWidth: 1,
    borderColor: colors.borderLight,
    padding: 16,
  },
  heading: {
    marginBottom: 16,
    lineHeight: 24,
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    width: 44,
    height: 44,
    marginRight: 16,
    borderRadius: radius.large,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: colors.textDark,
    lineHeight: 20,
  },
  description: {
    color: colors.grayMedium,
    lineHeight: 20,
  },
});

export default SelectionCard;
