import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import useStyles from '../styles/proScreen';
import comStyles from '../styles/index';
// Material UI Components
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
  Breadcrumbs,
  Divider,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';

const ProductScreen = props => {
  const classes = useStyles();
  const commonClasses = comStyles();
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
    <div>
      <Section />
      <Container className={classes.mainContainer}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link to='/' className={commonClasses.reactLink}>
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
              <Typography variant='h5' className={classes.mainHeader}>
                {product.name}
              </Typography>
              <Typography variant='h6' className={classes.mainPrice}>
                {product.price}
              </Typography>
              <Typography variant='body2' className={classes.typoDescrip}>
                {product.description}
              </Typography>
              <Box display='flex-end' mt={2}>
                <Box>
                  <Typography variant='subtitle2' className={classes.subHeader}>
                    color
                  </Typography>
                </Box>
                <Box display='flex' ml={1}>
                  <Box
                    bgcolor='tertiary.main'
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
                <Typography variant='subtitle2' className={classes.subHeader}>
                  size
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.subHdDescription}
                >
                  {product.size}
                </Typography>
              </Box>
              <Box mt={2} mb={4}>
                <Typography variant='subtitle2' className={classes.subHeader}>
                  material
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.subHdDescription}
                >
                  {product.material}
                </Typography>
              </Box>
              <Box>
                <Divider variant='fullWidth' />
                <Box display='flex' justifyContent='space-between'>
                  <Box m={1}>
                    <Button
                      variant='contained'
                      size='small'
                      className={`${classes.subHeader} ${classes.btnColor}`}
                    >
                      buy now
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
              </Box>
            </CardContent>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ProductScreen;
