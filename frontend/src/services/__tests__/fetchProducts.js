import { assert } from 'assert';
import fetchProducts from '../fetchProducts';

const mockProduct = {
  _id: '6076ec2ebc2d7b4d505449b3',
  name: 'Table',
  image: '/imgs/img21.jpg',
  price: '45$',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
  size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
  material:
    'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
  status: 'New',
  __v: 0,
  createdAt: '2021-04-14T13:20:46.189Z',
  updatedAt: '2021-04-14T13:20:46.189Z',
};

describe('tests for fetch API', () => {
  test('calls fetch with the correct url', async () => {
    const fakeFetch = url => {
      //check the url
      assert(
        url ===
          'http://localhost:5000/api/products?keyword=table&page=1&limit=5'
      );
      return new Promise(function (resolve) {
        resolve();
      });
    };
    fetchProducts(fakeFetch);
  });

  test('parses the response of fetch correctly', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            result: [
              {
                _id: '6076ec2ebc2d7b4d505449b3',
                name: 'Table',
                image: '/imgs/img21.jpg',
                price: '45$',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
                size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
                material:
                  'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
                status: 'New',
                __v: 0,
                createdAt: '2021-04-14T13:20:46.189Z',
                updatedAt: '2021-04-14T13:20:46.189Z',
              },
              {
                _id: '6076ec2ebc2d7b4d505449aa',
                name: 'Sofa',
                image: '/imgs/coverImg.jpg',
                price: '30$',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
                size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
                material:
                  'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
                status: 'Sale',
                __v: 0,
                createdAt: '2021-04-14T13:20:46.188Z',
                updatedAt: '2021-04-14T13:20:46.188Z',
              },
            ],
          }),
      });
    });
    const res = await fetch();
    const data = await res.json();
    expect(data.result).toContainEqual(mockProduct);
    global.fetch.mockClear();
  });
});

// const fakeFetch = () => {
//   return Promise.resolve({
//     json: () =>
//       Promise.resolve({
//        data
//       }),
//   });
// };
// const fetchData = await fetchProduct(fakeFetch);
//expect(fetchData.result).toContain(mockProduct)
