import 'regenerator-runtime/runtime.js';
import request from 'supertest';
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
// test('getProducts() result', async () => {
//   try{
//     // const res = await fetch(
//     //   `http://127.0.0.1:5000/api/products?keyword=sofa&page=1&limit=3`
//     // );
//     // const data = await res.json();
//     // return data;
//     global.fetch=jest.fn(()=>{
//       Promise.resolve({
//         json: () => Promise.resolve(),
//       })
//       })
//      expect.assertions(1);
//     await expect(data).toBeDefined();
//   }
//   catch(error){
//     console.log(error.message)
//   }
// })


// I want to check the returned data
