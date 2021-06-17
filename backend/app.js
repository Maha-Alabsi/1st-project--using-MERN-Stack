import express from 'express';
import cors from 'cors';
// import index from './api/products/index.js';

import getProduct from './api/products/getProduct.js';
import getProducts from './api/products/getProducts.js';
import validations from './api/products/validations.js';


const app = express();
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Api is running.....');
  });
  
  // app.use(errors())
  // app.use('/api/products', index);

  // process.on('uncaughtException', error => {
  //   logger.error('The exception was caught');
  // });
  
  app.get('/api/products', validations.getProducts, getProducts);
  // app.get('/api/products', validations.getProducts, (req, res) => {
  //   res.send('Api is running.....');
  // });

// Fetch single product by id
// Get /api/product/:id
app.get('/api/products/:id', validations.getProduct, getProduct);
  export default app;
