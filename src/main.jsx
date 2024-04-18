import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
