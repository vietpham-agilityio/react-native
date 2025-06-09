import { ImageSourcePropType } from 'react-native';

export interface Vendor {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  image: ImageSourcePropType;
  description: string;
  vendor: Vendor;
  price: number;
  rating: number;
  reviews: number;
}

export interface Author extends Vendor {
  role: string;
  description: string;
}

export interface OrderBookItem {
  book: Book;
  quantity: number;
}

export interface OrderDetails {
  id: string;
  orderDate: string;
  orderStatus: string;
  shippingFee: number;
  deliveryIn: string;
  deliveryTime: string;
  listBooks: OrderBookItem[];
}
