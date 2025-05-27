import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowRightSmallIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.667 3.333 10.332 8l-4.667 4.666"
    />
  </Svg>
);

export default ArrowRightSmallIcon;
