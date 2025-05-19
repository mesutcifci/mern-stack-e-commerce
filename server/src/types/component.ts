import type { IFeatureBar } from './components/feature-bar';
import type { IimageGrid } from './components/image-grid';
import type { IinfoBand } from './components/info-band';
import type { INewsletter } from './components/newsletter';
import type { IProductSlider } from './components/product-slider';
import type { ISingleImage } from './components/single-image';
import type { ISliderComponent } from './components/slider-component';

export type IComponent =
	| ISliderComponent
	| IProductSlider
	| IimageGrid
	| ISingleImage
	| IinfoBand
	| INewsletter
	| IFeatureBar;
