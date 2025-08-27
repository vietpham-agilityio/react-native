import React, { memo, useCallback, useState } from 'react';

import { View, TouchableOpacity } from 'react-native';

// Components
import { Heading, Typography } from '@/components';

// Icons
import { ArrowRightIcon, KnetIcon, CreditCardPaymentIcon } from '@/icons';

// Styles
import styles from './SelectPaymentMethodSheet.style';

interface SelectPaymentMethodSheetProps {
  onSelectPaymentMethod: (method: string) => void;
}

interface PaymentOption {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
}

const SelectPaymentMethodSheet = ({
  onSelectPaymentMethod,
}: SelectPaymentMethodSheetProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentOptions: PaymentOption[] = [
    {
      id: 'knet',
      name: 'KNET',
      icon: KnetIcon,
    },
    {
      id: 'creditCard',
      name: 'Credit Card',
      icon: CreditCardPaymentIcon,
    },
  ];

  const handleSelectPayment = useCallback(
    (method: string) => {
      setSelectedMethod(method);
      onSelectPaymentMethod(method);
    },
    [onSelectPaymentMethod],
  );

  const renderPaymentOption = useCallback(
    ({ id, name, icon: Icon }: PaymentOption) => {
      const isSelected = selectedMethod === name;

      return (
        <TouchableOpacity
          key={id}
          style={[
            styles.paymentOption,
            isSelected && styles.paymentOptionSelected,
          ]}
          onPress={() => handleSelectPayment(name)}>
          <View style={styles.paymentOptionContent}>
            <Icon width={40} height={40} />
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={styles.paymentText}>
              {name}
            </Typography>
          </View>
          <ArrowRightIcon color="#666" />
        </TouchableOpacity>
      );
    },
    [handleSelectPayment, selectedMethod],
  );

  return (
    <View style={styles.sheetContainer}>
      <View style={styles.gestureBar} />
      <Heading level={5} style={styles.title}>
        Your Payments
      </Heading>

      <View style={styles.container}>
        {paymentOptions.map(renderPaymentOption)}
      </View>
    </View>
  );
};

export default memo(SelectPaymentMethodSheet);
