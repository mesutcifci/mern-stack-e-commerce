import mongoose, { Schema, model } from 'mongoose';
import {
	type IComponent,
	type ISliderComponent,
	type IProductSlider,
	type ICampaignBand,
} from '../types/component';
import slugify from 'slugify';

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

const campaignBandItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
});
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
		type: {
			type: String,
			required: true,
			enum: ['slider-component', 'product-slider', 'campaign-band'],
		},
	},
	{
		strictQuery: true,
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
		discriminatorKey: 'type',
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

const ComponentBase = model<IComponent>('Component', baseComponentSchema);

const CampaignBand = ComponentBase.discriminator<ICampaignBand>(
	'campaign-band',
	new Schema({
		items: {
			type: [campaignBandItemSchema],
			required: true,
		},
	})
);

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

const ProductSlider = ComponentBase.discriminator<IProductSlider>(
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

export { SliderComponent, ProductSlider, CampaignBand };
export default ComponentBase;
