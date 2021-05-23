import 'regenerator-runtime/runtime.js';
import express from 'express';
import request from 'supertest';
import mongoose from 'mongoose';
import connectDB from '../../../config/db.js';
connectDB();
// const app = express();
const router = express.Router();

const mockProduct = {
  _id: '6076ec2ebc2d7b4d505449b5',
  name: 'Table',
  image: '/imgs/img23.jpg',
  price: '60$',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
  size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
  material:
    'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
  status: 'Sale',
  __v: 0,
  createdAt: '2021-04-14T13:20:46.189Z',
  updatedAt: '2021-04-14T13:20:46.189Z',
};

afterAll(() => {
  mongoose.connection.close();
});
// Routes tests
test('Test the api root path /', () => {
  request(router)
    .get('/')
    .expect('Content-Type', /json/)
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
});

test('Test the api root path /:id route', () => {
  request(router)
    .get('/:id')
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
});

test('Test the api root path / with keyword&page num & page size', () => {
  request(router)
    .get('/?keyword=table&page=1&limit=5')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContainEqual(mockProduct);
    });
});

test('existing data by id ', () => {
  request(router)
    .get('/6076ec2ebc2d7b4d505449b5')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContainEqual(mockProduct);
    });
});

test('existing data by id ', () => {
  request(router)
    .get('/fail')
    .then(response => {
      expect(response.statusCode).toBe(404);
      expect(response.body).toContainEqual(mockProduct);
    });
});
