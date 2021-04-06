import mongoose from 'mongoose';
import logger from '../../logger/index.js';
import config from './default.js';
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
    logger.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
