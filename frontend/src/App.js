import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div>
      <Route exact path ='/' component={HomeScreen}/>
      <Route path='/product/:id' component={ProductScreen}/>
    </div>
    </Router> 
  );
};

export default App;
