import { ProductData } from "@custom-types/product";
import { ComponentBase } from "./common";

export interface ProductSliderData extends ComponentBase {
  type: "product-slider";
  title: string;
  products: Pick<
    ProductData,
    | "name"
    | "slug"
    | "price"
    | "discountPrice"
    | "currency"
    | "images"
    | "ratingsAverage"
  >[];
}
