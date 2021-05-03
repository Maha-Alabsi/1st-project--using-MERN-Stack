import logger from '../../utils/logger.js';
import ProductModel from '../../models/productModel.js';

const getProduct = async (req, res) => {
  try {
    console.log("start fetching product...")
    const product = await ProductModel.findById(req.params.id);
    res.json(product); 
    return product;
  } catch (error) {
    res.status(error.status || 404);
    logger.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default getProduct;

