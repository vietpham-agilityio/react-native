import React from 'react';

import { PaymentDetailSheet, StatusBar } from '@/components';

const PaymentDetail = ({ route }: { route: any }) => {
  const { items } = route.params;

  return (
    <>
      <StatusBar />
      <PaymentDetailSheet items={items} shipping={2} />
    </>
  );
};

export default PaymentDetail;
