import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import useStyles from '../styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import PaginationComponent from './../Pagination';
import '../../css/index.css';
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
    <ThemeProvider theme={theme}>
      <main>
        <Container>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={5}
          style={{height: 70}}
        >
          <Grid
            item
            className='gridNav'
            xs={6}
            sm={6}
            style={{ paddingLeft: 40 }}
          >
            <ul className='ulStyle'>
              <li className='liStyle'>Categories</li>
              <li className='liStyle'>Price</li>
              <li className='liStyle'>Color</li>
              <li className='liStyle'>Size</li>
            </ul>
          </Grid>
          <Grid item className='gridResult' xs={12} sm={6}>
            <div className='gridNav'>
              <p className='gridSelect'>Showing </p>
              <Selectitems pageSize={pageSize} setPageSize={setSize} />
              <p className='gridSelect'>items of {items} Results</p>
            </div>
          </Grid>
        </Grid>

         {/* --------------------------------------- */}
        <Divider variant='middle'/>

        {/* --------------------------------------- */}
        <Grid container justify='center' style={{marginTop:50}}>
          {/* grid item2 */}
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
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default RenderProducts;
