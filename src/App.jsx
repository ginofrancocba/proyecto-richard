import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Pagina4 from './Pagina4';
import Pagina5 from './Pagina5';
import Pagina6 from './Pagina6';
import Pagina7 from './Pagina7';
import Pagina8 from './Pagina8';
import './index.css';

const App = () => {
  return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/pagina3" element={<Pagina3 />} />
            <Route path="/pagina4" element={<Pagina4 />} />
            <Route path="/pagina5" element={<Pagina5 />} />
            <Route path="/pagina6" element={<Pagina6 />} />
            <Route path="/pagina7" element={<Pagina7 />} />
            <Route path="/pagina8" element={<Pagina8 />} />
          </Routes>
        </div>
    

  );
};

export default App;
