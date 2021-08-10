import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  gridmarginTop: {
    height: '400px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 45,
    marginTop: '30px',
    boxShadow: '0px 0px 1px gray',
  },
  mainContainer: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  mainHeader: {
    fontWeight: 'bold',
  },
  mainPrice: {
    color: theme.palette.tertiary.main,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  typoDescrip: {
    marginTop: 6,
    color: theme.palette.text.primary,
  },
  subHdDescription: {
    color: theme.palette.text.secondary,
  },
  cover: {
    width: 500,
  },
  subHeader: {
    textTransform: 'capitalize',
  },
}));

export default useStyles;
