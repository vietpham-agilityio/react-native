import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Components
import { GiveFeedbackCard } from '@/components/feature';

describe('GiveFeedbackCard', () => {
  it('renders title, description, placeholder, and stars', () => {
    const handleRatingChange = jest.fn();
    const rating = 5;

    const { getByText, getByTestId } = render(
      <GiveFeedbackCard
        description="Test feedback description."
        rating={rating}
        onRatingChange={handleRatingChange}
        placeholder="Write something for us!"
      />,
    );
    expect(getByText(/Tell us your feedback/)).toBeTruthy();
    expect(getByText('Test feedback description.')).toBeTruthy();
    expect(getByText('Write something for us!')).toBeTruthy();
    // Check that all 5 stars are rendered
    for (let i = 1; i <= rating; i++) {
      expect(getByTestId(`star-${i}`)).toBeTruthy();
    }
  });

  it('calls onRatingChange when a star is pressed', () => {
    const onRatingChange = jest.fn();

    const { getByTestId } = render(
      <GiveFeedbackCard
        description="Test feedback description."
        rating={5}
        onRatingChange={onRatingChange}
      />,
    );
    fireEvent.press(getByTestId('star-3'));
    expect(onRatingChange).toHaveBeenCalled;
  });
});
