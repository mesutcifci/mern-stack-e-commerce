import mongoose, { Schema } from 'mongoose';
import Component from '../componentModel';
import type { ProductSliderData } from '../../types/components/product-slider';

const productSliderSchema = new Schema<ProductSliderData>({
	products: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Product',
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});

export const ProductSlider = Component.discriminator<ProductSliderData>(
	'product-slider',
	productSliderSchema
);
