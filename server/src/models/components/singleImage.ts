import Component from '../componentModel';
import type { ISingleImage } from '../../types/components/single-image';
import { Schema } from 'mongoose';

const singleImageSchema = new Schema<ISingleImage>({
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
});
export const SingleImage = Component.discriminator<ISingleImage>(
	'single-image',
	singleImageSchema
);
