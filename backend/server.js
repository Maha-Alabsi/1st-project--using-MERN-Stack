import express from 'express';
import cors from 'cors';
import colors from 'colors';
import index from './api/products/index.js';
import connectDB from './config/db.js';
import config from './config/index.js';
import logger from './utilities/logger.js';

const app = express();
app.use(cors());

connectDB();

const PORT = config.port || 5000;
const NODE_ENV = config.env;

app.listen(PORT, listening);
function listening() {
  logger.info(`Server is running in ${NODE_ENV} port ${PORT}`.yellow.bold);
}

// Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

app.use('/api/products', index);

process.on('uncaughtException', error => {
  logger.error('The exception was caught');
});

// Error Handling

// app.use((error,req,res,next)=>{
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: `Error: ${error.message.red.inverse}`
//     }
//   })
// });