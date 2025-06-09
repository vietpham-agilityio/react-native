import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CheckPupleIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" testID="check-puple-icon" {...props}>
    <Path
      stroke="#A28CE0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.333 8 3.334 3.333 6.667-6.666"
    />
  </Svg>
);

export default CheckPupleIcon;
