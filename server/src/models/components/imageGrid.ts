import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	IimageGrid,
	IimageGridItem,
} from '../../types/components/image-grid';

const imageGridItemSchema = new Schema<IimageGridItem>({
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
	type: {
		type: String,
		required: true,
		enum: ['full', 'half'],
	},
});

const imageGridSchema = new Schema<IimageGrid>({
	items: {
		type: [imageGridItemSchema],
		required: true,
	},
});

export const ImageGrid = Component.discriminator<IimageGrid>(
	'image-grid',
	imageGridSchema
);
