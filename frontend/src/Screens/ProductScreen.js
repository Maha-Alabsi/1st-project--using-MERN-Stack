import React, { useState, useEffect } from 'react';
import Header from './../components/Header';
import Section from '../components/Section';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, IconButton } from '@material-ui/core';
import theme from '../components/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    // alignItems:'center',
    padding: 45,
    marginTop: '30px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,
  },
});

const ProductScreen = props => {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${props.match.params.id}`);
        const data = await res.json();
        setProduct(data);
        return data;
      } catch (error) {
        if (error.cod !== 200) {
          console.log('Error in Fetching', error);
        }
      }
    };
    fetchProduct();
  }, [props.match.params.id]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Section />
        <Container style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link to='/' className='reactLink'>
              Home
            </Link>
            <Typography color='textPrimary'>{product.name}</Typography>
          </Breadcrumbs>
          {/* --------------------------------------- */}
          <Divider variant='fullWidth' />

          {/* --------------------------------------- */}
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={product.image}
              title={product.name}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  variant='h5'
                  style={{ fontWeight: 'bold' }}
                  color=' tertiary'
                >
                  {product.name}
                </Typography>
                <Typography variant='h6' color='secondary'>
                  {product.price}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ marginTop: 6 }}
                >
                  {product.description}
                </Typography>
                <Box display='flex-end' mt={2}>
                  <Box>
                    <Typography variant='subtitle2' color=' tertiary'>
                      Color
                    </Typography>
                  </Box>
                  <Box display='flex' ml={1}>
                    <Box
                      bgcolor='primary.main'
                      width='2%'
                      height='2%'
                      p={1}
                      m={1}
                    ></Box>
                    <Box
                      bgcolor='secondary.main'
                      width='2%'
                      height='2%'
                      p={1}
                      m={1}
                    ></Box>
                    <Box
                      bgcolor='text.secondary'
                      width='2%'
                      height='2%'
                      p={1}
                      m={1}
                    ></Box>
                    <Box
                      bgcolor='text.primary'
                      width='2%'
                      height='2%'
                      p={1}
                      m={1}
                    ></Box>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Typography variant='subtitle2' color=' tertiary'>
                    Size
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {product.size}
                  </Typography>
                </Box>
                <Box mt={2} mb={4}>
                  <Typography variant='subtitle2' color=' tertiary'>
                    Material
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {product.material}
                  </Typography>
                </Box>
                <Divider variant='fullWidth' />
                <Box display='flex' justifyContent='space-between'>
                  <Box m={1}>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='small'
                      style={{ textTransform: 'capitalize' }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                  <Box>
                    <IconButton label='Favorite'>
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton label='view item'>
                      <ZoomInIcon />
                    </IconButton>
                    <IconButton label='Add to cart'>
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton label='Add item'>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Divider variant='fullWidth' />
              </CardContent>
            </div>
          </Card>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default ProductScreen;
