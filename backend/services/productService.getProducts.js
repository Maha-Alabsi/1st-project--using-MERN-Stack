import ProductModel from '../models/productModel.js';
import logger from '../utils/logger.js';

const getProductsService = async (page, pageSize, keyword) => {
  try {
    console.log('product service api......')
    const skip = (page - 1) * pageSize;
    // count the documents matched the searched key
    const totalitems = await ProductModel.find(keyword).countDocuments();
    // How many pages our pagination to have
    const totalpages = Math.ceil(totalitems / pageSize);
    const products = await ProductModel.find(keyword).skip(skip).limit(pageSize);
    // console.log(products)
    const returnedobj = {
      totalpages: totalpages,
      products: products,
      totalitems: totalitems,
    };
    return returnedobj;
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

export default getProductsService;
