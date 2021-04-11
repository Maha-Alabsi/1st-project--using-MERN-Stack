import logger from '../../../utilities/logger.js';
import getProducts from '../../../services/productService.js';

const productsController = async (req, res) => {
  try {
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

    const returnedData = await getProducts(page, pageSize, { ...keyword });

    res.status(200).json({
      status: 'success',
      totalitems: returnedData.totalitems,
      pageSize,
      page,
      totalpages: returnedData.totalpages,
      products: returnedData.products,
    });
  } catch (error) {
    res.status(error.status || 404);
    logger.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default productsController;
