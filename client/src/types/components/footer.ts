import type { ComponentBase } from "./common";

export interface FooterSubItemData {
  text: string;
  textColor: string;
  link: string;
}

export interface FooterItemData {
  text: string;
  textColor: string;
  link?: string;
  subItems: FooterSubItemData[];
}

export interface IFooter extends ComponentBase {
  type: "footer";
  items: FooterItemData[];
  backgroundColor: string;
  textColor: string;
  description?: string;
  iconColor: string;
}
