import React from 'react';
import Header from './Header';
import SearchProducts from './products-list/SearchProducts';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <SearchProducts />
    </div>
  );
};

export default HomeScreen;
