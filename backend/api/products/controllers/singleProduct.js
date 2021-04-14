import logger from '../../../utils/logger.js';
import productSchema from '../validation_schema.js';
import Product from '../../../models/productModel.js';

const singleProduct = async (req, res) => {
  try {
    const value = await productSchema.validateAsync(req.params);
    const product = await Product.findById(value.id);
    res.json(product);
  } catch (error) {
    res.status(error.status || 404);
    logger.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default singleProduct;
