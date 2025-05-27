import type { IComponentBase } from './common';

export interface IFeatureBarItem {
	title: string;
	description: string;
	icon: string;
}

export interface IFeatureBar extends IComponentBase {
	type: 'feature-bar';
	items: IFeatureBarItem[];
	backgroundColor: string;
	titleColor: string;
	descriptionColor: string;
}
