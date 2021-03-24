import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  hd: {
    dispay: 'flex',
    flexDirectiont: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  typo: {
    color: '#c8a165',
    fontWeight: 'bold',
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <CssBaseline />
      <AppBar position='relative' color='default'>
        <Toolbar className={classes.hd}>
          <MenuIcon fontSize='default' />
          <Typography variant='h5' className={classes.typo}>
            Furniture Shop
          </Typography>
          <ShoppingCartIcon fontSize='default' />
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
