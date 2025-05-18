import { Schema } from 'mongoose';
import ComponentBase from '../componentModel';
import type { IFooter } from '../../types/component';

const footerSubItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const footerItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	subItems: {
		type: [footerSubItemSchema],
		required: true,
	},
});

export const Footer = ComponentBase.discriminator<IFooter>(
	'footer',
	new Schema({
		items: {
			type: [footerItemSchema],
			required: true,
		},
		backgroundColor: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			required: true,
		},
	})
);
