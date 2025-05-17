import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import Typography, { type Variant, type Weight } from '../';

describe('Typography Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Typography>Typography Text</Typography>);
    const typographyElement = getByText('Typography Text');

    expect(typographyElement).toBeTruthy();
  });

  it('applies the correct style for each variant and weight', () => {
    const variants = ['bodyXLarge', 'bodyLarge', 'bodyMedium', 'bodySmall'];
    const weights = ['bold', 'semibold', 'medium', 'regular'];

    variants.forEach(variant => {
      weights.forEach(weight => {
        const { getByText, unmount } = render(
          <Typography variant={variant as Variant} weight={weight as Weight}>
            {`${variant}-${weight}`}
          </Typography>,
        );
        const typographyElement = getByText(`${variant}-${weight}`);
        expect(typographyElement).toBeTruthy();
        unmount();
      });
    });
  });

  it('passes additional props to Typography component', () => {
    const { getByText } = render(
      <Typography style={{ color: 'red' }} numberOfLines={2}>
        Styled Typography
      </Typography>,
    );
    const typographyElement = getByText('Styled Typography');
    expect(typographyElement).toBeTruthy();
  });
});
