import type { IComponentBase } from './common';

export interface IFeatureBarItem {
	title: string;
	description: string;
	titleColor: string;
	descriptionColor: string;
	backgroundColor: string;
	icon: string;
}

export interface IFeatureBar extends IComponentBase {
	type: 'feature-bar';
	items: IFeatureBarItem[];
}
