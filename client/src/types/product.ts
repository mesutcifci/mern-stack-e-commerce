export interface ProductData {
  _id: string;
  name: string;
  slug: string;
  price: number;
  discountPrice: number;
  currency: string;
  stock: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  description: string;
  isActive: boolean;
  images: [string];
  category: string;
}
