import { makeStyles } from '@material-ui/core/styles';
const comStyles = makeStyles(theme => ({
  reactLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  hdIcon: {
    color: theme.palette.primary.dark,
  },
}));

export default comStyles;
