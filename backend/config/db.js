import mongoose from 'mongoose';
import logger from './../utilities/logger.js';
import config from './index.js';
const db = config.mongoURI;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    logger.error(`Error: ${error.message}`.red.underline.bold)
  }
};

export default connectDB;
