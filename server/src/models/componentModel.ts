import mongoose, { Schema, model } from 'mongoose';
import {
	type IComponent,
	type ISliderComponent,
	type IProductSlider,
	type IinfoBand,
	type IimageGrid,
	type ISingleImage,
	type INewsletter,
	type IFeatureBar,
	type IFooter,
} from '../types/component';

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
		type: {
			type: String,
			required: true,
			enum: ['image', 'video'],
		},
		url: {
			type: String,
			required: true,
		},
	},
	desktopMedia: {
		type: {
			type: String,
			required: true,
			enum: ['image', 'video'],
		},
		url: {
			type: String,
			required: true,
		},
	},
});

const imageGridItemSchema = new Schema({
	image: {
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

const infoBandItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	textColor: {
		type: String,
		default: '#000000',
	},
	backgroundColor: {
		type: String,
		default: '#ffffff',
	},
	link: {
		type: String,
		required: false,
	},
});

const featureBarItemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	titleColor: {
		type: String,
		required: true,
	},
	descriptionColor: {
		type: String,
		required: true,
	},
	backgroundColor: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});

const footerSubItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const footerItemSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	subItems: {
		type: [footerSubItemSchema],
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
			required: [true, 'A component must have a slug'],
		},
		isActive: {
			type: Boolean,
			default: false,
			required: [true, 'A component must have a isActive status'],
		},
		page: {
			type: [componentPageSchema],
		},
		type: {
			type: String,
			required: true,
			enum: [
				'slider-component',
				'product-slider',
				'info-band',
				'single-image',
				'newsletter',
			],
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

// Only return active components by default
baseComponentSchema.pre(/^find/, function (next) {
	// @ts-expect-error - This is a valid operation in mongoose but TypeScript doesn't recognize it
	this.find({ isActive: true });
	next();
});

const ComponentBase = model<IComponent>('Component', baseComponentSchema);

const InfoBand = ComponentBase.discriminator<IinfoBand>(
	'info-band',
	new Schema({
		items: {
			type: [infoBandItemSchema],
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

const ImageGrid = ComponentBase.discriminator<IimageGrid>(
	'image-grid',
	new Schema({
		items: {
			type: [imageGridItemSchema],
			required: true,
		},
	})
);

const SingleImage = ComponentBase.discriminator<ISingleImage>(
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
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		linkText: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			required: true,
		},
	})
);

const Newsletter = ComponentBase.discriminator<INewsletter>(
	'newsletter',
	new Schema({
		title: {
			type: String,
			required: true,
		},
		buttonText: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			required: true,
		},
		backgroundColor: {
			type: String,
			required: true,
		},
		mobileImage: {
			type: String,
			required: true,
		},
		desktopImage: {
			type: String,
			required: true,
		},
		agreementText: {
			type: String,
			required: true,
		},
	})
);

const FeatureBar = ComponentBase.discriminator<IFeatureBar>(
	'feature-bar',
	new Schema({
		items: {
			type: [featureBarItemSchema],
			required: true,
		},
	})
);

const Footer = ComponentBase.discriminator<IFooter>(
	'footer',
	new Schema({
		items: {
			type: [footerItemSchema],
			required: true,
		},
		backgroundColor: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			required: true,
		},
	})
);

export {
	SliderComponent,
	ProductSlider,
	InfoBand,
	ImageGrid,
	SingleImage,
	Newsletter,
	FeatureBar,
	Footer,
};
export default ComponentBase;
