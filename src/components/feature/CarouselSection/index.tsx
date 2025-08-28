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

// Utils
import { extractImageUrl } from '@/utils';

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

  if (!books || books.length === 0) {
    return <Typography>No books data</Typography>;
  }

  return (
    <Carousel
      listItems={books.map((book: Book) => {
        const image = extractImageUrl(book.coverImage);
        const { id } = book;

        return {
          id,
          item: (
            <OfferDiscountCard
              key={id}
              title="Special Offer"
              discountPercentage={25}
              image={{ uri: image }}
              onPress={() => handleBookPress(book)}
            />
          ),
        };
      })}
    />
  );
};

export default CarouselSection;
