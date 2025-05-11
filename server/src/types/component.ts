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

interface IimageGridItem {
	image: string;
	title: string;
	subtitle: string;
	textColor: string;
	link: string;
	type: 'full' | 'half';
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

export interface IProductSlider extends IComponentBase {
	type: 'product-slider';
	products: Types.ObjectId[];
}

export interface IimageGrid extends IComponentBase {
	type: 'image-grid';
	items: IimageGridItem[];
}

export type IComponent = ISliderComponent | IProductSlider | IimageGrid;

export type {
	IComponentMedia,
	IComponentPage,
	ISliderItem,
	IimageGridItem,
	ICampaignBandItem,
};
