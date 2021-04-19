import { createMuiTheme } from '@material-ui/core/styles';

const Theme1 = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#f5f5f5',
      dark: '#c8a165',
    },
    secondary: {
      main: '#c8a165',
    },
    tertiary: {
      main: '#c87065',
      dark: '#93625b',
    },
    text: {
      primary: '#434343',
      secondary: '#9e9e9e',
    },
  },
});
export default Theme1;
