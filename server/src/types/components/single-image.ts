import type { IComponentBase } from './common';

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
