import express from 'express';
import getProduct from './getProduct.js';
import getProducts from './getProducts.js';
import validations from './validations.js';

const router = express.Router();

// Fetch all products
// Get /api/products
router.get('/', validations.getProducts, getProducts);

// Fetch single product by id
// Get /api/products/:id
router.get('/:id', validations.getProduct, getProduct);

export default router;
