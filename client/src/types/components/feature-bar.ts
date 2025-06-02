import type { ComponentBase } from "./common";

export interface FeatureBarItemData {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureBarData extends ComponentBase {
  type: "feature-bar";
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  items: FeatureBarItemData[];
}
