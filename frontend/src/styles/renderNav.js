import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingRight: '60px',
      fontSize:'17px'
    },
  },

  ulStyle: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  liStyle: {
    padding: '10px',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  navResult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(5),
    paddingRight: '40',
  },
  elementDisplay: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
