import logger from '../../utils/logger.js';
import getProductsService from '../../services/productService.getProducts.js';

const getProducts = async (req, res) => {
  try {
    console.log('start fetching products...');
    if(!req.query.keyword||!req.query.page||!req.query.pageSize){
      res.status(400).json({ message: 'keyword or page or pageSize are not provided' } );
    }
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

    // console.log(returnedData)
    if(!returnedData){
      return res.status(404).json({ message: 'There is a problem in finding data from the database' });
    }
    
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
