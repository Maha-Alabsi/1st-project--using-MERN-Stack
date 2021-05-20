import 'regenerator-runtime/runtime.js';
// import ProductModel from '../../../models/productModel.js';
import request from 'supertest';
import express from 'express';
import getProduct from '../getProduct.js';
import mockProductModel from '../../../models/__mocks__/productModel';
const router = express.Router();
jest.mock('../../../models/__mocks__/productModel');

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
// const req=request(router).get('/6076ec2ebc2d7b4d505449b5')

// const res=request(router).get('/6076ec2ebc2d7b4d505449b5')
// .then(response => {
//   console.log(response.body);
//   return response.body
// })

describe('Test the api root path', () => {
  test('check the getProduct() with productModel', async () => {
    const getProductNew = getProduct(mockProductModel);
    const expected = mockProduct;
    const actual = mockProductModel.findById({
      _id: '6076ec2ebc2d7b4d505449b3',
    });
    expect(actual).toEqual(expected);
  });
  test('check if the getProduct is defined()', async () => {
    expect.assertions(1);
    await expect(getProduct).toBeDefined();
  });
});
