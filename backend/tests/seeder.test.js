import 'regenerator-runtime/runtime.js';
import importData from '../seeder.js';
jest.useFakeTimers();

test('check the importData()', async () => {
    try{
       expect.assertions(1);
      await expect(importData).toBeDefined();
    }
    catch(error){
      console.log(error.message)
    }
  })
