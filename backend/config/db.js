import mongoose from 'mongoose';
import colors from 'colors';
import logger from './../utils/logger.js';
import config from './index.js';
const db = config.mongoURL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log('error in connectig');
    logger.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default connectDB;
