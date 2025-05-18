import { Schema, model } from 'mongoose';
import { type IComponent } from '../types/component';

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

baseComponentSchema.pre(/^find/, function (next) {
	// @ts-expect-error - This is a valid operation in mongoose but TypeScript doesn't recognize it
	this.find({ isActive: true });
	next();
});

const ComponentBase = model<IComponent>('Component', baseComponentSchema);

export default ComponentBase;
