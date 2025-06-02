import type { FeatureBarData } from "./feature-bar";
import type { ImageGridData } from "./image-grid";
import type { InfoBandData } from "./info-band";
import type { NewsletterData } from "./newsletter";
import type { SingleImageData } from "./single-image";
import type { SliderComponentData } from "./slider-component";
import type { IFooter } from "./footer";

export type IComponent =
  | SliderComponentData
  | ImageGridData
  | SingleImageData
  | InfoBandData
  | NewsletterData
  | FeatureBarData
  | IFooter;

export interface IComponentProps {
  className?: string;
}
