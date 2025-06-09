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
