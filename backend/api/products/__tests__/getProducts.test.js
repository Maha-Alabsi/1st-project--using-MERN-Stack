import getProducts from '../getProducts.js'
import getProductsService from '../../../services/productService.getProducts.js';
import mockService from '../../../fecther/mockServices.js'
import mockProducts from '../../../fecther/mockProducts.js'
jest.mock('../../../services/productService.getProducts.js');

const funParams ={
    mockReq: () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.query = jest.fn().mockReturnValue(req)
    return req
  },

  mockRes: () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  }
}

describe('getProducts Controller', () => {
    let res 
    beforeEach(() => {
        res = funParams.mockRes();
      });
      afterEach(() => {
        jest.resetAllMocks();
      });
    
      test('Should return 200 & return correct value', async() => {
        const req = funParams.mockReq();
        req.query.keyword='sofa';
        req.query.page=1;
        req.query.limit=3
        getProductsService.mockReturnValueOnce(mockService);
        await getProducts(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toBeCalledWith(mockProducts)
      });
    })
