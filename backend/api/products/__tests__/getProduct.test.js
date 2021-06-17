import getProduct from '../getProduct.js'
import ProductModel from '../../../models/productModel.js';
import mockProduct from '../../../fecther/mockProduct.js'
jest.mock('../../../models/productModel.js');

const funParams ={
  mockReq: () => {
  const req = {}
  req.body = jest.fn().mockReturnValue(req)
  req.params = jest.fn().mockReturnValue(req)
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

describe('getProduct Controller', () => {
  let res 
  beforeEach(() => {
      res = funParams.mockRes();
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    test('Should return 200 & return correct value', async() => {
      const req = funParams.mockReq();
      req.params.id='6076ec2ebc2d7b4d505449b5'
      jest.spyOn(ProductModel, 'findById').mockImplementationOnce(() => Promise.resolve(mockProduct))
      await getProduct(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().json).toBeCalledWith(mockProduct)
    });
  })

