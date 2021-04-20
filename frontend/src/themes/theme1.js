import { createMuiTheme } from '@material-ui/core/styles';

const Theme1 = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
      dark: '#ababab',
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
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
  },
});
export default Theme1;
