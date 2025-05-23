import React from "react";
import { IComponent } from "@custom-types/components";
import { HeroSlider } from "@components/HeroSlider";
import { ISliderComponent } from "@custom-types/components/slider-component";

const componentMap: Record<
  string,
  (props: { data: IComponent }) => JSX.Element
> = {
  "slider-component": ({ data }) => (
    <HeroSlider data={data as ISliderComponent} />
  ),
};

export const ComponentRenderer = ({
  data,
}: {
  data: IComponent;
  index?: number;
}): JSX.Element | null => {
  const ComponentToRender = componentMap[data.type];

  if (!ComponentToRender) {
    console.warn(`No component found for type: ${data.type}`);
    return null;
  }

  return <ComponentToRender data={data} />;
};
