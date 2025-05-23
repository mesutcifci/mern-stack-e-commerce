import { Cloudinary } from "@cloudinary/url-gen/index";
import { ISliderComponent } from "@custom-types/components/slider-component";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

interface IHeroSliderProps {
  data: ISliderComponent;
}

export function HeroSlider({ data }: IHeroSliderProps) {
  return <div>HeroSlider</div>;
}
