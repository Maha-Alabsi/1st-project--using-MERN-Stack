import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c8a165',
      },
      secondary: {
        main: '#c87065',
      },
    },
  });
  const btnColor = product.status === 'New' ? 'primary' : 'secondary';
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h6' gutterBottom>
              {product.name}
            </Typography>
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
          <Button
            variant='contained'
            size='small'
            color={btnColor}
            style={{ color: '#fff', textTransform: 'none' }}
          >
            {' '}
            {product.status}
          </Button>
          <div>
            <IconButton aria-label='Favorite'>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label='view item'>
              <ZoomInIcon />
            </IconButton>
            <IconButton aria-label='Add to cart'>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
