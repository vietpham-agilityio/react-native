import { View } from 'react-native';

// Components
import { Typography } from '@/components';

// Styles
import styles from './ErrorFeedback.style';

const ErrorFeedback = ({ error }: { error: string }) => (
  <View style={styles.errorContainer}>
    <Typography variant="typoMedium" weight="bold" style={styles.errorText}>
      {error}
    </Typography>
  </View>
);

export default ErrorFeedback;
