import React from 'react';
import { View } from 'react-native';

// Components
import { Heading, Typography } from '@/components/common';

// Styles
import styles from './ConfirmOrderThumbnail.style';

interface ConfirmOrderThumbnailProps {
  orderNumber: number;
  subtitle?: string;
}

const ConfirmOrderThumbnail = ({
  orderNumber,
  subtitle = 'Thank you 👋',
}: ConfirmOrderThumbnailProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="typoLarge" weight="regular" style={styles.subtitle}>
        {subtitle}
      </Typography>
      <Heading level={3} style={styles.title}>
        Bring your favorite book to you!
      </Heading>
      <Typography variant="typoMedium" style={styles.orderNumber}>
        Order #{orderNumber}
      </Typography>
    </View>
  );
};

export default ConfirmOrderThumbnail;
