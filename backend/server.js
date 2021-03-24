import express from 'express';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import colors from 'colors';

const app = express();
app.use(cors());
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(`Server is running in ${NODE_ENV} port ${PORT}`.yellow.bold)
);

//Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

app.use('/api/products', productRoutes);
