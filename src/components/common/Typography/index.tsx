import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export type Variant = 'typoXLarge' | 'typoLarge' | 'typoMedium' | 'typoSmall';
export type Weight = 'bold' | 'semibold' | 'medium' | 'regular';

interface TypographyProps extends RNTextProps {
  variant?: Variant;
  weight?: Weight;
  children: React.ReactNode;
}

const fontWeightMap: Record<Weight, string> = {
  bold: 'Roboto-Bold',
  semibold: 'Roboto-SemiBold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
};

const fontSizeMap: Record<Variant, number> = {
  typoXLarge: 18,
  typoLarge: 16,
  typoMedium: 14,
  typoSmall: 12,
};

const Typography = ({
  variant = 'typoMedium',
  weight = 'regular',
  style,
  children,
  ...props
}: TypographyProps) => {
  return (
    <RNText
      style={[
        {
          fontFamily: fontWeightMap[weight],
          fontSize: fontSizeMap[variant],
          color: '#333',
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Typography;
