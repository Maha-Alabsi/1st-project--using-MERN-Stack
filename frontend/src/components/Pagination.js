import React from 'react';
import useStyles from '../styles/pagination';
// Material UI Components
import Pagination from '@material-ui/lab/Pagination';

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
