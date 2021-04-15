import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  hdStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hdTypo: {
    color: '#c8a165',
    fontWeight: 'bold',
  },
  materialLink: {
    textDecoration: 'none',
    color: '#434343',
  },
  linkDecoration: {
    textDecoration: 'none',
  },
});

export default useStyles;
