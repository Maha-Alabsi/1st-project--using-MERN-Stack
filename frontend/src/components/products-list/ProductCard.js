import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/card';
import comStyles from '../../styles/index';
import CartScreen from '../../screens/CartScreen'
// Material UI Components
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box 
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);

  const classes = useStyles();
  const commonClasses = comStyles();
  const bgColor = product.status === 'New' ? 'secondary.main' : 'tertiary.main';

  const addToCartHandler = ( )=> {
    <CartScreen cartItems={cartItems}></CartScreen>
    setCartItems([])
  };
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
            <Typography variant='h6'>{product.name}</Typography>
          </Link>
          <Typography variant='h6'>{product.price}</Typography>
        </div>
        <Typography variant='body2' className={classes.cardDescription}>
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
          <Link
            to={`/cart/${product._id}`}
            className={commonClasses.reactLink}
          >
          <IconButton label='Add to cart' onClick={addToCartHandler}>
            <AddShoppingCartIcon />
          </IconButton>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
