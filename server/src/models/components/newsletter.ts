import Component from '../componentModel';
import type { NewsletterData } from '../../types/components/newsletter';
import { Schema } from 'mongoose';

const newsletterSchema = new Schema<NewsletterData>({
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
	agreementText: {
		type: String,
		required: true,
	},
});

export const Newsletter = Component.discriminator<NewsletterData>(
	'newsletter',
	newsletterSchema
);
