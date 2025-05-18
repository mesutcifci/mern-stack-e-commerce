import type { Types } from 'mongoose';

interface ISliderMedia {
	mobileMedia: {
		type: 'image' | 'video';
		url: string;
	};
	desktopMedia: {
		type: 'image' | 'video';
		url: string;
	};
}

interface ISliderItem {
	media: ISliderMedia;
	title?: string;
	description?: string;
	buttonText?: string;
	link?: string;
	textColor?: string;
	buttonBackgroundColor?: string;
	buttonTextColor?: string;
}

interface IinfoBandItem {
	text: string;
	textColor?: string;
	backgroundColor?: string;
	link?: string;
}

interface IimageGridItem {
	mobileImage: string;
	desktopImage: string;
	title: string;
	subtitle: string;
	textColor: string;
	link: string;
	type: 'full' | 'half';
}

interface IFeatureBarItem {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
	backgroundColor: string;
	icon: string;
}

interface IFooterItem {
	text: string;
	link: string;
	subItems: IFooterSubItem[];
}

interface IFooterSubItem {
	text: string;
	link: string;
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

export interface IinfoBand extends IComponentBase {
	type: 'info-band';
	items: IinfoBandItem[];
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

export interface ISingleImage extends IComponentBase {
	type: 'single-image';
	mobileImage: string;
	desktopImage: string;
	link: string;
	title: string;
	description: string;
	linkText: string;
	textColor?: string;
}

export interface INewsletter extends IComponentBase {
	type: 'newsletter';
	title: string;
	buttonText: string;
	textColor: string;
	agreementText: string;
	backgroundColor: string;
	mobileImage: string;
	desktopImage: string;
}
export interface IFeatureBar extends IComponentBase {
	type: 'feature-bar';
	items: IFeatureBarItem[];
}

export interface IFooter extends IComponentBase {
	type: 'footer';
	items: IFooterItem[];
	backgroundColor: string;
	textColor: string;
}

export type IComponent =
	| ISliderComponent
	| IProductSlider
	| IimageGrid
	| ISingleImage
	| IinfoBand
	| INewsletter
	| IFeatureBar;

export type {
	ISliderMedia,
	IComponentPage,
	ISliderItem,
	IimageGridItem,
	IinfoBandItem,
	IFeatureBarItem,
};
