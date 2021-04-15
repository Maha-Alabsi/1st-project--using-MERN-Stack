import React, { useState } from 'react';
import RenderProducts from './products-list/RenderProducts';
import useStyles from '../styles/main';
// Material UI Component
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

//Search Feature
const Main = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState('');

  const submitHandler = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
      <div>
        <Container>
          <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.gridHeight}
          >
            {/*Search for products*/}
            <Grid item>
              <Card>
                <CardContent>
                  <form onSubmit={submitHandler}>
                    <Grid container alignItems='center'>
                      <Grid item>
                        <TextField
                          name='searchItem'
                          value={keyword}
                          onChange={handleChange}
                          variant='outlined'
                          type='text'
                          label='Search Products...'
                          size='small'
                          className={classes.tFieldColor}
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/*Rendering products*/}
          <RenderProducts keyword={keyword} />
        </Container>
      </div>
  );
};

export default Main;
