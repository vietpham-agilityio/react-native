/**
 * Get formatted date string (e.g., "12 Jan")
 */
export const getFormattedDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  return `${day} ${month}`;
};

/**
 * Get today's date in formatted string
 */
export const getTodayFormatted = (): string => {
  return getFormattedDate(new Date());
};

/**
 * Get tomorrow's date in formatted string
 */
export const getTomorrowFormatted = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getFormattedDate(tomorrow);
};

/**
 * Get current day name (e.g., "Today", "Tomorrow")
 */
export const getDayName = (date: Date): string => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  return date.toLocaleDateString('en-US', { weekday: 'long' });
};
