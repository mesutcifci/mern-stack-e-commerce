import type { ComponentBase } from './common';

export interface NewsletterData extends ComponentBase {
	type: 'newsletter';
	title: string;
	buttonText: string;
	textColor: string;
	agreementText: string;
	backgroundColor: string;
}
