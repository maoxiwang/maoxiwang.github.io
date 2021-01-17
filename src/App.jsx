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
import BattleBots from './pages/BattleBots';
import Capstone from './pages/Capstone';
import FEMA from'./pages/FEMA'; 
import Speaker from'./pages/Speaker'; 
import DBF from './pages/DBF';
import ANOVA from './pages/ANOVA';
import Spectrometer from './pages/Spectrometer';
import Shaft from './pages/Shaft';
import Regression from './pages/Regression';
import ScrewJack from './pages/ScrewJack';
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
        <Route path="/BattleBots">
          <BattleBots />
        </Route>
        <Route path="/Capstone">
          <Capstone/>
        </Route>
        <Route path="/FEMA">
          <FEMA/>
        </Route>
        <Route path="/Speaker">
          <Speaker/>
        </Route>
        <Route path="/DBF">
          <DBF/>
        </Route>
        <Route path="/ANOVA">
          <ANOVA/>
        </Route>
        <Route path="/Spectrometer">
          <Spectrometer/>
        </Route>
        <Route path="/Shaft">
          <Shaft/>
        </Route>
        
        <Route path="/Regression">
          <Regression/>
        </Route>
        <Route path="/ScrewJack">
          <ScrewJack/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  </div>
);

export default App;
