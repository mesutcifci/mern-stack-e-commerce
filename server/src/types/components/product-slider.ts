import type { Types } from 'mongoose';
import type { IComponentBase } from './common';

export interface IProductSlider extends IComponentBase {
	type: 'product-slider';
	products: Types.ObjectId[];
}
