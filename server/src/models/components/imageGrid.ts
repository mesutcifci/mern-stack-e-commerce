import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	ImageGridData,
	ImageGridItemData,
} from '../../types/components/image-grid';

const imageGridItemSchema = new Schema<ImageGridItemData>({
	mobileImage: {
		type: String,
		required: true,
	},
	desktopImage: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const imageGridSchema = new Schema<ImageGridData>({
	items: {
		full_image: {
			type: imageGridItemSchema,
			required: true,
		},
		half_image_first: {
			type: imageGridItemSchema,
			required: true,
		},
		half_image_second: {
			type: imageGridItemSchema,
			required: true,
		},
	},
});

export const ImageGrid = Component.discriminator<ImageGridData>(
	'image-grid',
	imageGridSchema
);
