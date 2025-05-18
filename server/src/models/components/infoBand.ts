import { Schema } from 'mongoose';
import ComponentBase from '../componentModel';
import type { IinfoBand } from '../../types/component';

const infoBandItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		default: '#000000',
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

export const InfoBand = ComponentBase.discriminator<IinfoBand>(
	'info-band',
	new Schema({
		items: {
			type: [infoBandItemSchema],
			required: true,
		},
	})
);
