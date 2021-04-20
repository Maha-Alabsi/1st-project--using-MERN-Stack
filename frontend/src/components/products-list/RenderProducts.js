import React, { useState, useEffect } from 'react';
import useStyles from '../../styles/render';
import ProductCard from './ProductCard';
import ProductsNav from './ProductNav';
import PaginationComponent from './../Pagination';
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
    const fetchProducts = async function () {
      try {
        const res = await fetch(
          `/api/products?keyword=${keyword}&page=${page}&limit=${pageSize}`
        );
        const data = await res.json();
        setProducts(data.products);
        setPages(data.totalpages);
        setSize(data.pageSize);
        setItems(data.totalitems);
        return data;
      } catch (error) {
        if (error.cod !== 200) {
          console.log('Error in Fetching', error);
        }
      }
    };
    fetchProducts();
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
