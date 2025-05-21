import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import AddressCard from '@/components/feature/AddressCard';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

describe('AddressCard', () => {
  const address = 'Utama Street No.20';
  const addressDetail =
    'Dumbo Street No.20, Dumbo, New York 10001, United States';

  it('renders address and addressDetail', () => {
    const { getByText } = render(
      <AddressCard
        address={address}
        addressDetail={addressDetail}
        onChange={() => {}}
      />,
    );
    expect(getByText(address)).toBeTruthy();
    expect(getByText(addressDetail)).toBeTruthy();
  });

  it('calls onChange when Change button is pressed', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <AddressCard
        address={address}
        addressDetail={addressDetail}
        onChange={onChange}
      />,
    );
    fireEvent.press(getByText('Change'));

    expect(onChange).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = render(
      <AddressCard
        address={address}
        addressDetail={addressDetail}
        onChange={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
