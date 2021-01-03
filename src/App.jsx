import React from 'react';
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './style.scss';
import About from './About';
const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  </div>
);

export default App;
