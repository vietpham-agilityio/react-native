import React from 'react';
import { View } from 'react-native';

// Components
import { Typography, Heading, Button } from '@/components/common';

//  Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors } from '@/theme';

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

export default AddressCard;
