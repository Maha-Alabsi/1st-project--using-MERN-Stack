import React from 'react';
import Selectitems from '../Select';
import '../../css/index.css';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../styles/render';

const ProductsNav = ({ pageSize1, setSize1, items1 }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction='row'
        alignItems='center'
        spacing={5}
        className={classes.contHeight2}
      >
        <Grid item xs={12} sm={6} className={classes.gridNav}>
          <div className={classes.contLeftPadding}>
            <ul className={classes.ulStyle}>
              <li className={classes.liStyle}>categories</li>
              <li className={classes.liStyle}>price</li>
              <li className={classes.liStyle}>color</li>
              <li className={classes.liStyle}>size</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridResult}>
          <div
            className={`${classes.result} ${classes.elementDisplay} ${classes.contRightPadding}`}
          >
            <p className={classes.gridSelect}>showing </p>
            <Selectitems pageSize={pageSize1} setPageSize={setSize1} />
            <p className={classes.itemResult}>items of {items1} results</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsNav;
