import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StarSmallIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M7.171 1.844A.918.918 0 0 1 8 1.334a.928.928 0 0 1 .827.51l1.56 3.134 3.488.503a.927.927 0 0 1 .745.622.909.909 0 0 1-.232.94l-2.525 2.44.596 3.445a.91.91 0 0 1-.368.895.927.927 0 0 1-.972.07l-3.12-1.626-3.119 1.628a.93.93 0 0 1-.973-.07.917.917 0 0 1-.366-.897l.595-3.445-2.523-2.44a.914.914 0 0 1-.233-.938.915.915 0 0 1 .745-.623l3.486-.503 1.561-3.134v-.001Z"
    />
  </Svg>
);

export default StarSmallIcon;
