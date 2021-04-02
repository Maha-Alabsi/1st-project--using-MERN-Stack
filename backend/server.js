import express from 'express';
import cors from 'cors';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import config  from './config/default.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

connectDB();

const PORT = config.port || 5000;
const NODE_ENV = config.env;

app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} port ${PORT}`.yellow.bold)
);

// Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

app.use('/api/products', productRoutes);
