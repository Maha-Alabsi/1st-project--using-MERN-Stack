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
      main: '#B8CED9',
    },
    tertiary: {
      main: '#D9CAB8',
      // #A67458
      dark: '#978d80',
    },
    text: {
      primary: '#434343',
      secondary: '#9e9e9e',
    },
  },
});
export default Theme2;
