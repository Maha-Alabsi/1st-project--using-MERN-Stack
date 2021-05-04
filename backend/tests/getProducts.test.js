import 'regenerator-runtime/runtime.js';
import getProducts from '../api/products/getProduct.js';

test('check the getProducts()', async () => {
  try{
     expect.assertions(1);
    await expect(getProducts).toBeDefined();
  }
  catch(error){
    console.log(error.message)
  }
})

// I want to check the returned data
