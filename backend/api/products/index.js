import express from 'express';
import productsController from './controllers/productsController.js';
const router = express.Router();
// import Joi from 'joi';

// const schema = Joi.object({
//     keyword:Joi.string().trim(),
//     page: Joi.number(),
//     limit: Joi.number()
// })
// Fetch all products
// Get /api/products
// validation here
router.get('/', productsController);

export default router;