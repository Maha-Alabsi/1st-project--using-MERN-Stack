import {jest} from '@jest/globals';
// import express from 'express';
import request from 'supertest';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import getProducts from './products/getProducts.js'
import mockProducts from '../fecther/mockProducts.js'
import app from '../app.js'
import router from './products/index.js'
jest.useFakeTimers();
jest.mock('../getProducts.js')



// const app = express();

// // app.listen(0);

// app.use(express.urlencoded({ extended: false }));
// app.use('/', index);

// afterAll(() => mongoose.disconnect());

// Routes tests
test('Test the api root path /', async() => {
    getProducts.mockResolvedValue(mockProducts)
    // getProducts();
  //  getProducts.mockResolvedValue(mockProducts)
  const response = await request(app).get('/api/products')
  // console.log(response)
  // ,(req, res) => 
  //   res.send('Api is running.....');
  // });
  // //  expect('Content-Type', /json/)
    expect(response.status).toBe(200);
  //   expect(response.body).toEqual(mockProduct);
  //  end(done);
});

// afterEach(async () => {
// 	await new Promise(resolve => setTimeout(() => resolve(), 5000)); // avoid jest open handle error
// });
// afterAll( async () => {
//     await app.close()
// });


