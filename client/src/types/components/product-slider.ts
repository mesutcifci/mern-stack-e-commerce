import { ProductData } from "@custom-types/product";
import { ComponentBase } from "./common";

export type ProductSliderProductData = Pick<
  ProductData,
  | "name"
  | "slug"
  | "price"
  | "discountPrice"
  | "currency"
  | "images"
  | "ratingsAverage"
>;

export interface ProductSliderData extends ComponentBase {
  type: "product-slider";
  title: string;
  products: ProductSliderProductData[];
}
