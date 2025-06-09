import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CrossRedIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" testID="cross-red-icon" {...props}>
    <Path
      stroke="#EF5A56"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 4-8 8M4 4l8 8"
    />
  </Svg>
);

export default CrossRedIcon;
