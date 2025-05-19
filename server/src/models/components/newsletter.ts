import Component from '../componentModel';
import type { INewsletter } from '../../types/components/newsletter';
import { Schema } from 'mongoose';

const newsletterSchema = new Schema<INewsletter>({
	title: {
		type: String,
		required: true,
	},
	buttonText: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		required: true,
	},
	backgroundColor: {
		type: String,
		required: true,
	},
	mobileImage: {
		type: String,
		required: true,
	},
	desktopImage: {
		type: String,
		required: true,
	},
	agreementText: {
		type: String,
		required: true,
	},
});

export const Newsletter = Component.discriminator<INewsletter>(
	'newsletter',
	newsletterSchema
);
