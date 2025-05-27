import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PlusIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3.333v9.334M3.333 8h9.333"
    />
  </Svg>
);

export default PlusIcon;
