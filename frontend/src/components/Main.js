import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ThemeProvider } from '@material-ui/core/styles';
import RenderProducts from './products-list/RenderProducts';
import theme from './theme';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

//Search Feature
const Main = () => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{ height: '200px' }}
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
                          style={{ color: 'white', width: '400px' }}
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
    </ThemeProvider>
  );
};

export default Main;
