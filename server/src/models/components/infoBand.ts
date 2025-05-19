import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	IinfoBand,
	IinfoBandItem,
} from '../../types/components/info-band';

const infoBandItemSchema = new Schema<IinfoBandItem>({
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

const infoBandSchema = new Schema<IinfoBand>({
	items: {
		type: [infoBandItemSchema],
		required: true,
	},
});

export const InfoBand = Component.discriminator<IinfoBand>(
	'info-band',
	infoBandSchema
);
