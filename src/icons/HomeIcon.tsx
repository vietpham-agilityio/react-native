import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={27} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M9.135 22.822v-3.25c0-.828.637-1.5 1.423-1.5h2.875c.377 0 .74.157 1.006.439.267.282.417.664.417 1.062v3.249c-.002.345.126.676.356.92.23.245.544.383.87.383h1.962a3.359 3.359 0 0 0 2.443-1.062A3.74 3.74 0 0 0 21.5 20.49v-9.256c0-.78-.328-1.52-.895-2.02l-6.671-5.62a2.958 2.958 0 0 0-3.949.076L3.467 9.212a2.686 2.686 0 0 0-.967 2.021v9.247c0 2.013 1.547 3.645 3.456 3.645h1.916c.68 0 1.231-.578 1.236-1.294l.027-.01Z"
    />
  </Svg>
);

export default HomeIcon;
