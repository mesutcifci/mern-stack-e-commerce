import ProductCard from "@components/ProductCard";
import { IComponentProps } from "@custom-types/components";
import { ProductSliderData } from "@custom-types/components/product-slider";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import type { SwiperContainer } from "swiper/element";

interface IProductSliderProps extends IComponentProps {
  data: ProductSliderData;
}

export default function ProductSlider({
  data,
  className,
}: IProductSliderProps) {
  const swiperRef = useRef<SwiperContainer | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperParams = {
        spaceBetween: 16,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
      };

      Object.assign(swiperRef.current, swiperParams);
      swiperRef.current.initialize();
    }
  }, []);

  if (!data || !data.isActive) return null;

  return (
    <div className={twMerge("relative", className)}>
      <h3 className="text-2xl font-bold">{data.title}</h3>
      {data.products && (
        <swiper-container init="false" ref={swiperRef}>
          {data.products.map((product) => (
            <swiper-slide key={product.slug}>
              <ProductCard product={product} />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </div>
  );
}
