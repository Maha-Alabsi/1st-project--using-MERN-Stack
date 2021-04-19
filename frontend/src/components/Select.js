import React from 'react';
// Material UI Components
import { MenuItem, Select } from '@material-ui/core';

const Selectitems = ({ pageSize, setPageSize }) => {
  const handleChange = (event, value) => {
    setPageSize(event.target.value);
  };
  return (
    <div>
      <Select
        labelId='demo-simple-select-required-label'
        id='demo-simple-select-required'
        value={pageSize}
        onChange={handleChange}
        style={{ borderStyle: 'none' }}
      >
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </div>
  );
};

export default Selectitems;
