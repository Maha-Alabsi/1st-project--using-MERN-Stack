import logger from '../../utils/logger.js';
import getProductsService from '../../services/productService.getProducts.js';

const getProducts = async (req, res) => {
  try {
    console.log('start fetching products...');
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i', 
          },
        }
      : {};
    const page = parseInt(req.query.page || 1);
    const pageSize = parseInt(req.query.limit || 8);
    const returnedData = await getProductsService(page, pageSize, {
      ...keyword,
    });

    res.status(200).json({
      status: 'success',
      totalitems: returnedData.totalitems,
      pageSize,
      page,
      totalpages: returnedData.totalpages,
      products: returnedData.products,
    });
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

export default getProducts;
