import React from 'react';
import { View } from 'react-native';

// Components
import { Typography } from '@/components/common';

// Icons
import { CheckPupleIcon, CrossRedIcon } from '@/icons';

// Constants
import { PASSWORD_VALIDATE_RULES } from '@/constants/regex';

// Styles
import styles from './ListValidateMessage.style';

interface ListValidateMessageProps {
  value: string;
}

const ListValidateMessage = ({ value }: ListValidateMessageProps) => (
  <View>
    {PASSWORD_VALIDATE_RULES.map(rule => {
      const { id, validate, label } = rule;
      const passed = validate(value);

      return (
        <View key={id} style={styles.container}>
          {passed ? <CheckPupleIcon /> : <CrossRedIcon />}
          <Typography
            variant="typoMedium"
            weight="regular"
            style={styles.label}>
            {label}
          </Typography>
        </View>
      );
    })}
  </View>
);

export default ListValidateMessage;
