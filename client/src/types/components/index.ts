import type { IFeatureBar } from "./feature-bar";
import type { IimageGrid } from "./image-grid";
import type { IinfoBand } from "./info-band";
import type { INewsletter } from "./newsletter";
import type { ISingleImage } from "./single-image";
import type { ISliderComponent } from "./slider-component";
import type { IFooter } from "./footer";

export type IComponent =
  | ISliderComponent
  | IimageGrid
  | ISingleImage
  | IinfoBand
  | INewsletter
  | IFeatureBar
  | IFooter;

export interface IComponentProps {
  className?: string;
}
