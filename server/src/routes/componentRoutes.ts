import express from 'express';
import {
	getComponentBySlug,
	createComponent,
	updateComponent,
	getComponentsByPage,
} from '../controllers/componentController';

const router = express.Router();

// Public routes
router.route('/:slug').get(getComponentBySlug);

router.route('/page/:pageName').get(getComponentsByPage);

// TODO remove createComponent before production
router.route('/').post(createComponent);

// TODO remove updateComponent before production
router.route('/:id').patch(updateComponent);

export default router;
