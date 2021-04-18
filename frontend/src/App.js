import React,{useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Header from './components/Header'
import Themes from './constants/theme';
import getTheme from './getTheme'
const App = () => {
  const [themeName,setThemeName] = useState(Themes.Theme1);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Router>
        <div>
          <Header setTheme={setThemeName}/>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
