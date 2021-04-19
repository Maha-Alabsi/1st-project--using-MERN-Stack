import React, { useState } from 'react';
import comStyles from '../styles/index';
import Themes from '../constants/theme';
import { Theme1, Theme2, Theme3 } from './../themes/index';
// Material UI
import { MenuItem, Menu, IconButton, Box, Typography } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

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

  // const handleChange = (event, value) => {
  //   setTheme (event.currentTarget.value);
  // };

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

// <Select
// labelId='demo-simple-select-required-label'
// id='demo-simple-select-required'
// onChange={handleChange}
// IconComponent={<InvertColorsIcon className={commStyles.hdIcon} />}
// >
// <MenuItem value={Themes.Theme1}>
// <Box display='flex'>
//       <Box
//         bgcolor={Theme1.palette.secondary.main}
//         width='2%'
//         height='2%'
//         p={1}
//         mr={1}
//       ></Box>
//       <Typography variant='subtitle2'>Theme1</Typography>
//     </Box>
// </MenuItem>
// <MenuItem value={Themes.Theme2}>
// <Box display='flex'>
//       <Box
//         bgcolor={Theme2.palette.primary.main}
//         width='2%'
//         height='2%'
//         p={1}
//         mr={1}
//       ></Box>
//       <Typography variant='subtitle2'>Theme2</Typography>
//     </Box>
// </MenuItem>
// <MenuItem value={Themes.Theme3}>
// <Box display='flex'>
//       <Box
//         bgcolor={Theme3.palette.primary.main}
//         width='2%'
//         height='2%'
//         p={1}
//         mr={1}
//       ></Box>
//       <Typography variant='subtitle2'>Theme3</Typography>
//     </Box>
// </MenuItem>

// </Select>
