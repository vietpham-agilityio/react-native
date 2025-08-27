import { ActivityIndicator } from 'react-native';

// Components
import { Carousel, ErrorFeedback, OfferDiscountCard } from '@/components';

// Hooks
import { useBooks } from '@/hooks';

// Theme
import { colors } from '@/theme';

// Types
import { Book } from '@/types/models';

const CarouselSection = ({
  handleBookPress,
}: {
  handleBookPress: (book: Book) => void;
}) => {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return <ActivityIndicator size="small" color={colors.primary} />;
  }

  if (error) {
    return <ErrorFeedback error={error} />;
  }

  return (
    <Carousel
      listItems={books.map((book: Book) => {
        const { id, image } = book;

        return {
          id,
          item: (
            <OfferDiscountCard
              key={id}
              title="Special Offer"
              discountPercentage={25}
              image={image}
              onPress={() => handleBookPress(book)}
            />
          ),
        };
      })}
    />
  );
};

export default CarouselSection;
