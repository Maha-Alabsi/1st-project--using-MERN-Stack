import 'regenerator-runtime/runtime.js';
import request from 'supertest';
import app from '../server.js';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
