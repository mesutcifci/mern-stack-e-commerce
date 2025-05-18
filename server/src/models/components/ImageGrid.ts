import { Schema } from 'mongoose';
import ComponentBase from '../componentModel';
import type { IimageGrid, IimageGridItem } from '../../types/component';

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

export const ImageGrid = ComponentBase.discriminator<IimageGrid>(
	'image-grid',
	new Schema({
		items: {
			type: [imageGridItemSchema],
			required: true,
		},
	})
);
