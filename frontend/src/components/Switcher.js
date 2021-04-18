import React, { useState } from 'react';
import comStyles from '../styles/index';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Themes from '../constants/theme';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Theme1, Theme2, Theme3 } from './../themes/index';

const Switcher = ({ setTheme }) => {
  const commStyles = comStyles();
  const [anchorEl, setAnchorEl] = useState(0);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme1 = () => {
    setTheme(Themes.Theme1);
  };
  const handleTheme2 = () => {
    setTheme(Themes.Theme2);
  };
  const handleTheme3 = () => {
    setTheme(Themes.Theme3);
  };
  return (
    <div>
      <IconButton onClick={handleClick}>
        <InvertColorsIcon className={commStyles.hdIcon} />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          value={Themes.Theme1}
          onClick={e => {
            handleTheme1();
            handleClose(e);
          }}
        >
          <Box display='flex'>
            <Box
              bgcolor={Theme1.palette.secondary.main}
              width='2%'
              height='2%'
              p={1}
              mr={1}
            ></Box>
            <Typography variant='subtitle2'>Theme1</Typography>
          </Box>
        </MenuItem>
        <MenuItem
          value={Themes.Theme2}
          onClick={e => {
            handleTheme2();
            handleClose(e);
          }}
        >
          <Box display='flex'>
            <Box
              bgcolor={Theme2.palette.primary.main}
              width='2%'
              height='2%'
              p={1}
              mr={1}
            ></Box>
            <Typography variant='subtitle2'>Theme2</Typography>
          </Box>
        </MenuItem>
        <MenuItem
          value={Themes.Theme3}
          onClick={e => {
            handleTheme3();
            handleClose(e);
          }}
        >
          <Box display='flex'>
            <Box
              bgcolor={Theme3.palette.primary.main}
              width='2%'
              height='2%'
              p={1}
              mr={1}
            ></Box>
            <Typography variant='subtitle2'>Theme3</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Switcher;
