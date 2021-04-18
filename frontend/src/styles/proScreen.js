import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  btnColor: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.tertiary.dark,
    },
  },
}));

export default useStyles;
