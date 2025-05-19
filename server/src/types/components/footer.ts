import type { IComponentBase } from './common';

export interface IFooterSubItem {
	text: string;
	textColor: string;
	link: string;
}

export interface IFooterItem {
	text: string;
	textColor: string;
	link?: string;
	subItems: IFooterSubItem[];
}

export interface IFooter extends IComponentBase {
	type: 'footer';
	items: IFooterItem[];
	backgroundColor: string;
	textColor: string;
}
