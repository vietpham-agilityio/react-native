import React from 'react';
import { render } from '@testing-library/react-native';

// Components
import { ListValidateMessage } from '@/components/feature';

// Constants
import { PASSWORD_VALIDATE_RULES } from '@/constants/regex';

const getLabels = () => PASSWORD_VALIDATE_RULES.map(rule => rule.label);

describe('ListValidateMessage', () => {
  it('shows all rules as failed for empty value', () => {
    const { getByText, queryAllByTestId } = render(
      <ListValidateMessage value="" />,
    );
    getLabels().forEach(label => {
      expect(getByText(label)).toBeTruthy();
    });

    const listCrossRedIcon = queryAllByTestId('cross-red-icon');

    expect(listCrossRedIcon.length).toBe(PASSWORD_VALIDATE_RULES.length);
  });

  it('shows correct icons for a valid password', () => {
    const valid = '12345678Abcdefgh';
    const { queryAllByTestId } = render(<ListValidateMessage value={valid} />);
    expect(queryAllByTestId('check-puple-icon').length).toBe(
      PASSWORD_VALIDATE_RULES.length,
    );
  });

  it('shows mixed icons for a partially valid password', () => {
    const partial = '12345678'; // Only numbers, no letters
    const { queryAllByTestId } = render(
      <ListValidateMessage value={partial} />,
    );
    // Should have at least one CrossRedIcon
    expect(queryAllByTestId('cross-red-icon').length).toBeGreaterThan(0);
    expect(queryAllByTestId('check-puple-icon').length).toBeGreaterThan(0);
  });
});
