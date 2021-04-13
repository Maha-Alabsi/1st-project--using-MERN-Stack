import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/section.css' 

const Section = () => {
  return (
    <div className='imageTransparent'>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='300'
        image='/imgs/img36.jpg'
        title='Contemplative Reptile'
        className='imageOpacity'
      />
    </div>
  );
};

export default Section;
