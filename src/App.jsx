import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Pages/Navbar'
import Home from './componentes/Pages/Home/Home';
import Numerologie from './componentes/Pages/Numerologie';
import Tarot from './componentes/Pages/Tarot';
import Formations from './componentes/Pages/Formations';
import Seances from './componentes/Pages/Seances';
import Surmoi from './componentes/Pages/Surmoi';
import Blog from './componentes/Pages/Blog';
import Boutique from './componentes/Pages/Boutique';
import './index.css';

function App () {
  return (
    <>
    <Router>  
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Numerologie" element={<Numerologie />} />
          <Route path="/Tarot" element={<Tarot />} />
          <Route path="/Formations" element={<Formations />} />
          <Route path="/Seances" element={<Seances />} />
          <Route path="/surmoi" element={<Surmoi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes> 
    </Router>
    </>
  );
};

export default App;
