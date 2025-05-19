import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ScrollView, View } from 'react-native';
import VendorCard from './index';

// Mock
import { VENDOR_DATA_MOCK } from '@/mock/data';

const meta = {
  title: 'Feature/VendorCard',
  component: VendorCard,
  args: {
    ...VENDOR_DATA_MOCK[0],
    onPress: () => {},
  },
  decorators: [
    Story => (
      <View style={{ padding: 16, alignItems: 'center', width: '100%' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof VendorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VendorCardSingle: Story = {
  render: () => <VendorCard {...VENDOR_DATA_MOCK[0]} onPress={() => {}} />,
};

export const VendorCardList: Story = {
  render: () => (
    <ScrollView horizontal>
      {VENDOR_DATA_MOCK.map(({ id, name, image }) => (
        <View style={{ marginRight: 16 }} key={id}>
          <VendorCard image={image} name={name} onPress={() => {}} />
        </View>
      ))}
    </ScrollView>
  ),
};
