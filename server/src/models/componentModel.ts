import mongoose, { Schema, model } from 'mongoose';
import {
	type IComponent,
	type ISliderComponent,
	type IProductComponent,
} from '../types/component';
import slugify from 'slugify';

// Component page schema
const componentPageSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	order: {
		type: Number,
		required: true,
	},
});

// Media schema for slider items
const componentMediaSchema = new Schema({
	mobileMedia: {
		type: String,
		required: true,
	},
	desktopMedia: {
		type: String,
		required: true,
	},
});

// Base component schema (common fields)
const baseComponentSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'A component must have a name'],
			trim: true,
		},
		slug: {
			type: String,
			unique: true,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		page: {
			type: [componentPageSchema],
			required: true,
		},
		// This is the discriminator key
		type: {
			type: String,
			required: true,
			enum: ['slider-component', 'product-component'],
		},
	},
	{
		strictQuery: true,
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
		discriminatorKey: 'type', // Important: declares the field that will differentiate between types
	}
);

// Generate slug from name before saving
baseComponentSchema.pre('save', function () {
	this.slug = slugify(this.name, { lower: true });
});

// Only return active components by default
baseComponentSchema.pre(/^find/, function (next) {
	// @ts-expect-error - This is a valid operation in mongoose but TypeScript doesn't recognize it
	this.find({ isActive: true });
	next();
});

// Create the base model
const ComponentBase = model<IComponent>('Component', baseComponentSchema);

// Slider component schema using discriminator
const SliderComponent = ComponentBase.discriminator<ISliderComponent>(
	'slider-component',
	new Schema({
		items: {
			type: [
				{
					media: {
						type: [componentMediaSchema],
						required: true,
					},
					title: String,
					description: String,
					buttonText: String,
					link: String,
					textColor: String,
					buttonBackgroundColor: String,
					buttonTextColor: String,
				},
			],
			required: true,
			validate: {
				validator: function (items: unknown[]) {
					return Array.isArray(items) && items.length > 0;
				},
				message: 'Slider component must have at least one item',
			},
		},
		autoplay: {
			type: Boolean,
			default: false,
		},
	})
);

// Product component schema using discriminator
const ProductComponent = ComponentBase.discriminator<IProductComponent>(
	'product-component',
	new Schema({
		products: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Product',
			required: true,
			validate: {
				validator: function (products: unknown[]) {
					return Array.isArray(products) && products.length > 0;
				},
				message: 'Product component must have at least one product',
			},
		},
	})
);

export { SliderComponent, ProductComponent };
export default ComponentBase;
