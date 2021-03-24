import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchItem: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <Grid container justify='center' alignItems='center' spacing={8}>
          <Grid item xs={7}>
            <TextField
              name='searchItem'
              value={this.state.searchItem}
              onChange={this.handleChange}
              type='text'
              label='Serach'
              size='small'
              style={{ width: '300px', height: 50 }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type='submit'
              variant='contained'
              onClick={this.handleChange}
              endIcon={<SearchIcon />}
              style={{
                textTransform: 'none',
                backgroundColor: '#c87065',
                color: 'white',
              }}
              size='medium'
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Form;
