import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Price({
  price,
  discountPrice,
  className,
}: {
  price: number;
  discountPrice: number;
  className?: string;
}) {
  return (
    <div className={twMerge("flex gap-x-3 text-mesblack", className)}>
      <p
        className={clsx("font-inter font-semibold text-xs lg:text-sm", {
          "line-through text-moon-landing !font-normal order-last":
            discountPrice < price,
        })}
      >
        ${price}
      </p>
      {discountPrice < price && (
        <p className="font-inter font-semibold text-xs lg:text-sm">
          ${discountPrice}
        </p>
      )}
    </div>
  );
}
