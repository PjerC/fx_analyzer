//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Dashboard from './Dashboard.js';
import CenterModule from './CenterModule.js';
import Footer from './Footer.js';
import './App.css';

const App = (props) => {

  return (
    <div className="d-flex text-secondary flex-column justify-content-center align-items-center m-1">
      <Dashboard/>
      <CenterModule/>
      <Footer/>
    </div>
  );
}

export default App;
