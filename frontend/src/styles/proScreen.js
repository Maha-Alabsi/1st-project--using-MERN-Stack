import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      padding: 45,
      marginTop: '30px',
      boxShadow: '0px 0px 1px gray',
    },
    mainContainer:{
        marginTop: '40px',
        marginBottom: '40px'
    },
    mainHeader:{
        fontWeight: 'bold' 
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    typoDescrip:{
        marginTop: 6 
    },
    cover: {
      width: 500,
    },
    subHeader:{
        textTransform: 'capitalize'
    }
  });

  export default useStyles;