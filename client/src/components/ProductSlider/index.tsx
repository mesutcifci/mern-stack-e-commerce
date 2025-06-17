import ProductCard from "@components/ProductCard";
import { IComponentProps } from "@custom-types/components";
import { ProductSliderData } from "@custom-types/components/product-slider";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import type { SwiperContainer } from "swiper/element";
import { ChevronRight } from "@icons/ChevronRight";
import { ChevronLeft } from "@icons/ChevronLeft";

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
    <div className={twMerge("", className)}>
      <h3 className="text-2xl font-medium font-spaceGrotesk mb-5">
        {data.title}
      </h3>
      <div className="relative group">
        {data.products && (
          <swiper-container
            ref={swiperRef}
            navigation-next-el={`#next-button-${data.slug}`}
            navigation-prev-el={`#prev-button-${data.slug}`}
            navigation={true}
            init="false"
            loop={true}
          >
            {data.products.map((product) => (
              <swiper-slide key={product.slug}>
                <ProductCard product={product} />
              </swiper-slide>
            ))}
          </swiper-container>
        )}
        <button
          id={`prev-button-${data.slug}`}
          className="absolute top-1/2 -translate-y-1/2 left-1 z-product-slider-buttons hidden lg:group-hover:block"
        >
          <ChevronLeft className="w-6 h-6 xl:w-8 xl:h-8" />
        </button>
        <button
          id={`next-button-${data.slug}`}
          className="absolute top-1/2 -translate-y-1/2 right-1 z-product-slider-buttons hidden lg:group-hover:block"
        >
          <ChevronRight className="w-6 h-6 xl:w-8 xl:h-8" />
        </button>
      </div>
    </div>
  );
}
