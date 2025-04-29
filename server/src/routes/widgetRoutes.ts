import express from 'express';
import { getWidgetBySlug } from '../controllers/widgetController';

const router = express.Router();

router.route('/:slug').get(getWidgetBySlug);

export default router;
