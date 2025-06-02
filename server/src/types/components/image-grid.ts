import type { ComponentBase } from './common';

export interface ImageGridItemData {
	mobileImage: string;
	desktopImage: string;
	title: string;
	subtitle: string;
	textColor: string;
	link: string;
}

export interface ImageGridData extends ComponentBase {
	type: 'image-grid';
	items: {
		full_image: ImageGridItemData;
		half_image_first: ImageGridItemData;
		half_image_second: ImageGridItemData;
	};
}
