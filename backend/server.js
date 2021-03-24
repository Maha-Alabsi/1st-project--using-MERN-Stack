import express from 'express';
import products from './data/products.js';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, console.log(`Server is running in ${NODE_ENV} port ${PORT}`));

//Routes
app.get('/', (req, res) => {
  res.send('Api is running.....');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});
//to get certain product by it's ID
app.get('/api/products/:id', (req, res) => {
  const product = find(p => p.id === req.params.id);
  res.json(product);
});
