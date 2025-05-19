import { Schema } from 'mongoose';
import Component from '../componentModel';
import type {
	IFeatureBar,
	IFeatureBarItem,
} from '../../types/components/feature-bar';

const featureBarItemSchema = new Schema<IFeatureBarItem>({
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
	icon: {
		type: String,
		required: true,
	},
});

const featureBarSchema = new Schema<IFeatureBar>({
	items: {
		type: [featureBarItemSchema],
		required: true,
	},
});

export const FeatureBar = Component.discriminator<IFeatureBar>(
	'feature-bar',
	featureBarSchema
);
