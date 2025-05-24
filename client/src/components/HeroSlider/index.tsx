import { ISliderComponent } from "@custom-types/components/slider-component";
import { HeroSliderMedia } from "./HeroSliderMedia";

interface IHeroSliderProps {
  data: ISliderComponent;
}

export function HeroSlider({ data }: IHeroSliderProps) {
  if (!data || data.items?.length === 0 || !data.isActive) return null;

  console.log("data", data);

  return (
    <swiper-container
      pagination="true"
      pagination-clickable="true"
      // autoplay-delay="2500"
    >
      {data.items?.map((item, index) => (
        <swiper-slide key={item._id || index}>
          <HeroSliderMedia item={item} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
