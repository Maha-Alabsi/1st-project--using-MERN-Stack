import { createMuiTheme } from '@material-ui/core/styles';

const Theme2 = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#5B7C8C',
      dark: '#3f5662',
    },
    secondary: {
      main: '#9fc1d1',
    },
    tertiary: {
      main: '#b60427',
      dark: '#87796f',
    },
    text: {
      primary: '#434343',
      secondary: '#9e9e9e',
    },
  },
});
export default Theme2;
