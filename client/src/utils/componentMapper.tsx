import { IComponent } from "@custom-types/components";
import { HeroSlider } from "@components/HeroSlider";

// TODO: use a readable map approach for components, instead of switch case
export const ComponentRenderer = ({ data }: { data: IComponent }) => {
  switch (data.type) {
    case "slider-component":
      return <HeroSlider data={data} />;
    default:
      return null;
  }
};
