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
