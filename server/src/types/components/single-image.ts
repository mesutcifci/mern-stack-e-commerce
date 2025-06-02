import type { ComponentBase } from './common';

export interface SingleImageData extends ComponentBase {
	type: 'single-image';
	mobileImage: string;
	desktopImage: string;
	link: string;
	title: string;
	description: string;
	linkText: string;
	textColor?: string;
}
