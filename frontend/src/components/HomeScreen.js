import React from 'react';
import Header from './Header';
import Main from './MainInto';
import ProMainGrid from './products-list/ProMainGrid';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Main />
      <ProMainGrid />
    </div>
  );
};

export default HomeScreen;
