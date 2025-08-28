// Components
import {
  Carousel,
  ErrorFeedback,
  OfferDiscountCard,
  Typography,
  CarouselSkeleton,
} from '@/components';

// Hooks
import { useBooks } from '@/hooks';

// Types
import { Book } from '@/types/models';

const CarouselSection = ({
  handleBookPress,
}: {
  handleBookPress: (book: Book) => void;
}) => {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return <CarouselSkeleton />;
  }

  if (error) {
    return <ErrorFeedback error={error} />;
  }

  if (books.length === 0) {
    return <Typography>Data is empty</Typography>;
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
