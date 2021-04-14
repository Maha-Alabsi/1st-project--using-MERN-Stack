import React from 'react';
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
import useStyles from '../styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { Link } from 'react-router-dom';
import '../../css/card.css';
import Box from '@material-ui/core/Box';

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const bgColor = product.status === 'New' ? 'primary.main' : 'secondary.main';
  return (
    <ThemeProvider theme={theme}>
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
            <Link to={`/product/${product._id}`} className='reactLink'>
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
        <CardActions
          disableSpacing
          className={classes.CardActions}
        ></CardActions>
        <div className={classes.bottomRow}>
          <Box Container bgcolor={bgColor} className='pro-label'>
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
    </ThemeProvider>
  );
};

export default ProductCard;
