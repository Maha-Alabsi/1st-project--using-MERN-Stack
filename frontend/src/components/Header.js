import React from 'react';
import useStyles from '../styles/header';
// Material UI Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.hdStyle}>
          <Link href='#'>
            <MenuIcon className={classes.materialLink} />
          </Link>
          <Link href='/'>
            <Typography variant='h6' color='secondary'>
              Furniture Shop
            </Typography>
          </Link>
          <Link href='#'>
            <ShoppingCartIcon className={classes.materialLink} />
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
