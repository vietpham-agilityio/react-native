import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.5 5 7 7-7 7"
    />
  </Svg>
);

export default ArrowRightIcon;
