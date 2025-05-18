import mongoose, { Schema } from 'mongoose';
import Component from '../componentModel';
import type { IProductSlider } from '../../types/component';

export const ProductSlider = Component.discriminator<IProductSlider>(
	'product-slider',
	new Schema({
		products: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Product',
			required: true,
			validate: {
				validator: function (products: unknown[]) {
					return Array.isArray(products) && products.length > 0;
				},
				message: 'Product slider component must have at least one product',
			},
		},
	})
);
