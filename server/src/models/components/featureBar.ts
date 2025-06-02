import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	FeatureBarData,
	FeatureBarItemData,
} from '../../types/components/feature-bar';

const featureBarItemSchema = new Schema<FeatureBarItemData>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});

const featureBarSchema = new Schema<FeatureBarData>({
	titleColor: {
		type: String,
		required: true,
		default: '#121212',
	},
	descriptionColor: {
		type: String,
		required: true,
		default: '#807E7E',
	},
	backgroundColor: {
		type: String,
		required: true,
		default: '#FFFFFF',
	},
	items: {
		type: [featureBarItemSchema],
		required: true,
	},
});

export const FeatureBar = Component.discriminator<FeatureBarData>(
	'feature-bar',
	featureBarSchema
);
