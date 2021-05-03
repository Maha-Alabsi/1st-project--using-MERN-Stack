import 'regenerator-runtime/runtime.js';
import connectDB from '../config/db.js';

test('check the connectDB()', async () => {
  try {
    expect.assertions(1);
    await expect(connectDB).toBeDefined();
  } catch (error) {
    console.log(error.message);
  }
});


