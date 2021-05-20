import 'regenerator-runtime/runtime.js';
import mongoose from 'mongoose';
import ProductModel from '../productModel.js';
import connectDB from '../../config/db.js';
connectDB();

const mockPro = {
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
describe('Product Model', () => {
  beforeAll(async () => {
    await ProductModel.remove({});
  });
  afterEach(async () => {
    await ProductModel.remove({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('has the mentioned attributes attributes', () => {
    const expectedKeys = [
      'name',
      'image',
      'price',
      'description',
      'size',
      'material',
      'status',
    ];
    const keys = Object.keys(ProductModel.schema.paths);
    const productAttributes = [
      keys[0],
      keys[1],
      keys[2],
      keys[3],
      keys[4],
      keys[5],
      keys[6],
    ];
    expect(productAttributes).toEqual(expectedKeys);
  });

  test('check if the productModel is defined', () => {
    expect(ProductModel).toBeDefined();
  });

  test('get a product', async () => {
    const product = new ProductModel({
      name: 'smalltable',
      image: '/imgs/img23.jpg',
      price: '70$',
      description: 'Lorem ipsum dolor sit amet',
      size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
      material:
        'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
      status: 'Sale',
    });
    await product.save();
    const foundProduct = await ProductModel.findOne({ name: 'smalltable' });
    const actual = foundProduct.name;
    const expected = 'smalltable';
    expect(actual).toEqual(expected);
  });

  test('save a product', async () => {
    const product = new ProductModel({
      name: 'smalltable',
      image: '/imgs/img23.jpg',
      price: '70$',
      description: 'Lorem ipsum dolor sit amet',
      size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
      material:
        'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
      status: 'Sale',
    });
    await product.save();
    const actual = product.name;
    const expected = 'smalltable';
    expect(actual).toEqual(expected);
  });

  test('update a product', async () => {
    const product = new ProductModel({
      name: 'smalltable',
      image: '/imgs/img23.jpg',
      price: '70$',
      description: 'Lorem ipsum dolor sit amet',
      size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
      material:
        'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
      status: 'Sale',
    });
    await product.save();
    product.name = 'largetable';
    const updatedProduct = await product.save();
    const actual = product.name;
    const expected = 'largetable';
    expect(actual).toEqual(expected);
  });
});
