import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import { TopicItem } from '@/components/common';

describe('TopicItem', () => {
  it('renders label', () => {
    const { getByText } = render(
      <TopicItem label="All" isActive={false} onPress={() => {}} />,
    );
    expect(getByText('All')).toBeTruthy();
  });

  it('shows underline and bold when active', () => {
    const { getByText } = render(
      <TopicItem label="All" isActive={true} onPress={() => {}} />,
    );
    const textElement = getByText('All');

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Bold',
        }),
      ]),
    );
  });

  it('does not show underline when inactive', () => {
    const { getByText } = render(
      <TopicItem label="Novels" isActive={false} onPress={() => {}} />,
    );
    const textElement = getByText('Novels');

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: '#333',
          fontFamily: 'Roboto-Regular',
        }),
      ]),
    );
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();

    const { getByText } = render(
      <TopicItem label="All" isActive={false} onPress={onPress} />,
    );

    fireEvent.press(getByText('All'));

    expect(onPress).toHaveBeenCalled();
  });
});
