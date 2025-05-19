import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	ISliderComponent,
	ISliderItem,
	ISliderMedia,
} from '../../types/components/slider-component';

const sliderMediaSchema = new Schema<ISliderMedia>({
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

const sliderItemSchema = new Schema<ISliderItem>({
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
});

const sliderComponentSchema = new Schema<ISliderComponent>({
	items: {
		type: [sliderItemSchema],
		required: true,
	},
	autoplay: {
		type: Boolean,
		default: false,
	},
});

export const SliderComponent = Component.discriminator<ISliderComponent>(
	'slider-component',
	sliderComponentSchema
);
