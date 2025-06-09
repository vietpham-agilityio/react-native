import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

// Components
import { Heading, Typography } from '@/components/common';

// Styles
import styles from './ReceivedOrtderContent.style';

// Constants
import IMAGE_STORE from '@/constants/images';

interface ReceivedOrderContentProps {
  orderNumber: number;
}

const ReceivedOrderContent = ({ orderNumber }: ReceivedOrderContentProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGE_STORE.RECEIVED_ORDER as ImageSourcePropType}
        width={160}
        height={92}
        resizeMode="contain"
        alt="Received Order"
        testID="received-order-image"
      />
      <View style={styles.content}>
        <Heading level={3} style={styles.title}>
          You Received The Order!
        </Heading>
        <Typography variant="typoXLarge" style={styles.orderNumber}>
          Order #{orderNumber}
        </Typography>
      </View>
    </View>
  );
};

export default ReceivedOrderContent;
