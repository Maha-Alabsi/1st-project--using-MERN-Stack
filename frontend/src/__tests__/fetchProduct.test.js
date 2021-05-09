import fetchProduct from '../utils/fetchProduct';
// import fetchMock from 'jest-fetch-mock'
global.fetch = jest.fn(() => {
  //fetch return promise
  Promise.resolve({
    json: () => Promise.resolve(),
  });
});
beforeEach(() => {
  fetch.mockClear();
});
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
  

test('Mocking Fetch', async () => {
  try {
    const products = await fetchProduct(`http://localhost:5000/api/products/${mockProduct._id}`);
    expect(products).toContain(mockProduct);
    expect(fetch).toHaveBeenCalledTimes(1);
  } catch (error) {
    console.log(error.message);
  }
});
