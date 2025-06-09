import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

// Components
import { ListValidateMessage } from '@/components/feature';

const meta: Meta<typeof ListValidateMessage> = {
  title: 'Feature/ListValidateMessage',
  component: ListValidateMessage,
  decorators: [
    Story => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ListValidateMessage>;

export const ListValidateMessageWithNumbers: Story = {
  render: () => <ListValidateMessage value="12345678" />,
};

export const ListValidateMessageWithLetters: Story = {
  render: () => <ListValidateMessage value="abcdefgh" />,
};

export const ListValidateMessageWithNumbersAndLetters: Story = {
  render: () => <ListValidateMessage value="12345678abcdefgh" />,
};

export const ListValidateMessageWithValidPassword: Story = {
  render: () => <ListValidateMessage value="12345678Abcdefgh" />,
};

export const ListValidateMessageWithInvalidPassword: Story = {
  render: () => <ListValidateMessage value="1" />,
};
