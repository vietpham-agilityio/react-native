import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import QuantityControlBar from '@/components/feature/QuantityControlBar';

describe('QuantityControl', () => {
  it('renders with initial value', () => {
    const { getByText } = render(
      <QuantityControlBar value={2} onChange={() => {}} />,
    );
    expect(getByText('2')).toBeTruthy();
  });

  it('calls onChange with incremented value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <QuantityControlBar value={1} onChange={onChange} />,
    );

    fireEvent.press(getByTestId('increase-btn'));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with decremented value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <QuantityControlBar value={2} onChange={onChange} />,
    );

    fireEvent.press(getByTestId('decrease-btn'));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('does not decrement below min', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <QuantityControlBar value={1} min={1} onChange={onChange} />,
    );

    fireEvent.press(getByTestId('decrease-btn'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not increment above max', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <QuantityControlBar value={10} max={10} onChange={onChange} />,
    );

    fireEvent.press(getByTestId('increase-btn'));
    expect(onChange).not.toHaveBeenCalled();
  });
});
