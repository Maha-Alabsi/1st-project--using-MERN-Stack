import { createMuiTheme } from '@material-ui/core/styles';

const Theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#5B7C8C',
      dark: '#3f5662',
    },
    secondary: {
      main: '#9fc1d1',
    },
    tertiary: {
      main: '#b60427',
      dark: '#7f021b',
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
export default Theme2;
