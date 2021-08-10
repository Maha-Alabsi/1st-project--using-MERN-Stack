import getProducts from '../getProducts.js';
import getProductsService from '../../../services/productService.getProducts.js';
import mockService from '../../../fectures/mockServices.js';
import mockProducts from '../../../fectures/mockProducts.js';

jest.mock('../../../services/productService.getProducts.js');

const funParams = {
  mockReq: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req;
  },

  mockRes: () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  },
};

describe('getProducts Controller', () => {
  let res;
  beforeEach(() => {
    res = funParams.mockRes();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Should return 200 & return correct value', async () => {
    const req = funParams.mockReq();
    req.query.keyword = 'sofa';
    req.query.page = 1;
    req.query.limit = 3;
    getProductsService.mockReturnValueOnce(mockService);
    await getProducts(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status().json).toBeCalledWith(mockProducts);
  });

  test('Should return message error if getProductsService errors happened', async () => {
    const req = funParams.mockReq();
    req.query.keyword = 'sofa';
    req.query.page = 1;
    req.query.limit = 3;
    getProductsService.mockImplementation(() => {
      Promise.reject(
        new Error('There is a problem in finding data from database')
      );
    });
    await getProducts(req, res);
    expect(res.status).toBeCalledWith(404);
    expect(res.status().json).toBeCalledWith({
      message: 'There is a problem in finding data from the database',
    });
  });
});
