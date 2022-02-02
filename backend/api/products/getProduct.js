import logger from '../../utils/logger.js';
import getProductService from '../../services/productService.getProduct.js';

const getProduct = async (req, res) => {
  try {
    console.log('start id product...');
    if (!req.params.id) {
      return res.status(404).json({ message: 'Not Found' });
    }
    const product = await getProductService(req);
    if (!product) {
      return res
        .status(404)
        .json({ message: 'there is a problem in finding data from database' });
    }
    res.status(200).json(product);
    return product;
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

export default getProduct;
