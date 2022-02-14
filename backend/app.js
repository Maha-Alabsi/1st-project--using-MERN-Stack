import express from 'express';
import cors from 'cors';
import path from 'path';
import config from './config/index.js';
import getProduct from './api/products/getProduct.js';
import getProducts from './api/products/getProducts.js';
import validations from './api/products/validations.js';

const app = express();
app.use(cors());

const NODE_ENV = config.env;
// Routes
// [1] Fetch all products
app.get('/api/products', validations.getProducts, getProducts);
// [2] Fetch single product by id
app.get('/api/products/:id', validations.getProduct, getProduct);

const __dirname = path.resolve();

// [Production] setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Api is running.....');
  });
}

export default app;
