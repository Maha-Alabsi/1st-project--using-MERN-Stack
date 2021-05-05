import express from 'express';
import cors from 'cors';
import colors from 'colors';
import index from './api/products/index.js';
import connectDB from './config/db.js';
import config from './config/index.js';
import logger from './utils/logger.js';

const app = express();
app.use(cors());

connectDB();

const PORT = config.port || 5000;
const NODE_ENV = config.env;
function listening() {
  logger.info(
    `Server is running in ${NODE_ENV} mode/ port ${PORT}`.yellow.bold
  );
}
app.listen(PORT, listening);

// Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

// app.use(errors())
app.use('/api/products', index);

// process.on('uncaughtException', error => {
//   logger.error('The exception was caught');
// });

export default app;
