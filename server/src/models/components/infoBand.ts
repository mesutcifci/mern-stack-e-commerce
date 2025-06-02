import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	InfoBandData,
	InfoBandItemData,
} from '../../types/components/info-band';

const infoBandItemSchema = new Schema<InfoBandItemData>({
	text: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		default: '#121212',
	},
	backgroundColor: {
		type: String,
		default: '#ffffff',
	},
	link: {
		type: String,
		required: false,
	},
});

const infoBandSchema = new Schema<InfoBandData>({
	items: {
		type: [infoBandItemSchema],
		required: true,
	},
	autoplay: {
		type: Boolean,
		default: false,
	},
});

export const InfoBand = Component.discriminator<InfoBandData>(
	'info-band',
	infoBandSchema
);
