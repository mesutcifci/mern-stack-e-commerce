import type { FeatureBarData } from './components/feature-bar';
import type { ImageGridData } from './components/image-grid';
import type { InfoBandData } from './components/info-band';
import type { NewsletterData } from './components/newsletter';
import type { ProductSliderData } from './components/product-slider';
import type { SingleImageData } from './components/single-image';
import type { SliderComponentData } from './components/slider-component';

export type IComponent =
	| SliderComponentData
	| ProductSliderData
	| ImageGridData
	| SingleImageData
	| InfoBandData
	| NewsletterData
	| FeatureBarData;
