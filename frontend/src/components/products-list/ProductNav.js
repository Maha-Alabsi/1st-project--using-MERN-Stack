import React from 'react';
import Selectitems from '../Select';
import { Container, Toolbar } from '@material-ui/core';
import useStyles from '../../styles/renderNav';

const ProductsNav = ({ pageSize, setPageSize, items }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Toolbar className={classes.root}>
          <div>
            <ul className={classes.ulStyle}>
              <li className={classes.liStyle}>categories</li>
              <li className={classes.liStyle}>price</li>
              <li className={classes.liStyle}>color</li>
              <li className={classes.liStyle}>size</li>
            </ul>
          </div>
          <div className={`${classes.elementDisplay}`}>
            <div className={classes.navResult}>
              <p>showing</p>
              <Selectitems pageSize={pageSize} setPageSize={setPageSize} />
              <p>items of {items} results</p>
            </div>
          </div>
        </Toolbar>
      </Container>
    </div>
  );
};

export default ProductsNav;
