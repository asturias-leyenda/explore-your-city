import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Register from './Register';
import Register2 from './Register2';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/register2" component={Register2}/>
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
