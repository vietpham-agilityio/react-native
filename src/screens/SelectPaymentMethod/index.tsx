import React from 'react';

import { SelectPaymentMethodSheet, StatusBar } from '@/components';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Constants
import { ROUTES } from '@/constants/route';

const SelectPaymentMethod = () => {
  const navigation = useNavigation<any>();

  const handleSelectPaymentMethod = (method: string) => {
    navigation.navigate(ROUTES.CHECKOUT, { selectedPaymentMethod: method });
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
