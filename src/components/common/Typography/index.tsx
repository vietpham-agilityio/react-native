import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

// Theme
import { colors } from '@/theme';

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

const lineHeightMap: Record<Variant, number> = {
  typoXLarge: 28,
  typoLarge: 24,
  typoMedium: 20,
  typoSmall: 16,
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
          lineHeight: lineHeightMap[variant],
          color: colors.textLight,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Typography;
