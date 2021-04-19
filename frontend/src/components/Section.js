import React from 'react';
import useStyles from '../styles/section';
// Material UI Components
import CardMedia from '@material-ui/core/CardMedia';

const Section = () => {
  const classes = useStyles();
  return (
    <div className={classes.imageTransparent}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='300'
        image='/imgs/img36.jpg'
        title='Contemplative Reptile'
        className={classes.imageOpacity}
      />
    </div>
  );
};

export default Section;
