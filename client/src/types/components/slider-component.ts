import type { IComponentBase } from "./common";

export interface ISliderMedia {
  mobileMedia: {
    type: "image" | "video";
    url: string;
  };
  desktopMedia: {
    type: "image" | "video";
    url: string;
  };
}

export interface ISliderItem {
  media: ISliderMedia;
  title?: string;
  description?: string;
  buttonText?: string;
  link?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  _id: string;
}

export interface ISliderComponent extends IComponentBase {
  type: "slider-component";
  items: ISliderItem[];
  autoplay: boolean;
}
