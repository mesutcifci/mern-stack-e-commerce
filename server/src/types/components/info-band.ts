import type { ComponentBase } from './common';

export interface InfoBandItemData {
	text: string;
	textColor?: string;
	backgroundColor?: string;
	link?: string;
}

export interface InfoBandData extends ComponentBase {
	type: 'info-band';
	items: InfoBandItemData[];
	autoplay: boolean;
}
