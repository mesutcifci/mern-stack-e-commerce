import type { IComponentBase } from './common';

export interface IinfoBandItem {
	text: string;
	textColor?: string;
	backgroundColor?: string;
	link?: string;
}

export interface IinfoBand extends IComponentBase {
	type: 'info-band';
	items: IinfoBandItem[];
	autoplay: boolean;
}
