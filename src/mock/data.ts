import { Author, Book, Vendor } from '@/types/models';

export const VENDOR_DATA_MOCK: Vendor[] = [
  {
    id: '1',
    name: 'Warehouse',
    image: require('@assets/images/vendors/ware-house.webp'),
  },
  {
    id: '2',
    name: 'Kuromi',
    image: require('@assets/images/vendors/kuromi.webp'),
  },
  {
    id: '3',
    name: 'Gooday',
    image: require('@assets/images/vendors/gooday.webp'),
  },
  {
    id: '4',
    name: 'Crane Company',
    image: require('@assets/images/vendors/crane-co.webp'),
  },
];

export const AUTHORS_DATA_MOCK: Author[] = [
  {
    id: '1',
    image: require('@assets/images/authors/harper-lee.webp'),
    name: 'Harper Lee',
    role: 'Writer',
    description:
      'Nelle Harper Lee was an American novelist whose 1960 novel To Kill a Mockingbird won the 1961 Pulitzer Prize and became a classic of modern American literature. She assisted her close friend Truman Capote in his research for the book In Cold Blood.',
  },

  {
    id: '2',
    image: require('@assets/images/authors/jose-mauro-de.webp'),
    name: 'Jose Mauro',
    role: 'Novelist',
    description:
      'José Mauro was born in Rio de Janeiro on February 26, 1920. His family was very poor, and when he was still very young, he migrated to Natal where relatives took care of him. Entering the Medical faculty, Mauro abandoned the course of studies in his second year and returned to Rio de Janeiro.',
  },
  {
    id: '3',
    image: require('@assets/images/authors/murakami.webp'),
    name: 'H.Murakami',
    role: 'Novelist',
    description:
      'Haruki Murakami is a Japanese writer. His novels, essays, and short stories have been best-sellers in Japan and internationally, with his work translated into 50 languages and having sold millions of copies outside Japan.',
  },
  {
    id: '4',
    image: require('@assets/images/authors/nhat-anh.webp'),
    name: 'Nhat Anh',
    role: 'Writer',
    description:
      "Nguyễn Nhật Ánh is a Vietnamese author who writes for teenagers and adults. He also works as a teacher, poet and correspondent. His works include approximately 30 novels, 4 essays, 2 series and some collections of poems. He is regarded as one of Vietnam's most successful contemporary writers.",
  },
];

export const BOOKS_DATA_MOCK: Book[] = [
  {
    id: '1',
    title: 'I Talk About Running',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/what-i-talk-when-running.webp'),
    description:
      'What I Talk About When I Talk About Running is a memoir by Haruki Murakami in which he writes about his interest and participation in long-distance running. The book is translated to English by Philip Gabriel.',
    vendor: VENDOR_DATA_MOCK[2],
    price: 8.99,
    rating: 4,
    reviews: 1200,
  },
  {
    id: '2',
    title: 'Kafka on the Beach',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/kafka-on-beach.webp'),
    description:
      'Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among "The 10 Best Books of 2005" from The New York Times and received the World Fantasy Award for 2006.',
    vendor: VENDOR_DATA_MOCK[1],
    price: 10.99,
    rating: 5,
    reviews: 380,
  },
  {
    id: '3',
    title: 'Kill a Mockingbird',
    author: 'Harper Lee',
    image: require('@assets/images/books/kill-a-mocking.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[0],
    price: 12.99,
    rating: 4,
    reviews: 2340,
  },
  {
    id: '4',
    title: 'My Orange Tree',
    author: 'Jose Mauro Torre',
    image: require('@assets/images/books/my-orange-tree.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[3],
    price: 13.3,
    rating: 4,
    reviews: 872,
  },
  {
    id: '5',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/norwegian-wood.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[1],
    price: 12.99,
    rating: 5,
    reviews: 6720,
  },
  {
    id: '6',
    title: 'I Talk About Running',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/what-i-talk-when-running.webp'),
    description:
      'What I Talk About When I Talk About Running is a memoir by Haruki Murakami in which he writes about his interest and participation in long-distance running. The book is translated to English by Philip Gabriel.',
    vendor: VENDOR_DATA_MOCK[2],
    price: 8.99,
    rating: 4,
    reviews: 1200,
  },
  {
    id: '7',
    title: 'Kafka on the Beach',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/kafka-on-beach.webp'),
    description:
      'Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among "The 10 Best Books of 2005" from The New York Times and received the World Fantasy Award for 2006.',
    vendor: VENDOR_DATA_MOCK[1],
    price: 10.99,
    rating: 5,
    reviews: 380,
  },
  {
    id: '8',
    title: 'Kill a Mockingbird',
    author: 'Harper Lee',
    image: require('@assets/images/books/kill-a-mocking.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[0],
    price: 12.99,
    rating: 4,
    reviews: 2340,
  },
  {
    id: '9',
    title: 'My Orange Tree',
    author: 'Jose Mauro Torre',
    image: require('@assets/images/books/my-orange-tree.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[3],
    price: 13.3,
    rating: 4,
    reviews: 872,
  },
  {
    id: '10',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    image: require('@assets/images/books/norwegian-wood.webp'),
    description: 'A novel about the American Dream',
    vendor: VENDOR_DATA_MOCK[1],
    price: 12.99,
    rating: 5,
    reviews: 6720,
  },
];
