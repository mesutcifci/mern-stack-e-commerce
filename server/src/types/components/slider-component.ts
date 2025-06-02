import type { ComponentBase } from './common';

export interface SliderMediaData {
	mobileMedia: {
		type: 'image' | 'video';
		url: string;
	};
	desktopMedia: {
		type: 'image' | 'video';
		url: string;
	};
}

export interface SliderItemData {
	media: SliderMediaData;
	title?: string;
	description?: string;
	buttonText?: string;
	link?: string;
	textColor?: string;
	buttonBackgroundColor?: string;
	buttonTextColor?: string;
}

export interface SliderComponentData extends ComponentBase {
	type: 'slider-component';
	items: SliderItemData[];
	autoplay: boolean;
}
