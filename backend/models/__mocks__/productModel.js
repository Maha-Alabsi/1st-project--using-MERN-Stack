import ProductModel from '../productModel';
const mockProductModel = {
  findById: jest.spyOn(ProductModel, 'findById').mockImplementation(() =>
    Promise.resolve({
      _id: '6076ec2ebc2d7b4d505449b5',
      name: 'Table',
      image: '/imgs/img23.jpg',
      price: '60$',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
      size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
      material:
        'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
      status: 'Sale',
      __v: 0,
      createdAt: '2021-04-14T13:20:46.189Z',
      updatedAt: '2021-04-14T13:20:46.189Z',
    })
  ),
  find: jest.spyOn(ProductModel, 'find').mockImplementation(() =>
    Promise.resolve([
      {
        _id: '6076ec2ebc2d7b4d505449b5',
        name: 'Table',
        image: '/imgs/img23.jpg',
        price: '60$',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
        size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
        material:
          'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
        status: 'Sale',
        __v: 0,
        createdAt: '2021-04-14T13:20:46.189Z',
        updatedAt: '2021-04-14T13:20:46.189Z',
      },
      {
        _id: '6076ec2ebc2d7b4d505449b5',
        name: 'Table',
        image: '/imgs/img23.jpg',
        price: '60$',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
        size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
        material:
          'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
        status: 'Sale',
        __v: 0,
        createdAt: '2021-04-14T13:20:46.189Z',
        updatedAt: '2021-04-14T13:20:46.189Z',
      },
      {
        _id: '6076ec2ebc2d7b4d505449b5',
        name: 'Table',
        image: '/imgs/img23.jpg',
        price: '60$',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
        size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
        material:
          'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
        status: 'Sale',
        __v: 0,
        createdAt: '2021-04-14T13:20:46.189Z',
        updatedAt: '2021-04-14T13:20:46.189Z',
      },
    ])
  ),
  skip: jest.fn(),
  limit: jest.fn(),
};

export default mockProductModel;
