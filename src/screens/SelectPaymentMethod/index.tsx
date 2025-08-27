import React from 'react';

import { SelectPaymentMethodSheet, StatusBar } from '@/components';

// Navigation
import { useNavigation } from '@react-navigation/native';

const SelectPaymentMethod = () => {
  const navigation = useNavigation<any>();

  const handleSelectPaymentMethod = (_method: string) => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar />
      <SelectPaymentMethodSheet
        onSelectPaymentMethod={handleSelectPaymentMethod}
      />
    </>
  );
};

export default SelectPaymentMethod;
