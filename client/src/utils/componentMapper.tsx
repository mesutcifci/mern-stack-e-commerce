import { IComponent } from "@custom-types/components";
import { HeroSlider } from "@components/HeroSlider";
import { ImageGrid } from "@components/ImageGrid";
import { SingleImage } from "@components/SingleImage";
import { FeatureBar } from "@components/FeatureBar";
import ProductSlider from "@components/ProductSlider";

// TODO: use a readable map approach for components, instead of switch case
export const ComponentRenderer = ({
  data,
  className,
}: {
  data: IComponent;
  className?: string;
}) => {
  switch (data.type) {
    case "slider-component":
      return <HeroSlider data={data} className={className} />;
    case "image-grid":
      return <ImageGrid data={data} className={className} />;
    case "single-image":
      return <SingleImage data={data} className={className} />;
    case "feature-bar":
      return <FeatureBar data={data} className={className} />;
    case "product-slider":
      return <ProductSlider data={data} className={className} />;
    default:
      return null;
  }
};
