import 'regenerator-runtime/runtime.js';
import getProduct from '../api/products/getProduct.js';

test('check the getProduct()', async () => {
  try{
     expect.assertions(1);
    await expect(getProduct).toBeDefined();
  }
  catch(error){
    console.log(error.message)
  }
})

