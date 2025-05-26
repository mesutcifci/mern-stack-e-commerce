import type { IComponentBase } from './common';

export interface IimageGridItem {
	mobileImage: string;
	desktopImage: string;
	title: string;
	subtitle: string;
	textColor: string;
	link: string;
}

export interface IimageGrid extends IComponentBase {
	type: 'image-grid';
	items: {
		full_image: IimageGridItem;
		half_image_first: IimageGridItem;
		half_image_second: IimageGridItem;
	};
}
