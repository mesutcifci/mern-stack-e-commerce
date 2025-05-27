import { IComponent } from "@custom-types/components";
import { HeroSlider } from "@components/HeroSlider";
import { ImageGrid } from "@components/ImageGrid";
import { SingleImage } from "@components/SingleImage";

// TODO: use a readable map approach for components, instead of switch case
export const ComponentRenderer = ({ data }: { data: IComponent }) => {
  switch (data.type) {
    case "slider-component":
      return <HeroSlider data={data} />;
    case "image-grid":
      return <ImageGrid data={data} />;
    case "single-image":
      return <SingleImage data={data} />;
    default:
      return null;
  }
};
