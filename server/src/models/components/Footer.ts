import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	IFooter,
	IFooterItem,
	IFooterSubItem,
} from '../../types/components/footer';

const footerSubItemSchema = new Schema<IFooterSubItem>({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const footerItemSchema = new Schema<IFooterItem>({
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

const footerSchema = new Schema<IFooter>({
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
});

export const Footer = Component.discriminator<IFooter>('footer', footerSchema);
