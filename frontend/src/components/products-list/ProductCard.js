import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/card';
import comStyles from '../../styles/index';
// Material UI Components
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const commonClasses = comStyles();
  const bgColor = product.status === 'New' ? 'primary.main' : 'secondary.main';
  return (
    <Card className={classes.root}>
      <Link to={`/product/${product._id}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Link
            to={`/product/${product._id}`}
            className={commonClasses.reactLink}
          >
            <Typography variant='h6' gutterBottom>
              {product.name}
            </Typography>
          </Link>
          <Typography variant='h6' gutterBottom>
            {product.price}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}></CardActions>
      <div className={classes.bottomRow}>
        <Box Container bgcolor={bgColor} className={classes.proLabel}>
          {product.status}
        </Box>
        <div>
          <IconButton label='Favorite'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton label='view item'>
            <ZoomInIcon />
          </IconButton>
          <IconButton label='Add to cart'>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
