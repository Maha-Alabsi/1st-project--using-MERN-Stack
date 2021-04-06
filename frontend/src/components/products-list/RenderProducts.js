import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import useStyles from '../styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import PaginationComponent from './../Pagination';
import CardContent from '@material-ui/core/CardContent';
import '../../css/index.css';

// Fetch products
const RenderProducts = ({ keyword }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [items, setItems] = useState(1);
  const [pageSize, setSize] = useState(1);

  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const res = await fetch(
          `/api/products?keyword=${keyword}&page=${page}`
        );
        const data = await res.json();
        setProducts(data.products);
        setPages(data.totalpages);
        setSize(data.pageSize)
        setItems(data.totalitems);
        return data;
      } catch (error) {
        if (error.cod !== 200) {
          console.log('Error in Fetching', error);
        }
      }
    };
    fetchProducts();
  }, [keyword,page]);

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Grid container justify='center' spacing={4}>
          <Grid item xs={12}>
            <CardContent className='gridNav'>
              <div>
                <ul className='ulStyle'>
                  <li className='liStyle'>Categories</li>
                  <li className='liStyle'>Price</li>
                  <li className='liStyle'>Color</li>
                  <li className='liStyle'>Size</li>
                </ul>
              </div>
              <div>Showing {pageSize} items of {items} Results</div>
            </CardContent>
            <hr />
          </Grid>

          <Grid item xs={12}>
            <Container className={classes.cardGrid} maxWidth='lg'>
              <Grid container justify='center' spacing={4}>
                {products.map(product => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <PaginationComponent
              page={page}
              pages={pages}
              changePage={setPage}
            />
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
};

export default RenderProducts;
