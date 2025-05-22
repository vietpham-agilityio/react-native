export const VENDOR_DATA_MOCK = [
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

export const AUTHORS_DATA_MOCK = [
  {
    id: '1',
    image: require('@assets/images/authors/harper-lee.webp'),
    name: 'Harper Lee',
    role: 'Writer',
  },

  {
    id: '2',
    image: require('@assets/images/authors/jose-mauro-de.webp'),
    name: 'Jose Mauro',
    role: 'Novelist',
  },
  {
    id: '3',
    image: require('@assets/images/authors/murakami.webp'),
    name: 'H.Murakami',
    role: 'Novelist',
  },
  {
    id: '4',
    image: require('@assets/images/authors/nhat-anh.webp'),
    name: 'Nhat Anh',
    role: 'Writer',
  },
];

export const BOOKS_DATA_MOCK = [
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
];
