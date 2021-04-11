import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationComponent = ({ page, pages, changePage }) => {
  const classes = useStyles();
  
  const handleChange = (event, value) => {
    changePage(value);
  };
  return (
    <div className={classes.root}>
      <Pagination
        count={pages}
        shape='rounded'
        size='small'
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationComponent;
