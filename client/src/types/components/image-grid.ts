import type { IComponentBase } from './common';

export interface IimageGridItem {
	mobileImage: string;
	desktopImage: string;
	title: string;
	subtitle: string;
	textColor: string;
	link: string;
	type: 'full' | 'half';
}

export interface IimageGrid extends IComponentBase {
	type: 'image-grid';
	items: IimageGridItem[];
}
