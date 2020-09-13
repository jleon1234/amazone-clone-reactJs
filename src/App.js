import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Checkout from './components/Checkout';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route  exact path="/login" component={Login} />
          <Route  exact path="/checkout" component={Checkout} />
          <Route  path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
