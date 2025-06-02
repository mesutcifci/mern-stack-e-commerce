import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	IFooter,
	FooterItemData,
	FooterSubItemData,
} from '../../types/components/footer';

const footerSubItemSchema = new Schema<FooterSubItemData>({
	text: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		default: '#3E3E59',
	},
	link: {
		type: String,
		required: true,
	},
});

const footerItemSchema = new Schema<FooterItemData>({
	text: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		default: '#121212',
	},
	link: {
		type: String,
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
		default: '#FAFAFB',
	},
	textColor: {
		type: String,
		default: '#605F5F',
	},
	description: {
		type: String,
	},
	iconColor: {
		type: String,
		default: '#605F5F',
	},
});

export const Footer = Component.discriminator<IFooter>('footer', footerSchema);
