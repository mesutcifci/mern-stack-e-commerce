import { Schema } from 'mongoose';
import ComponentBase from '../componentModel';
import type { ISliderComponent } from '../../types/component';

const sliderMediaSchema = new Schema({
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

export const SliderComponent = ComponentBase.discriminator<ISliderComponent>(
	'slider-component',
	new Schema({
		items: {
			type: [
				{
					media: {
						type: sliderMediaSchema,
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
