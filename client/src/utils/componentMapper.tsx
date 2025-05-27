import { IComponent } from "@custom-types/components";
import { HeroSlider } from "@components/HeroSlider";
import { ImageGrid } from "@components/ImageGrid";
import { SingleImage } from "@components/SingleImage";
import { FeatureBar } from "@components/FeatureBar";

// TODO: use a readable map approach for components, instead of switch case
export const ComponentRenderer = ({ data }: { data: IComponent }) => {
  switch (data.type) {
    case "slider-component":
      return <HeroSlider data={data} />;
    case "image-grid":
      return <ImageGrid data={data} />;
    case "single-image":
      return <SingleImage data={data} />;
    case "feature-bar":
      return <FeatureBar data={data} />;
    default:
      return null;
  }
};
