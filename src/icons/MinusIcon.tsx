import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

const MinusIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.333 8h9.333"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MinusIcon;
