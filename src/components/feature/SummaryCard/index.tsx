import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Components
import { Heading, Typography } from '@/components/common';

// Icons
import Icon from 'react-native-vector-icons/Feather';

// Theme
import { colors, radius } from '@/theme';

interface SummaryCardProps {
  price: number;
  shipping: number;
  total: number;
  onSeeDetails: () => void;
}

const SummaryCard = ({
  price,
  shipping,
  total,
  onSeeDetails,
}: SummaryCardProps) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Heading level={5} style={styles.heading}>
        Summary
      </Heading>
      <View style={[styles.row, { marginBottom: 8 }]}>
        <Typography variant="typoMedium" style={styles.colorText}>
          Price
        </Typography>
        <Typography variant="typoMedium" style={styles.colorText}>
          ${price.toFixed(2)}
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="typoMedium" style={styles.colorText}>
          Shipping
        </Typography>
        <Typography variant="typoMedium" style={styles.colorText}>
          ${shipping % 1 === 0 ? shipping : shipping.toFixed(2)}
        </Typography>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Typography variant="typoLarge" weight="bold" style={styles.colorText}>
          Total Payment
        </Typography>
        <Typography variant="typoLarge" weight="bold" style={styles.colorText}>
          ${total.toFixed(2)}
        </Typography>
      </View>
    </View>
    <View style={styles.divider} />
    <TouchableOpacity
      style={styles.seeDetailsRow}
      onPress={onSeeDetails}
      activeOpacity={0.7}>
      <Typography
        variant="typoMedium"
        weight="bold"
        style={styles.seeDetailsText}>
        See details
      </Typography>
      <Icon name="chevron-right" size={20} color={colors.primary} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: radius.extraSmall,
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginVertical: 16,
  },
  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  heading: {
    marginBottom: 16,
    color: colors.textDark,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorText: {
    color: colors.textDark,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: 16,
  },
  seeDetailsRow: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
  },
  seeDetailsText: {
    color: colors.primary,
  },
});

export default SummaryCard;
