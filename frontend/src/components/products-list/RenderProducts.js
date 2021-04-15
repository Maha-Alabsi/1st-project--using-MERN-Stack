import React, { useState, useEffect } from 'react';
import useStyles from '../../styles/render';
import ProductCard from './ProductCard';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import PaginationComponent from './../Pagination';
import Divider from '@material-ui/core/Divider';
import Selectitems from './../Select';

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
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={5}
          className={classes.contHeight2}
        >
          <Grid item xs={12} sm={6} container className={classes.gridNav}>
            <Grid item className={classes.contLeftPadding}>
              <ul className={classes.ulStyle}>
                <li className={classes.liStyle}>Categories</li>
                <li className={classes.liStyle}>Price</li>
                <li className={classes.liStyle}>Color</li>
                <li className={classes.liStyle}>Size</li>
              </ul>
            </Grid>
          </Grid>
          <Grid item className={classes.gridResult} sm={6}>
            <div
              className={`${classes.result} ${classes.elementDisplay} ${classes.contRightPadding}`}
            >
              <p className={classes.gridSelect}>Showing </p>
              <Selectitems pageSize={pageSize} setPageSize={setSize} />
              <p className={classes.itemResult}>items of {items} Results</p>
            </div>
          </Grid>
        </Grid>

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

          {/* grid item3 */}
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
