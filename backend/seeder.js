import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';
import logger from './utilities/logger.js'
// ImportSample of data into the model database
connectDB();
dotenv.config();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    logger.info('Data Imporeted'.green.inverse);
    process.exit();
  } catch (error) {
    logger.error(`Error: ${error.message}`.red.inverse);
  }
};

importData();
