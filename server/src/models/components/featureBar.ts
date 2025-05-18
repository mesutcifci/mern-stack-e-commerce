import { Schema } from 'mongoose';
import ComponentBase from '../componentModel';
import type { IFeatureBar } from '../../types/component';

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

export const FeatureBar = ComponentBase.discriminator<IFeatureBar>(
	'feature-bar',
	new Schema({
		items: {
			type: [featureBarItemSchema],
			required: true,
		},
	})
);
