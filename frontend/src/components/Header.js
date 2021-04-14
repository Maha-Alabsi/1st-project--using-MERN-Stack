import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

import '../css/header.css';

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <CssBaseline />
        <AppBar position='relative' color='default'>
          <Toolbar className='hdStyle'>
            <Link href='#'>
              <MenuIcon fontSize='default' className='materialLink' />
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <Typography variant='h5' color='primary'>
                Furniture Shop
              </Typography>
            </Link>
            <Link href='#'>
              <ShoppingCartIcon fontSize='default' className='materialLink' />
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </ThemeProvider>
  );
};
export default Header;
