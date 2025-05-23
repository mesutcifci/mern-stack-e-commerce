import { ReactNode } from "react";
import type { SwiperSlideProps, SwiperProps } from "swiper/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement,
        ReactNode
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement,
        ReactNode
      >;
    }
  }
}
