import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

// Components
import HorizontalList from '@/components/common/HorizontalList';

describe('HorizontalList', () => {
  const mockData = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ];

  it('renders the correct number of items', () => {
    const { getAllByText } = render(
      <HorizontalList
        data={mockData}
        renderItem={({ item }) => <Text>{item.label}</Text>}
        keyExtractor={item => item.id}
      />,
    );
    expect(getAllByText(/Item/)).toHaveLength(mockData.length);
  });

  it('calls renderItem for each item', () => {
    const renderItem = jest.fn(({ item }) => <Text>{item.label}</Text>);
    render(
      <HorizontalList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />,
    );
    expect(renderItem).toHaveBeenCalledTimes(mockData.length);
  });

  it('renders the correct number of items when numColumns is provided', () => {
    const { getAllByText } = render(
      <HorizontalList
        data={mockData}
        renderItem={({ item }) => <Text>{item.label}</Text>}
        keyExtractor={item => item.id}
        numColumns={2}
      />,
    );
    expect(getAllByText(/Item/)).toHaveLength(mockData.length);
  });
});
