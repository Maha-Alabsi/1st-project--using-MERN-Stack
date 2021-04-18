import React from 'react';
import useStyles from '../styles/header';
import comStyles from '../styles/index'
import Switcher from './Switcher'
// Material UI Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';
import {
  Box,
  IconButton
} from '@material-ui/core';


const Header = ({setTheme}) => {
  const classes = useStyles();
  const commStyles = comStyles();
  return (
    <header>
      <CssBaseline />
      <AppBar >
        <Toolbar className={classes.hdStyle}>
          <Link href='#'>
          <IconButton>
            <MenuIcon className={`${commStyles.hdIcon} ${classes.materialLink}`} />
            </IconButton>
          </Link>
          <Link href='/'>
            <Typography variant='h6' className={classes.hdTypo} >
              Furniture Shop
            </Typography>
          </Link>
          <Box display='flex'>
          <Switcher setTheme={setTheme}/>
          <Link href='#'>
          <IconButton>
            <ShoppingCartIcon className={`${commStyles.hdIcon} ${classes.materialLink}`} />
            </IconButton>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
