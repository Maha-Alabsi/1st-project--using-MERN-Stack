import React from 'react';
import Form from './Form';
import Grid from '@material-ui/core/Grid';

const Main = () => {
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{ height: '300px' }}
    >
      <Form />
    </Grid>
  );
};
export default Main;
