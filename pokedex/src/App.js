import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import DashBoard from './Components/Layout/DashBoard';

function App() {
  return (
    <div className="App">
<Navbar />
<div className="container">
  <DashBoard />
    </div>
    </div>
  );
}

export default App;
