import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CreditCardIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v7.5H0V6Zm17.25 1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-3ZM0 16.5V18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-1.5H0Z"
    />
  </Svg>
);

export default CreditCardIcon;
