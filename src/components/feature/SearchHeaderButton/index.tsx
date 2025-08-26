import React from 'react';
import { TouchableOpacity } from 'react-native';

// Icons
import { SearchIcon } from '@/icons';

// Theme
import { colors } from '@/theme';

// Styles
import styles from './SearchHeaderButton.style';

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
}: SearchHeaderButtonProps) => (
  <TouchableOpacity
    accessibilityRole="button"
    onPress={onPress}
    style={[styles.touchable, style]}>
    <SearchIcon color={iconColor} testID="search-icon" />
  </TouchableOpacity>
);

export default SearchHeaderButton;
