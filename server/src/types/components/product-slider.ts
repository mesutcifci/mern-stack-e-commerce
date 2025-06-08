import type { Types } from 'mongoose';
import type { ComponentBase } from './common';

export interface ProductSliderData extends ComponentBase {
	type: 'product-slider';
	products: Types.ObjectId[];
	title: string;
}
