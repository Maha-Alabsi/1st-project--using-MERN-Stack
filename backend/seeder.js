import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import ProductModel from './models/productModel.js';
import connectDB from './config/db.js';
import logger from './utils/logger.js';
// Import Sample of data into the model database
connectDB();
dotenv.config();

const importData = async () => {
  try {
    await ProductModel.deleteMany();
    await ProductModel.insertMany(products);
    logger.info('Data Imporeted'.green.inverse);
    process.exit();
  } catch (error) {
    logger.error(`Error: ${error.message}`.red.inverse);
  }
};

importData();
