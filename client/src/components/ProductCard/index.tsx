import AddToFavoriteButton from "@components/AddToFavoriteButton";
import Price from "@components/Price";
import { ResponsiveImage } from "@components/ResponsiveImage";
import { ProductSliderProductData } from "@custom-types/components/product-slider";

import { twMerge } from "tailwind-merge";

interface ProductCardProps {
  product: ProductSliderProductData;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={twMerge("flex flex-col gap-y-3", className)}>
      <ResponsiveImage
        fallback={{
          url: product.images[0],
          width: 424,
          height: 565,
        }}
        alt={product.name}
      />
      <div className="flex flex-col gap-y-1">
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="text-mesblack text-sm lg:text-base font-bold font-spaceGrotesk">
            {product.name}
          </h3>
          <AddToFavoriteButton isFavorite={false} toggleFavorite={() => {}} />
        </div>
        <Price price={product.price} discountPrice={product.discountPrice} />
      </div>
    </div>
  );
}
