import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  gridNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100px',
  },
  ulStyle: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  liStyle: {
    padding: '10px',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    },
    textTransform: 'capitalize',
  },
  gridResult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '20px',
    textTransform: 'capitalize',
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100px',
    marginRight: '60px',
  },
  gridSelect: {
    padding: '10px',
  },
  itemResult: {
    whiteSpace: 'nowrap',
  },
  elementDisplay: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  contHeight2: {
    height: 100,
  },
  contLeftPadding: {
    paddingLeft: 15,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 50,
    },
  },
  contRightPadding: {
    paddingRight: 10,
  },
  cardGrid: {
    marginTop: 20,
  },
  paginationStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default useStyles;
