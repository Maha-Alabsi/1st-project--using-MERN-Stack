import express from 'express';
import getProducts from '../controllers/productsController.js';
const router = express.Router();

// Fetch all products
// Get /api/products
router.get('/', getProducts);

export default router;
