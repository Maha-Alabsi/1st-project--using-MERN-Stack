import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(3),
      marginBottom: 20,
    },
  },
}));

export default useStyles;
