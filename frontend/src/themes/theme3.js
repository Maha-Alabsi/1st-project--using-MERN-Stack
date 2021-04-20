import { createMuiTheme } from '@material-ui/core/styles';
import '../font.css';
const Theme3 = createMuiTheme({
  palette: {
    primary: {
      main: '#a17a74',
      dark: '#705551',
    },
    secondary: {
      main: '#fcdeab',
    },
    tertiary: {
      main: '#b3948f',
      dark: '#7d6764',
    },
    text: {
      primary: '#434343',
      secondary: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: ['Playfair Display', 'serif'],
    h1: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
  },
});
export default Theme3;
