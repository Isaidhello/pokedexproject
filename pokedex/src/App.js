import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Navbar from './Components/Layout/Navbar';
import DashBoard from './Components/Layout/DashBoard';
import Pokemon from './Components/Pokemon/Pokemon';

function App() {
  return (
    <Router>
    <div className="App">
<Navbar />
<div className="container">
  
  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
  </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;

