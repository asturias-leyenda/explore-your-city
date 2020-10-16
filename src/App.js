import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

// Function to test that jest is working
export const sum = (a, b) => {
  return a + b;
}

export default App;
