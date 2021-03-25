import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const submitHandler = event => {
    event.preventDefault();
  };
  const handleChange = event => {
    setKeyword(event.target.value);
  };

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
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ height: '300px' }}
        >
          <form onSubmit={submitHandler}>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={12}>
                <TextField
                  name='searchItem'
                  value={keyword}
                  onChange={handleChange}
                  variant='outlined'
                  type='text'
                  label='Search Products...'
                  size='small'
                  style={{ width: '400px', height: 50, color: 'white' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
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

export default SearchProducts;
