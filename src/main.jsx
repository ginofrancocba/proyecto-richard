import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 
import Navbar from './Navbar';
import './index.css';

createRoot(document.getElementById('root')).render(
    <Router>
      <div>
        <Navbar />
        <App />
      </div>
    </Router>
);