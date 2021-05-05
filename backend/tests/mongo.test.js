import 'regenerator-runtime/runtime.js';
import { MongoClient } from 'mongodb';
// import { bson } from 'bson';
// import request from "supertest";
import config from '../config/index.js';
const dbURI = config.mongoURI;
// jest.useFakeTimers();

describe('insert documents', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    try {
      const products = db.collection('products');
      const mockProduct = {
        _id: '6076ec2ebc2d7b4d505449b3',
        name: 'Table',
        image: '/imgs/img21.jpg',
        price: '45$',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
        size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
        material:
          'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
        status: 'New',
        __v: 0,
        createdAt: '2021-04-14T13:20:46.189Z',
        updatedAt: '2021-04-14T13:20:46.189Z',
      };
      
      await products.insertOne(mockProduct, err => {
        if (err) return err;
      });

      const insertedProduct = await products.findOne({ _id: mockProduct._id });
      expect(insertedProduct).toEqual(mockProduct);

    } catch (error) {
      console.log(error.message);
    }
  });
});
