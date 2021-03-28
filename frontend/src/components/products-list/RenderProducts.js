import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

//Fetch products

const RenderProducts = ({keyword}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async function () {
      const req = await fetch(
        `http://localhost:5000/api/products?keyword=${keyword}`
      );
      try {
        const res = await req.json();
        setProducts(res);
        return res;
      } catch (error) {
        if (error.cod !== 200) {
          console.log('Error in Fetching', error);
        }
      }
    };
    fetchProduct();
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <main>
          <Container className={classes.cardGrid} maxWidth='lg'>
            <Grid container justify='center' spacing={4}>
              {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default RenderProducts;
