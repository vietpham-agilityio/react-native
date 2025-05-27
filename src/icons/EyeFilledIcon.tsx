import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const EyeFilledIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} />
    <Path
      stroke="currentColor"
      strokeWidth={2}
      d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z"
    />
  </Svg>
);

export default EyeFilledIcon;
