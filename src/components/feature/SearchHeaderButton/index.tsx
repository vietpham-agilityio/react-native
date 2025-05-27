import React from 'react';
import { TouchableOpacity } from 'react-native';

// Icons
import { SearchIcon } from '@/icons';

// Theme
import { colors } from '@/theme';

// Types
interface SearchHeaderButtonProps {
  onPress?: () => void;
  iconColor?: string;
  style?: object;
}

const SearchHeaderButton = ({
  onPress,
  iconColor = colors.black,
  style,
}: SearchHeaderButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[
        {
          marginLeft: 16,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <SearchIcon color={iconColor} testID="search-icon" />
    </TouchableOpacity>
  );
};

export default SearchHeaderButton;
