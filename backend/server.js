import express from 'express';
import cors from 'cors';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import config from './config/default.js';
import logger from '../logger/index.js';

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

app.use('/api/products', productRoutes);

// // error handling middleware
// app.use(function(err,req,res,next){
//     res.status(400).send({error: err.message});
// })
