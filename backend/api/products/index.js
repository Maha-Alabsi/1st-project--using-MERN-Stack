import express from 'express';
import productsController from './controllers/productsController.js';

const router = express.Router();

// Fetch all products
// Get /api/products
router.get('/', productsController);

export default router;