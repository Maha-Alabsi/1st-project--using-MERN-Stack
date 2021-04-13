import React from 'react';
import Selectitems from '../Select';
import '../../css/index.css';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const productsNav = ({pageSize,setSize,items}) => {
  return (
    <div>
      <Grid
        item
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        spacing={6}
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
      <Divider />
    </div>
  );
};

export default productsNav;
