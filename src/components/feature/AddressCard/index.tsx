import React from 'react';
import { View } from 'react-native';

// Components
import { Typography, Heading, Button } from '@/components/common';

// Theme
import { colors } from '@/theme';

// Icons
import { MapIcon, ArrowRightIcon } from '@/icons';

// Styles
import styles from './AddressCard.style';

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
        <MapIcon color={colors.primary} />
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
      <ArrowRightIcon style={styles.chevron} color={colors.textDark} />
    </View>
  </View>
);

export default AddressCard;
