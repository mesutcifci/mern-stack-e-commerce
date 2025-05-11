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

interface IComponentPage {
	name: string;
	order: number;
}

// Base component interface with common fields
interface IComponentBase {
	name: string;
	slug: string;
	isActive: boolean;
	page: IComponentPage[];
	type: string;
}

// Slider component interface
export interface ISliderComponent extends IComponentBase {
	type: 'slider-component';
	items: ISliderItem[];
	autoplay: boolean;
}

// Product component interface
export interface IProductComponent extends IComponentBase {
	type: 'product-component';
	products: Types.ObjectId[];
}

// Union type for all component types
export type IComponent = ISliderComponent | IProductComponent;

// Export the media and page interfaces for reuse
export type { IComponentMedia, IComponentPage, ISliderItem };
