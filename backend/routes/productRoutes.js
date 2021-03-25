import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';

//Fetch all products
//Get /api/products
router.get('/', async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const products = await Product.find({ ...keyword });
    res.json(products);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
});


export default router;
