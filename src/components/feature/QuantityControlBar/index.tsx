import React, { useCallback, memo, useState } from 'react';

// Components
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '@/components/common';

// Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors, radius } from '@/theme';

interface QuantityControlBarProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const QuantityControlBar = ({
  value,
  onChange,
  min = 1,
  max = 20,
}: QuantityControlBarProps) => {
  const [quantity, setQuantity] = useState(value);

  const isDisabledDecrease = quantity <= min;
  const isDisabledIncrease = quantity >= max;

  const handleDecrease = useCallback(() => {
    onChange(quantity - 1);
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  }, [quantity, min, onChange]);

  const handleIncrease = useCallback(() => {
    onChange(quantity + 1);
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  }, [quantity, max, onChange]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.circle,
          isDisabledDecrease ? styles.circleDisabled : styles.circlePrimary,
        ]}
        onPress={handleDecrease}
        disabled={isDisabledDecrease}
        activeOpacity={0.7}
        testID="decrease-btn">
        <Icon name="minus" size={16} color={colors.white} />
      </TouchableOpacity>
      <Typography variant="typoLarge" weight="medium" style={styles.value}>
        {quantity}
      </Typography>
      <TouchableOpacity
        style={[
          styles.circle,
          isDisabledIncrease ? styles.circleDisabled : styles.circlePrimary,
        ]}
        onPress={handleIncrease}
        disabled={isDisabledIncrease}
        activeOpacity={0.7}
        testID="increase-btn">
        <Icon name="plus" size={16} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: radius.small,
    padding: 8,
    gap: 16,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: radius.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleDisabled: {
    backgroundColor: colors.grayLight,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
  },
  textDisabled: {
    color: colors.grayMedium,
  },
  textPrimary: {
    color: colors.textDark,
  },
  value: {
    minWidth: 24,
    textAlign: 'center',
  },
});

export default memo(QuantityControlBar);
