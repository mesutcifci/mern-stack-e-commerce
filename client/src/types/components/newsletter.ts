import type { IComponentBase } from './common';

export interface INewsletter extends IComponentBase {
	type: 'newsletter';
	title: string;
	buttonText: string;
	textColor: string;
	agreementText: string;
	backgroundColor: string;
}
