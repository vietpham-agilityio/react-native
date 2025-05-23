import React from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import { Typography, Heading, Button } from '@/components/common';

//  Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors, radius } from '@/theme';

interface AddressCardProps {
  address: string;
  addressDetail: string;
  onChange: () => void;
}

const AddressCard = ({
  address,
  addressDetail,
  onChange,
}: AddressCardProps) => (
  <View style={styles.container}>
    <Heading level={5} style={styles.heading}>
      Address
    </Heading>
    <View style={styles.row}>
      <View style={styles.iconCircle}>
        <Icon name="map-pin" size={24} color={colors.primary} />
      </View>
      <View style={styles.info}>
        <Typography variant="typoLarge" weight="bold" style={styles.label}>
          {address}
        </Typography>
        <Typography
          variant="typoMedium"
          weight="regular"
          style={styles.address}>
          {addressDetail}
        </Typography>
        <Button
          title="Change"
          size="small"
          variant="secondary"
          style={styles.changeBtn}
          onPress={onChange}
        />
      </View>
      <Icon
        name="chevron-right"
        style={styles.chevron}
        size={24}
        color={colors.textDark}
      />
    </View>
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
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: radius.large,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron: {
    marginTop: 14,
  },
  info: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  label: {
    color: colors.textDark,
    lineHeight: 24,
  },
  address: {
    color: colors.grayMedium,
    lineHeight: 20,
  },
  changeBtn: {
    marginTop: 16,
    maxWidth: 100,
  },
});

export default AddressCard;
