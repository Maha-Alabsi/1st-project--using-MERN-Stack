const products = [
  {
    name: 'Chair',
    image: '/imgs/img01.jpg',
    price: '20$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Sofa',
    image: '/imgs/coverImg.jpg',
    price: '30$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Chair',
    image: '/imgs/img03.jpg',
    price: '45$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Candelier',
    image: '/imgs/img4.jpg',
    price: '50$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Vase',
    image: '/imgs/img05.jpg',
    price: '70$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Couch',
    image: '/imgs/img6.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/Bed.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Chair',
    image: '/imgs/img9.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Couch',
    image: '/imgs/sofa2.jpg',
    price: '56$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Mirror',
    image: '/imgs/img07.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img21.jpg',
    price: '45$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Bed',
    image: '/imgs/img19.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Table',
    image: '/imgs/img23.jpg',
    price: '60$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Sofa',
    image: '/imgs/img22.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Chair',
    image: '/imgs/img34.jpg',
    price: '34$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/Bed2.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Armchair',
    image: '/imgs/img15.jpg',
    price: '67$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img16.jpg',
    price: '20$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Candle',
    image: '/imgs/img18.jpg',
    price: '30$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Chair',
    image: '/imgs/img012.jpg',
    price: '34$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Armchair',
    image: '/imgs/img15.jpg',
    price: '67$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img28.jpg',
    price: '70$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Bed',
    image: '/imgs/bed5.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Mirror',
    image: '/imgs/mirror.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Vase',
    image: '/imgs/img05.jpg',
    price: '70$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Candelier',
    image: '/imgs/img4.jpg',
    price: '50$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/Bed3.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Mirror',
    image: '/imgs/img07.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Couch',
    image: '/imgs/img08.jpg',
    price: '56$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img31.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/img24.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Sofa',
    image: '/imgs/img08.jpg',
    price: '56$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img30.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Vase',
    image: '/imgs/img25.jpg',
    price: '56$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img17.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/img24.jpg',
    price: '92$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Chair',
    image: '/imgs/img012.jpg',
    price: '34$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Armchair',
    image: '/imgs/img15.jpg',
    price: '67$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/bed4.jpg',
    price: '42$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Couch',
    image: '/imgs/img6.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/img31.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Armchair',
    image: '/imgs/img15.jpg',
    price: '67$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Bed',
    image: '/imgs/img24.jpg',
    price: '90$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Vase',
    image: '/imgs/vase.jpg',
    price: '70$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'New',
  },
  {
    name: 'Sofa',
    image: '/imgs/sofa.jpg',
    price: '56$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Candelier',
    image: '/imgs/candle23.jpg',
    price: '50$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Clock',
    image: '/imgs/clock.jpg',
    price: '50$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
  {
    name: 'Table',
    image: '/imgs/table.jpg',
    price: '80$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor orci, euismod at.',
    size: '30*h x 20*w x 22.75*d (76.5x51x58cm)',
    material:
      'wood/plastic composition with 25% wood fibers +70% PP (polypoplen) +5% coloured PP',
    status: 'Sale',
  },
];

export default products;
