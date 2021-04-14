import express from 'express';
import productsController from './controllers/productsController.js';
import singleProduct from './controllers/singleProduct.js';

const router = express.Router();

// Fetch all products
// Get /api/products
router.get('/', productsController);

// Fetch single product by id
// Get /api/product/:id
router.get('/:id', singleProduct);

export default router;
