import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
  hdStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hdTypo: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  materialLink: {
    textDecoration: 'none',
  },
  linkDecoration: {
    textDecoration: 'none',
  },
}));

export default useStyles;
