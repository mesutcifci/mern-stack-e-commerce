import type { NextFunction, Request, Response } from 'express';
import catchAsyncErrors from '../helpers/catchAsyncErrors';
// import AppError from '../helpers/appError';

export const getWidgetBySlug = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		res.status(200).json({
			status: 'success',
		});
	}
);
