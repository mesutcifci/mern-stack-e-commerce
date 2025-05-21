import React from "react";
import { IComponent } from "../types/components";

const SliderComponent = ({ data }: { data: IComponent }) => (
  <div>Slider Component</div>
);
const SingleImageComponent = ({ data }: { data: IComponent }) => (
  <div>Single Image Component</div>
);
const ImageGridComponent = ({ data }: { data: IComponent }) => (
  <div>Image Grid Component</div>
);
const InfoBandComponent = ({ data }: { data: IComponent }) => (
  <div>Info Band Component</div>
);
const NewsletterComponent = ({ data }: { data: IComponent }) => (
  <div>Newsletter Component</div>
);
const FeatureBarComponent = ({ data }: { data: IComponent }) => (
  <div>Feature Bar Component</div>
);

const componentMap: Record<string, React.FC<{ data: IComponent }>> = {
  "slider-component": SliderComponent,
  "single-image": SingleImageComponent,
  "image-grid": ImageGridComponent,
  "info-band": InfoBandComponent,
  newsletter: NewsletterComponent,
  "feature-bar": FeatureBarComponent,
};

export const ComponentRenderer: React.FC<{
  data: IComponent;
  index?: number;
}> = ({ data }) => {
  const ComponentToRender = componentMap[data.type];

  if (!ComponentToRender) {
    console.warn(`No component found for type: ${data.type}`);
    return null;
  }

  return <ComponentToRender data={data} />;
};
