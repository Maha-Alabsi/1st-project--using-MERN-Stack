import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ThemeProvider } from '@material-ui/core/styles';
import RenderProducts from './products-list/RenderProducts';
import theme from './products-list/theme';

//Search Feature
const SearchForm = () => {
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
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ height: '300px' }}
        >
          <form onSubmit={submitHandler}>
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <TextField
                  name='searchItem'
                  value={keyword}
                  onChange={handleChange}
                  variant='outlined'
                  type='text'
                  label='Search Products...'
                  size='small'
                  style={{ width: '400px', color: 'white' }}
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
        </Grid>
        <RenderProducts keyword={keyword} />
      </div>
    </ThemeProvider>
  );
};

export default SearchForm;
