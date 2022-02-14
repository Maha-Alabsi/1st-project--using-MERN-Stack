import colors from 'colors';
import app from './app.js';
import connectDB from './config/db.js';
import config from './config/index.js';
import logger from './utils/logger.js';
connectDB();

const PORT = config.port || 5000;
const NODE_ENV = config.env;
function listening() {
  logger.info(
    `Server is running in ${NODE_ENV} mode/ port ${PORT}`.yellow.bold
  );
}
const server = app.listen(PORT, listening);

export default server

