import React, { memo, useCallback, useMemo, useState } from 'react';

import { View, TouchableOpacity } from 'react-native';

// Components
import { Heading, Typography, Button } from '@/components';

// Utils
import { getTodayFormatted, getTomorrowFormatted } from '@/utils';

// Styles
import styles from './SelectDeliveryDateTimeSheet.style';

interface SelectDeliveryDateTimeSheetProps {
  onConfirmDateTime: (date: string, time: string) => void;
}

interface DateOption {
  id: string;
  label: string;
  value: string;
  date?: string;
}

interface TimeOption {
  id: string;
  title: string;
  label: string;
  value: string;
}

const timeOptions: TimeOption[] = [
  {
    id: '6-10',
    title: 'Between',
    label: '6AM - 10AM',
    value: '6-10',
  },
  {
    id: '13-17',
    title: 'Between',
    label: '13PM - 17PM',
    value: '13-17',
  },
];

enum DateOptionValue {
  Today = 'today',
  Tomorrow = 'tomorrow',
  Pick = 'pick',
}

const SelectDeliveryDateTimeSheet = ({
  onConfirmDateTime,
}: SelectDeliveryDateTimeSheetProps) => {
  const [selectedDate, setSelectedDate] = useState<DateOptionValue>(
    DateOptionValue.Today,
  );
  const [selectedTime, setSelectedTime] = useState<string>('6-10');

  const dateOptions: DateOption[] = useMemo(
    () => [
      {
        id: 'today',
        label: 'Today',
        date: getTodayFormatted(),
        value: DateOptionValue.Today,
      },
      {
        id: 'tomorrow',
        label: 'Tomorrow',
        date: getTomorrowFormatted(),
        value: DateOptionValue.Tomorrow,
      },
      {
        id: 'pick',
        label: 'Pick a date',
        value: DateOptionValue.Pick,
      },
    ],
    [],
  );

  const handleSelectDate = useCallback((dateValue: DateOptionValue) => {
    setSelectedDate(dateValue);
  }, []);

  const handleSelectTime = useCallback((timeValue: string) => {
    setSelectedTime(timeValue);
  }, []);

  const handleConfirm = useCallback(() => {
    const selectedDateOption = dateOptions.find(
      option => option.value === selectedDate,
    );
    const selectedTimeOption = timeOptions.find(
      option => option.value === selectedTime,
    );

    if (selectedDateOption && selectedTimeOption) {
      const dateLabel = selectedDateOption.date
        ? `${selectedDateOption.label} ${selectedDateOption.date}`
        : selectedDateOption.label;
      onConfirmDateTime(dateLabel, selectedTimeOption.label);
    }
  }, [selectedDate, selectedTime, onConfirmDateTime, dateOptions]);

  const renderDateOption = useCallback(
    ({ id, label, value, date }: DateOption) => {
      const isSelected = selectedDate === value;
      const isPickDateOption = value === DateOptionValue.Pick;

      return (
        <TouchableOpacity
          key={id}
          style={[
            styles.optionButton,
            isSelected && styles.optionButtonSelected,
            isPickDateOption && styles.optionButtonDisabled,
          ]}
          onPress={() => {
            if (!isPickDateOption) {
              handleSelectDate(value as DateOptionValue);
            }
          }}
          disabled={isPickDateOption}>
          <Typography
            variant="typoMedium"
            weight="semibold"
            style={[
              styles.optionText,
              !isPickDateOption && isSelected && styles.optionTextSelected,
            ]}>
            {label}
          </Typography>
          {date && (
            <Typography
              variant="typoMedium"
              weight="semibold"
              style={[
                styles.optionText,
                !isPickDateOption && isSelected && styles.optionTextSelected,
              ]}>
              {date}
            </Typography>
          )}
        </TouchableOpacity>
      );
    },
    [selectedDate, handleSelectDate],
  );

  const renderTimeOption = useCallback(
    ({ id, title, label, value }: TimeOption) => {
      const isSelected = selectedTime === value;

      return (
        <TouchableOpacity
          key={id}
          style={[
            styles.optionButton,
            isSelected && styles.optionButtonSelected,
          ]}
          onPress={() => handleSelectTime(value)}>
          <Typography
            variant="typoMedium"
            weight="semibold"
            style={[
              styles.optionText,
              isSelected && styles.optionTextSelected,
            ]}>
            {title}
          </Typography>
          <Typography
            variant="typoMedium"
            weight="semibold"
            style={[
              styles.optionText,
              isSelected && styles.optionTextSelected,
            ]}>
            {label}
          </Typography>
        </TouchableOpacity>
      );
    },
    [selectedTime, handleSelectTime],
  );

  return (
    <View style={styles.sheetContainer}>
      <View style={styles.gestureBar} />
      <Heading level={5} style={styles.title}>
        Delivery date
      </Heading>

      <View style={styles.optionsContainer}>
        {dateOptions.map(renderDateOption)}
      </View>

      <Heading level={5} style={styles.title}>
        Delivery time
      </Heading>

      <View style={styles.optionsContainer}>
        {timeOptions.map(renderTimeOption)}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Confirm"
          size="medium"
          variant="primary"
          onPress={handleConfirm}
          style={styles.confirmButton}
        />
      </View>
    </View>
  );
};

export default memo(SelectDeliveryDateTimeSheet);
