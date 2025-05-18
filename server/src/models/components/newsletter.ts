import Component from '../componentModel';
import type { INewsletter } from '../../types/component';
import { Schema } from 'mongoose';

export const Newsletter = Component.discriminator<INewsletter>(
	'newsletter',
	new Schema({
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
	})
);
