import { IComponentProps } from "@custom-types/components";
import { ProductSliderData } from "@custom-types/components/product-slider";
import { twMerge } from "tailwind-merge";

interface IProductSliderProps extends IComponentProps {
  data: ProductSliderData;
}

export default function ProductSlider({
  data,
  className,
}: IProductSliderProps) {
  if (!data || !data.isActive) return null;

  console.log("data", data);

  return (
    <div className={twMerge("relative border border-red-500", className)}>
      ProductSlider
    </div>
  );
}
