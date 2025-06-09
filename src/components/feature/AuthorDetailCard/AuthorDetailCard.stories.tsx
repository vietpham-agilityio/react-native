import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import AuthorDetailCard from './index';
import { AUTHORS_DATA_MOCK } from '@/mock/data';

const meta: Meta<typeof AuthorDetailCard> = {
  title: 'Feature/AuthorDetailCard',
  component: AuthorDetailCard,
  args: {
    avatar: AUTHORS_DATA_MOCK[0].image,
    name: AUTHORS_DATA_MOCK[0].name,
    role: AUTHORS_DATA_MOCK[0].role,
    rating: 4.0,
    about: AUTHORS_DATA_MOCK[0].description,
  },
  decorators: [
    Story => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AuthorDetailCard>;

export const Default: Story = {};
