import logger from '../../utils/logger.js';
import ProductModel from '../../models/productModel.js';

const getProduct = async (req, res) => {
  try {
    console.log('start id product...');
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
    return product;
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

export default getProduct;
