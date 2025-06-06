import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '@/theme';

const BazerIcon = (props: SvgProps) => (
  <Svg width={39} height={38} viewBox="0 0 39 38" fill="none" {...props}>
    <Path
      fill={colors.white}
      d="M25.706 37.972s-3.563-9.319 0-12.856c3.538-3.514 12.767 0 12.767 0V12.795c-7.053 0-12.767-5.714-12.767-12.767h-12.32s3.525 9.242 0 12.767c-3.526 3.526-12.768 0-12.768 0v12.32c7.053 0 12.767 5.804 12.767 12.857h12.321Z"
    />
  </Svg>
);

export default BazerIcon;
