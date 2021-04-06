import Product from '../models/productModel.js';
import logger from '../../logger/index.js';

const getProducts = async (req, res) => {
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
    const skip = (page - 1) * pageSize;
    const totalitems = await Product.countDocuments();
    // How many pages our pagenation to have
    const totalpages = Math.ceil(totalitems / pageSize);

    const products = await Product.find({ ...keyword })
      .skip(skip)
      .limit(pageSize);

    res.json({
      status: 'success',
      count: products.length,
      totalitems,
      page,
      totalpages,
      products,
    });
  } catch (error) {
    logger.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default getProducts;
