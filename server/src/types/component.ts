import type { Types } from 'mongoose';

interface IComponentMedia {
	mobileMedia: string;
	desktopMedia: string;
}

interface ISliderItem {
	media: IComponentMedia[];
	title?: string;
	description?: string;
	buttonText?: string;
	link?: string;
	textColor?: string;
	buttonBackgroundColor?: string;
	buttonTextColor?: string;
}

interface ICampaignBandItem {
	text: string;
	textColor: string;
	backgroundColor: string;
}

interface IComponentPage {
	name: string;
	order: number;
}

interface IComponentBase {
	name: string;
	slug: string;
	isActive: boolean;
	page: IComponentPage[];
	type: string;
}

export interface ICampaignBand extends IComponentBase {
	type: 'campaign-band';
	items: ICampaignBandItem[];
	autoplay: boolean;
}
export interface ISliderComponent extends IComponentBase {
	type: 'slider-component';
	items: ISliderItem[];
	autoplay: boolean;
}

export interface IProductComponent extends IComponentBase {
	type: 'product-component';
	products: Types.ObjectId[];
}

export type IComponent = ISliderComponent | IProductComponent;

export type { IComponentMedia, IComponentPage, ISliderItem };
