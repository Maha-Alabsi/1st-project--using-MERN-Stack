import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Themes from './constants/theme';
import getTheme from './getTheme';
import { ThemeProvider } from '@material-ui/core';

const App = () => {
  const currentThemeName = localStorage.getItem('appTheme' || Themes.Theme1);
  const [themeName, setThemeName] = useState(currentThemeName);
  localStorage.setItem('appTheme', themeName);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Router>
        <div>
          <Header setTheme={setThemeName} />
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
