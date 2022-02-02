import sinon from 'sinon';
import getProductsService from '../../../services/productService.getProducts.js';
import ProductModel from '../../../models/productModel.js';
import serviceProducts from '../../../constants/serviceProducts.js';
import mockService from '../../../constants/mockServices.js';

jest.mock('../../../models/productModel.js');

describe('getProducts Service ', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should return correct value', async () => {
    sinon.stub(ProductModel, 'find').returns({
      skip: () => ({
        limit: () =>
          new Promise(resolve => {
            resolve(serviceProducts);
          }),
      }),
      countDocuments: () =>
        new Promise(resolve => {
          resolve(serviceProducts.length);
        }),
    });

    const res = await getProductsService(1, 3, 'sofa');
    expect(res).toEqual(mockService);
  });
});
