import logger from '../../utils/logger.js';
import ProductModel from '../../models/productModel.js';

const getProduct = async (req, res) => {
  try {
    console.log('start id product...');
    if (!req.params.id) {
      return res.status(404).json({ message: 'Not Found' });
    }    
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'there is a problem in finding data from database' });
    }
    res.status(200).json(product);
    return product;
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

export default getProduct;
