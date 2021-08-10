import express from 'express';
import cors from 'cors';
import index from './api/products/index.js';

const app = express();
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

app.use('/api/products', index);

export default app;











// import getProduct from './api/products/getProduct.js';
// import getProducts from './api/products/getProducts.js';
// import validations from './api/products/validations.js';


// process.on('uncaughtException', error => {
//   logger.error('The exception was caught');
// });

//   app.get('/api/products', validations.getProducts, getProducts);

// // Fetch single product by id
// // Get /api/product/:id
// app.get('/api/products/:id', validations.getProduct, getProduct);