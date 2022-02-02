import express from 'express';
import cors from 'cors';
import getProduct from './api/products/getProduct.js';
import getProducts from './api/products/getProducts.js';
import validations from './api/products/validations.js';

const app = express();
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

// Fetch all products
app.get('/api/products', validations.getProducts, getProducts);

// Fetch single product by id
// Get /api/product/:id
app.get('/api/products/:id', validations.getProduct, getProduct);
export default app;
