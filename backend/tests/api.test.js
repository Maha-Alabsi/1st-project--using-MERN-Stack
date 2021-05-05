import 'regenerator-runtime/runtime.js';
import request from 'supertest';
import router from '../api/products/index.js';

describe("Test the api root path", () => {
  test("/ route", () => {
    request(router).get('/').then(response=>{
      expect(response.statusCode).toBe(200);
    })
  });

  test("/ route", () => {
    request(router).get('/:id').then(response=>{
      expect(response.statusCode).toBe(200);
    })
  });
});

// describe('Test the api root path', () => {
//   test('/ route', async () => {
//     try {
//       const response = await request(router).get('/');
//       expect(response.statusCode).toBe(200);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });

//   test('/:id route', async () => {
//     try {
//       const response = await request(router).get('/:id');
//       expect(response.statusCode).toBe(200);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// });
