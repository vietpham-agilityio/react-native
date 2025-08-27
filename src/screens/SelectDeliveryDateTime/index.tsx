import React from 'react';

import { SelectDeliveryDateTimeSheet, StatusBar } from '@/components';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Constants
import { ROUTES } from '@/constants/route';

const SelectDeliveryDateTime = () => {
  const navigation = useNavigation<any>();

  const handleConfirmDateTime = (date: string, time: string) => {
    const dateTimeString = `${date} ${time}`;
    navigation.navigate(ROUTES.CHECKOUT, { selectedDateTime: dateTimeString });
  };

  return (
    <>
      <StatusBar />
      <SelectDeliveryDateTimeSheet onConfirmDateTime={handleConfirmDateTime} />
    </>
  );
};

export default SelectDeliveryDateTime;
