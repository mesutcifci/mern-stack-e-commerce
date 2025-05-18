import type { NextFunction, Request, Response } from 'express';
import catchAsyncErrors from '../helpers/catchAsyncErrors';
import AppError from '../helpers/appError';

import type { Model, UpdateQuery } from 'mongoose';
import Component from '../models/componentModel';
import { SliderComponent } from '../models/components/sliderComponent';
import { ProductSlider } from '../models/components/productSlider';
import { InfoBand } from '../models/components/infoBand';
import { ImageGrid } from '../models/components/imageGrid';
import { Newsletter } from '../models/components/newsletter';
import { FeatureBar } from '../models/components/featureBar';
import { Footer } from '../models/components/footer';
import { SingleImage } from '../models/components/singleImage';

const componentModels: Record<string, Model<any>> = {
	'slider-component': SliderComponent,
	'product-slider': ProductSlider,
	'info-band': InfoBand,
	'image-grid': ImageGrid,
	'single-image': SingleImage,
	newsletter: Newsletter,
	'feature-bar': FeatureBar,
	footer: Footer,
};

export const getComponentBySlug = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const { slug } = req.params;

		const component = await Component.findOne({ slug });

		if (!component) {
			next(new AppError('Component not found', 404));
			return;
		}

		res.status(200).json({
			status: 'success',
			data: {
				component,
			},
		});
	}
);

export const getComponentsByPage = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const { pageName } = req.params;

		if (!pageName) {
			next(new AppError('Page name is required', 400));
			return;
		}

		const components = await Component.find({
			'page.name': pageName,
			isActive: true,
		}).sort({ 'page.order': 1 });

		res.status(200).json({
			status: 'success',
			results: components.length,
			data: {
				components,
			},
		});
	}
);

// TODO remove before production
export const createComponent = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const componentData = req.body;
		const componentType = componentData.type;

		if (!componentType) {
			next(new AppError('Component type is required', 400));
			return;
		}

		const ComponentModel = componentModels[componentType];

		if (!ComponentModel) {
			next(new AppError(`Unsupported component type: ${componentType}`, 400));
			return;
		}

		const component = await ComponentModel.create(componentData);

		res.status(201).json({
			status: 'success',
			data: {
				component,
			},
		});
	}
);

// TODO remove before production
export const updateComponent = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const updateData = req.body;

		const existingComponent = await Component.findById(id);

		if (!existingComponent) {
			next(new AppError('Component not found', 404));
			return;
		}

		const componentType = existingComponent.get('type') as string;

		const ComponentModel = componentModels[componentType];

		if (!ComponentModel) {
			next(new AppError(`Unsupported component type: ${componentType}`, 400));
			return;
		}

		const updatedComponent = await ComponentModel.findByIdAndUpdate(
			id,
			updateData as UpdateQuery<any>,
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(200).json({
			status: 'success',
			data: {
				component: updatedComponent,
			},
		});
	}
);
