import sinon from 'sinon';
import getProductsService from '../../../services/productService.getProducts.js';
import ProductModel from '../../../models/productModel.js';
import serviceProducts from '../../../fectures/serviceProducts.js';
import mockService from '../../../fectures/mockServices.js';

jest.mock('../../../models/productModel.js');

describe('getProducts Service ', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should return correct value', async () => {
    sinon.stub(ProductModel, 'find').returns({
      countDocuments: () =>
      new Promise(resolve => {
        resolve(serviceProducts.length);
      }),

      skip: () => ({
        limit: () =>
          new Promise(resolve => {
            resolve(serviceProducts);
          }),
      })
    });

    const res = await getProductsService(1, 3, 'sofa');
    expect(res).toEqual(mockService);
  });
});
