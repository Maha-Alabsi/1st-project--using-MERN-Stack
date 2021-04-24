import Product from '../models/productModel.js';
import logger from './../utils/logger.js';

const productsService = async (page, pageSize, keyword) => {
  try {
    const skip = (page - 1) * pageSize;
    // count the documents matched the searched key
    const totalitems = await Product.find(keyword).countDocuments();
    // How many pages our pagination to have
    const totalpages = Math.ceil(totalitems / pageSize);

    const products = await Product.find(keyword).skip(skip).limit(pageSize);

    const returnedobj = {
      totalpages: totalpages,
      products: products,
      totalitems: totalitems,
    };

    return returnedobj;
  } catch (error) {
    logger.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default productsService;
