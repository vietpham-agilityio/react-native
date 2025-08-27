import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const KnetIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Rect width={40} height={40} rx={20} fill="#3784FB" />
    <Path d="M15.8163 15H7.1001V24.3173H15.8163V15Z" fill="#FBED1F" />
    <Path
      d="M15.5156 19.1327L21.9776 15.0752H33.4739L27.1622 19.1327L33.9999 24.1671H21.6771L15.6659 19.5084L15.5156 19.1327Z"
      fill="#FBED1F"
    />
  </Svg>
);

export default KnetIcon;
