import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route  path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
