import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

const Section = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='300'
        image='/imgs/img36.jpg'
        title='Contemplative Reptile'
        style={{ opacity: '0.6' }}
      />
    </div>
  );
};

export default Section;
