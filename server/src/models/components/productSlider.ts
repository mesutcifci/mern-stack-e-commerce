import mongoose, { Schema } from 'mongoose';
import Component from '../componentModel';
import type { IProductSlider } from '../../types/components/product-slider';

const productSliderSchema = new Schema<IProductSlider>({
	products: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Product',
		required: true,
	},
});

export const ProductSlider = Component.discriminator<IProductSlider>(
	'product-slider',
	productSliderSchema
);
