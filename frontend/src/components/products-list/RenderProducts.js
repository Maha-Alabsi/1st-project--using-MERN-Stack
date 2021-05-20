import React, { useState, useEffect } from 'react';
import useStyles from '../../styles/render';
import ProductCard from './ProductCard';
import ProductsNav from './ProductsNav';
import PaginationComponent from './../Pagination';
import fetchProducts from '../../services/fetchProducts';
// Material UI Components
import { Container, Divider, Grid } from '@material-ui/core';

// Fetch products
const RenderProducts = ({ keyword }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [items, setItems] = useState(1);
  const [pageSize, setSize] = useState(8);

  useEffect(() => {
    const fetchFunction = async function () {
      try {
        const fetchData = await fetchProducts(keyword, page, pageSize);
        setProducts(fetchData.products);
        setPages(fetchData.totalpages);
        setSize(fetchData.pageSize);
        setItems(fetchData.totalitems);
        return fetchData;
      } catch (error) {
        if (error.cod !== 200) {
          console.log('Error in Fetching', error);
        }
      }
    };
    fetchFunction();
  }, [keyword, page, pageSize]);

  const classes = useStyles();
  return (
    <main>
      <Container>
        <ProductsNav pageSize={pageSize} setPageSize={setSize} items={items} />
        {/* --------------------------------------- */}
        <Divider variant='middle' />
        {/* --------------------------------------- */}
        <Grid container justify='center' className={classes.cardGrid}>
          {/* grid item1 */}
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
          {/* grid item2*/}
          <Grid item xs={12} className={classes.paginationStyle}>
            <PaginationComponent
              page={page}
              pages={pages}
              changePage={setPage}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default RenderProducts;
