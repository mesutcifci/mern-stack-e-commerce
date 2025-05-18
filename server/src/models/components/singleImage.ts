import Component from '../componentModel';
import type { ISingleImage } from '../../types/component';
import { Schema } from 'mongoose';

export const SingleImage = Component.discriminator<ISingleImage>(
	'single-image',
	new Schema({
		mobileImage: {
			type: String,
			required: true,
		},
		desktopImage: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		linkText: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			default: '#000000',
		},
	})
);
